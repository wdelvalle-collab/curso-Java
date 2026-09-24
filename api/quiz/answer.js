const { QUIZZES } = require('../_lib/quizzes');
const { requireStudent } = require('../_lib/auth');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  try {
    requireStudent(req);
    const { topicId, questionIndex, answer } = req.body;
    const quiz = QUIZZES.find(q => q.topicId === topicId);
    if (!quiz) return res.status(404).json({ error: 'Quiz no encontrado' });
    const question = quiz.questions[questionIndex];
    if (!question) return res.status(400).json({ error: 'Pregunta no encontrada' });

    const correct = answer === question.correct;
    res.status(200).json({ correct, explanation: question.exp, correctIndex: question.correct });
  } catch (err) {
    const status = err.message === 'No autorizado' ? 401 : 500;
    res.status(status).json({ error: err.message });
  }
};
