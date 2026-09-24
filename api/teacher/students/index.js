const { getDb } = require('../../_lib/db');
const { requireTeacher, hashPassword } = require('../../_lib/auth');

module.exports = async function handler(req, res) {
  try {
    requireTeacher(req);
  } catch {
    return res.status(401).json({ error: 'No autorizado' });
  }

  const sql = getDb();

  if (req.method === 'GET') {
    try {
      const rows = await sql`
        SELECT s.id, s.nombre, s.apellido, s.grupo, s.created_at, s.last_access,
          (SELECT COUNT(*) FROM lesson_progress WHERE student_id = s.id) AS lessons_completed,
          (SELECT COUNT(*) FROM quiz_progress WHERE student_id = s.id) AS quizzes_completed,
          (SELECT ROUND(AVG(score))::int FROM quiz_progress WHERE student_id = s.id) AS quiz_avg_score,
          (SELECT json_agg(json_build_object('topicId', topic_id, 'score', score) ORDER BY completed_at)
           FROM quiz_progress WHERE student_id = s.id) AS quiz_details
        FROM students s
        ORDER BY s.apellido, s.nombre
      `;
      res.status(200).json(rows);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Error interno' });
    }

  } else if (req.method === 'POST') {
    try {
      const { nombre, apellido, grupo, password } = req.body;
      if (!nombre || !apellido || !grupo || !password)
        return res.status(400).json({ error: 'Datos incompletos' });

      const hash = hashPassword(password);
      const rows = await sql`
        INSERT INTO students (nombre, apellido, grupo, password_hash)
        VALUES (${nombre.trim()}, ${apellido.trim()}, ${grupo.trim()}, ${hash})
        RETURNING id, nombre, apellido, grupo, created_at
      `;
      res.status(201).json(rows[0]);
    } catch (err) {
      console.error(err);
      if (err.code === '23505')
        return res.status(409).json({ error: 'El estudiante ya existe' });
      res.status(500).json({ error: 'Error interno' });
    }

  } else {
    res.status(405).end();
  }
};
