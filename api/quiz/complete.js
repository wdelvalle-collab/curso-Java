const { getDb } = require('../_lib/db');
const { requireStudent } = require('../_lib/auth');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  try {
    const student = requireStudent(req);
    const { topicId, score, answers } = req.body;
    if (topicId == null || score == null)
      return res.status(400).json({ error: 'Datos incompletos' });

    const sql = getDb();
    const answersJson = answers ? JSON.stringify(answers) : null;
    await sql`
      INSERT INTO quiz_progress (student_id, topic_id, score, answers)
      VALUES (${student.id}, ${topicId}, ${score}, ${answersJson}::jsonb)
      ON CONFLICT (student_id, topic_id)
      DO UPDATE SET
        score   = GREATEST(quiz_progress.score, ${score}),
        answers = CASE
          WHEN ${score} >= quiz_progress.score THEN ${answersJson}::jsonb
          ELSE quiz_progress.answers
        END,
        completed_at = NOW()
    `;
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    const status = err.message === 'No autorizado' ? 401 : 500;
    res.status(status).json({ error: err.message });
  }
};
