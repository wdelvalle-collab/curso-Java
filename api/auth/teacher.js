const { getDb } = require('../_lib/db');
const { hashPassword, signTeacher, requireTeacher } = require('../_lib/auth');
const { ensureTeachers } = require('../_lib/teachers');

module.exports = async function handler(req, res) {

  // ── LOGIN ──────────────────────────────────────────────────────────────────
  if (req.method === 'POST') {
    try {
      const { nombre, apellido, password } = req.body;
      if (!password) return res.status(400).json({ error: 'Contraseña requerida' });

      const hash = hashPassword(password);
      const sql = getDb();

      let n = (nombre || '').trim();
      let a = (apellido || '').trim();
      // El administrador no tiene apellido: se ignora lo que venga en ese campo
      // (evita fallos por autocompletado del navegador).
      if (n.toLowerCase() === 'administrador') a = '';

      // Buscar en la tabla teachers (se crea con el usuario administrador si no existe)
      let found = false;
      let dbError = null;
      try {
        await ensureTeachers(sql);
        const rows = await sql`
          SELECT id FROM teachers
          WHERE LOWER(nombre) = LOWER(${n})
          AND LOWER(apellido) = LOWER(${a})
          AND password_hash = ${hash}
        `;
        found = rows.length > 0;
      } catch (e) {
        console.error('Error de BD en login docente:', e);
        dbError = e;
      }

      // Fallback a TEACHER_PASSWORD_HASH (sin nombre/apellido)
      if (!found && hash === process.env.TEACHER_PASSWORD_HASH) {
        found = true;
      }

      // Si la BD falló, avisarlo en vez de decir "credenciales incorrectas"
      if (!found && dbError)
        return res.status(500).json({ error: 'Error de base de datos: ' + (dbError.message || dbError) });

      if (!found) return res.status(401).json({ error: 'Credenciales incorrectas' });

      const token = signTeacher();
      res.status(200).json({ token });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Error interno' });
    }

  // ── GUARDAR CUENTA DOCENTE ─────────────────────────────────────────────────
  } else if (req.method === 'PUT') {
    try {
      requireTeacher(req);
      const { nombre, apellido, newPassword } = req.body;
      // El apellido es opcional (el usuario "administrador" no tiene apellido)
      const n = (nombre || '').trim();
      const a = n.toLowerCase() === 'administrador' ? '' : (apellido || '').trim();
      if (!n || !newPassword)
        return res.status(400).json({ error: 'Datos incompletos' });

      const sql = getDb();
      await ensureTeachers(sql);
      const hash = hashPassword(newPassword);

      const existing = await sql`
        SELECT id FROM teachers
        WHERE LOWER(nombre) = LOWER(${n}) AND LOWER(apellido) = LOWER(${a})
      `;
      if (existing.length > 0) {
        await sql`UPDATE teachers SET password_hash = ${hash} WHERE id = ${existing[0].id}`;
      } else {
        await sql`INSERT INTO teachers (nombre, apellido, password_hash) VALUES (${n}, ${a}, ${hash})`;
      }

      res.status(200).json({ ok: true });
    } catch (err) {
      console.error(err);
      const status = err.message === 'No autorizado' ? 401 : 500;
      res.status(status).json({ error: err.message });
    }

  } else {
    res.status(405).end();
  }
};
