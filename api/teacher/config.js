const { getDb } = require('../_lib/db');
const { requireTeacher } = require('../_lib/auth');

module.exports = async function handler(req, res) {
  try {
    requireTeacher(req);
  } catch {
    return res.status(401).json({ error: 'No autorizado' });
  }

  if (req.method !== 'PUT') return res.status(405).end();

  try {
    const { allowQuizPdf } = req.body;
    if (typeof allowQuizPdf !== 'boolean')
      return res.status(400).json({ error: 'allowQuizPdf debe ser boolean' });

    const sql = getDb();
    await sql`
      INSERT INTO config (key, value)
      VALUES ('allow_quiz_pdf', ${JSON.stringify(allowQuizPdf)}::jsonb)
      ON CONFLICT (key) DO UPDATE SET value = ${JSON.stringify(allowQuizPdf)}::jsonb
    `;
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error interno' });
  }
};
