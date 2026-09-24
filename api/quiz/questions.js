const { QUIZZES } = require('../_lib/quizzes');
const { requireStudent } = require('../_lib/auth');

module.exports = async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).end();
  try {
    requireStudent(req);
    const topicId = parseInt(req.query.topicId);
    const quiz = QUIZZES.find(q => q.topicId === topicId);
    if (!quiz) return res.status(404).json({ error: 'Quiz no encontrado' });

    // Devolver preguntas SIN correct ni exp
    const questions = quiz.questions.map(({ q, opts, code }) => ({
      q, opts, ...(code ? { code } : {})
    }));
    res.setHeader('Cache-Control', 'no-store');
    res.status(200).json({ topicId: quiz.topicId, title: quiz.title, questions });
  } catch (err) {
    const status = err.message === 'No autorizado' ? 401 : 500;
    res.status(status).json({ error: err.message });
  }
};
