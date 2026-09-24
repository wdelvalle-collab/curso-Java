const { hashPassword } = require('./auth');

// ─── Usuario administrador por defecto ─────────────────────────────────────────
// Se crea automáticamente la primera vez que alguien intenta entrar al panel
// docente. Si ya existe (por ejemplo porque se le cambió la contraseña desde el
// panel), NO se sobrescribe.
//
//   Nombre:     administrador
//   Apellido:   (vacío)
//   Contraseña: primera
//
// Tiene rol "teacher", que es el rol con permisos totales del sistema
// (temas, estudiantes, progreso, configuración y cuentas docentes).
const DEFAULT_ADMIN = {
  nombre: 'administrador',
  apellido: '',
  password: 'primera',
};

let _ready = false;

async function ensureTeachers(sql) {
  if (_ready) return;

  await sql`
    CREATE TABLE IF NOT EXISTS teachers (
      id            SERIAL PRIMARY KEY,
      nombre        TEXT NOT NULL,
      apellido      TEXT NOT NULL DEFAULT '',
      password_hash TEXT NOT NULL
    )
  `;
  await sql`
    CREATE UNIQUE INDEX IF NOT EXISTS teachers_nombre_apellido_idx
    ON teachers (LOWER(nombre), LOWER(apellido))
  `;
  await sql`
    INSERT INTO teachers (nombre, apellido, password_hash)
    VALUES (${DEFAULT_ADMIN.nombre}, ${DEFAULT_ADMIN.apellido}, ${hashPassword(DEFAULT_ADMIN.password)})
    ON CONFLICT DO NOTHING
  `;

  _ready = true;
}

module.exports = { ensureTeachers, DEFAULT_ADMIN };
