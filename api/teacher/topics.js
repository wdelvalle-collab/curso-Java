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
    const { enabledTopics } = req.body;
    if (!Array.isArray(enabledTopics))
      return res.status(400).json({ error: 'enabledTopics debe ser array' });

    const sql = getDb();
    await sql`
      INSERT INTO config (key, value)
      VALUES ('enabled_topics', ${JSON.stringify(enabledTopics)}::jsonb)
      ON CONFLICT (key) DO UPDATE SET value = ${JSON.stringify(enabledTopics)}::jsonb
    `;
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error interno' });
  }
};
