const { getDb } = require('../_lib/db');
const { requireStudent } = require('../_lib/auth');

module.exports = async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).end();
  try {
    const student = requireStudent(req);
    const sql = getDb();

    const lessons = await sql`
      SELECT lesson_id FROM lesson_progress WHERE student_id = ${student.id}
    `;
    const quizzes = await sql`
      SELECT topic_id, score FROM quiz_progress WHERE student_id = ${student.id}
    `;

    res.status(200).json({
      completedLessons: lessons.map(r => r.lesson_id),
      completedQuizzes: quizzes.map(r => ({ topicId: r.topic_id, score: r.score }))
    });
  } catch (err) {
    console.error(err);
    const status = err.message === 'No autorizado' ? 401 : 500;
    res.status(status).json({ error: err.message });
  }
};
