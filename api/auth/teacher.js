const { getDb } = require('../_lib/db');
const { hashPassword, signTeacher, requireTeacher } = require('../_lib/auth');

module.exports = async function handler(req, res) {

  // ── LOGIN ──────────────────────────────────────────────────────────────────
  if (req.method === 'POST') {
    try {
      const { nombre, apellido, password } = req.body;
      if (!password) return res.status(400).json({ error: 'Contraseña requerida' });

      const hash = hashPassword(password);
      const sql = getDb();

      // Buscar en la tabla teachers
      let found = false;
      try {
        const rows = await sql`
          SELECT id FROM teachers
          WHERE LOWER(nombre) = LOWER(${(nombre || '').trim()})
          AND LOWER(apellido) = LOWER(${(apellido || '').trim()})
          AND password_hash = ${hash}
        `;
        found = rows.length > 0;
      } catch {
        // La tabla no existe aún — caer al fallback de variable de entorno
      }

      // Fallback a TEACHER_PASSWORD_HASH (sin nombre/apellido)
      if (!found && hash === process.env.TEACHER_PASSWORD_HASH) {
        found = true;
      }

      if (!found) return res.status(401).json({ error: 'Credenciales incorrectas' });

      const token = signTeacher();
      res.status(200).json({ token });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Error interno' });
    }

  // ── GUARDAR CUENTA DOCENTE ─────────────────────────────────────────────────
  } else if (req.method === 'PUT') {
    try {
      requireTeacher(req);
      const { nombre, apellido, newPassword } = req.body;
      if (!nombre || !apellido || !newPassword)
        return res.status(400).json({ error: 'Datos incompletos' });

      const sql = getDb();
      const hash = hashPassword(newPassword);

      const existing = await sql`
        SELECT id FROM teachers
        WHERE LOWER(nombre) = LOWER(${nombre.trim()}) AND LOWER(apellido) = LOWER(${apellido.trim()})
      `;
      if (existing.length > 0) {
        await sql`UPDATE teachers SET password_hash = ${hash} WHERE id = ${existing[0].id}`;
      } else {
        await sql`INSERT INTO teachers (nombre, apellido, password_hash) VALUES (${nombre.trim()}, ${apellido.trim()}, ${hash})`;
      }

      res.status(200).json({ ok: true });
    } catch (err) {
      console.error(err);
      const status = err.message === 'No autorizado' ? 401 : 500;
      res.status(status).json({ error: err.message });
    }

  } else {
    res.status(405).end();
  }
};
