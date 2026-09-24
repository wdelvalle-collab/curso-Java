const jwt = require('jsonwebtoken');
const { createHash } = require('crypto');

const SECRET = process.env.JWT_SECRET;

function hashPassword(pw) {
  return createHash('sha256').update(pw).digest('hex');
}

function signStudent(student) {
  return jwt.sign(
    { role: 'student', id: student.id, nombre: student.nombre, apellido: student.apellido, grupo: student.grupo },
    SECRET,
    { expiresIn: '7d' }
  );
}

function signTeacher() {
  return jwt.sign({ role: 'teacher' }, SECRET, { expiresIn: '8h' });
}

function verifyToken(token) {
  return jwt.verify(token, SECRET);
}

function requireStudent(req) {
  const auth = req.headers.authorization || '';
  const token = auth.replace('Bearer ', '');
  const payload = verifyToken(token);
  if (payload.role !== 'student') throw new Error('No autorizado');
  return payload;
}

function requireTeacher(req) {
  const auth = req.headers.authorization || '';
  const token = auth.replace('Bearer ', '');
  const payload = verifyToken(token);
  if (payload.role !== 'teacher') throw new Error('No autorizado');
  return payload;
}

module.exports = { hashPassword, signStudent, signTeacher, verifyToken, requireStudent, requireTeacher };
