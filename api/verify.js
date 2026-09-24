const { createHash } = require('crypto');
const { getDb } = require('./_lib/db');
const { requireStudent } = require('./_lib/auth');
const { EXPECTED_OUTPUT_HASHES } = require('./_lib/expected-outputs');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  // ── EJECUTAR CÓDIGO ──────────────────────────────────────────────────────────
  if (req.body && req.body.code !== undefined) {
    const { code, stdin } = req.body;

    const callJudge0 = async () => {
      const r = await fetch('https://ce.judge0.com/submissions?base64_encoded=true&wait=true', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source_code: Buffer.from(code, 'utf8').toString('base64'),
          language_id: 62, // OpenJDK 13.0.1
          stdin: Buffer.from(stdin || '', 'utf8').toString('base64')
        })
      });
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    };

    const decode64 = s => s ? Buffer.from(s, 'base64').toString('utf8') : '';

    try {
      let data;
      try {
        data = await callJudge0();
      } catch (firstErr) {
        console.error('Judge0 intento 1 falló:', firstErr && firstErr.message ? firstErr.message : firstErr);
        // Reintento único tras 1.5s si falla
        await new Promise(r => setTimeout(r, 1500));
        data = await callJudge0();
      }

      const stdout = decode64(data.stdout).trim();
      const stderr = decode64(data.stderr).trim();
      const compileErr = decode64(data.compile_output).trim();

      return res.status(200).json({ stdout, stderr, compileErr });
    } catch (e) {
      console.error('Judge0 no disponible tras reintento:', e && e.message ? e.message : e);
      return res.status(503).json({ error: 'El servidor de ejecución no está disponible. Intentar de nuevo.' });
    }
  }

  // ── VERIFICAR SALIDA ─────────────────────────────────────────────────────────
  try {
    const student = requireStudent(req);
    const { lessonId, output } = req.body;
    const expectedHash = EXPECTED_OUTPUT_HASHES[lessonId];
    if (!expectedHash) return res.status(400).json({ error: 'Lección no encontrada' });

    const normalize = s => s.replace(/\r\n/g, '\n').trim();
    const outputHash = createHash('sha256').update(normalize(output || '')).digest('hex');
    const correct = outputHash === expectedHash;

    if (correct) {
      const sql = getDb();
      await sql`
        INSERT INTO lesson_progress (student_id, lesson_id)
        VALUES (${student.id}, ${lessonId})
        ON CONFLICT DO NOTHING
      `;
    }
    // Nunca devolver la salida esperada: un intento fallido no debe filtrar la respuesta.
    res.status(200).json({ correct });
  } catch (err) {
    console.error(err);
    const status = err.message === 'No autorizado' ? 401 : 500;
    res.status(status).json({ error: err.message });
  }
};
