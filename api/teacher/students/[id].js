const { getDb } = require('../../_lib/db');
const { requireTeacher, hashPassword } = require('../../_lib/auth');

module.exports = async function handler(req, res) {
  try {
    requireTeacher(req);
  } catch {
    return res.status(401).json({ error: 'No autorizado' });
  }

  const { id } = req.query;
  const sql = getDb();

  if (req.method === 'DELETE') {
    try {
      await sql`DELETE FROM students WHERE id = ${id}`;
      res.status(200).json({ ok: true });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Error interno' });
    }

  } else if (req.method === 'PUT') {
    try {
      const { password } = req.body;
      if (!password)
        return res.status(400).json({ error: 'Contraseña requerida' });
      const hash = hashPassword(password);
      await sql`UPDATE students SET password_hash = ${hash} WHERE id = ${id}`;
      res.status(200).json({ ok: true });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Error interno' });
    }

  } else {
    res.status(405).end();
  }
};
