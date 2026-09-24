const { getDb } = require('./_lib/db');

module.exports = async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).end();
  try {
    const sql = getDb();
    const rows = await sql`SELECT key, value FROM config WHERE key IN ('enabled_topics', 'allow_quiz_pdf')`;
    const map = Object.fromEntries(rows.map(r => [r.key, r.value]));
    const enabledTopics = map['enabled_topics'] ?? [1];
    const allowQuizPdf = map['allow_quiz_pdf'] ?? false;
    res.setHeader('Cache-Control', 'no-store');
    res.status(200).json({ enabledTopics, allowQuizPdf });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error interno' });
  }
};
