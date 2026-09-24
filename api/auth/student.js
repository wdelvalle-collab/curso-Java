const { getDb } = require('../_lib/db');
const { hashPassword, signStudent } = require('../_lib/auth');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  try {
    const { nombre, apellido, password } = req.body;
    if (!nombre || !apellido || !password)
      return res.status(400).json({ error: 'Datos incompletos' });

    const sql = getDb();
    const rows = await sql`
      SELECT * FROM students
      WHERE LOWER(nombre) = LOWER(${nombre.trim()})
        AND LOWER(apellido) = LOWER(${apellido.trim()})
    `;
    if (!rows.length)
      return res.status(401).json({ error: 'Estudiante no encontrado' });

    const student = rows[0];
    if (student.password_hash !== hashPassword(password))
      return res.status(401).json({ error: 'Contraseña incorrecta' });

    await sql`UPDATE students SET last_access = NOW() WHERE id = ${student.id}`;

    const token = signStudent(student);
    res.status(200).json({
      token,
      student: { id: student.id, nombre: student.nombre, apellido: student.apellido, grupo: student.grupo }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error interno' });
  }
};
