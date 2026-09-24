-- ─── Java Journey — Schema PostgreSQL (Neon) ────────────────────────────────

-- Cuentas de estudiantes (creadas por la docente)
CREATE TABLE IF NOT EXISTS students (
  id            SERIAL PRIMARY KEY,
  nombre        VARCHAR(100) NOT NULL,
  apellido      VARCHAR(100) NOT NULL,
  grupo         VARCHAR(50)  NOT NULL,
  password_hash VARCHAR(64)  NOT NULL,
  created_at    TIMESTAMP DEFAULT NOW(),
  last_access   TIMESTAMP,
  UNIQUE(nombre, apellido)
);

-- Cuentas docentes / administración (rol con permisos totales)
CREATE TABLE IF NOT EXISTS teachers (
  id            SERIAL PRIMARY KEY,
  nombre        TEXT NOT NULL,
  apellido      TEXT NOT NULL DEFAULT '',
  password_hash TEXT NOT NULL
);

CREATE UNIQUE INDEX IF NOT EXISTS teachers_nombre_apellido_idx
ON teachers (LOWER(nombre), LOWER(apellido));

-- Usuario administrador por defecto: administrador / primera
-- (password_hash = SHA-256 de 'primera'). No pisa la contraseña si ya existe.
INSERT INTO teachers (nombre, apellido, password_hash)
VALUES ('administrador', '', '549d08b2f9671652890408d889fd7d6a6c5601808f63d20122b6461f2a8af88e')
ON CONFLICT DO NOTHING;

-- Progreso por lección
CREATE TABLE IF NOT EXISTS lesson_progress (
  student_id   INT REFERENCES students(id) ON DELETE CASCADE,
  lesson_id    INT NOT NULL,
  completed_at TIMESTAMP DEFAULT NOW(),
  PRIMARY KEY (student_id, lesson_id)
);

-- Progreso por quiz
CREATE TABLE IF NOT EXISTS quiz_progress (
  student_id   INT REFERENCES students(id) ON DELETE CASCADE,
  topic_id     INT NOT NULL,
  score        INT,
  answers      JSONB,        -- [{chosen, correct, correctIndex}] por pregunta
  completed_at TIMESTAMP DEFAULT NOW(),
  PRIMARY KEY (student_id, topic_id)
);
-- Si la tabla ya existe, agregar la columna answers:
-- ALTER TABLE quiz_progress ADD COLUMN IF NOT EXISTS answers JSONB;

-- Configuración global (temas habilitados, etc.)
CREATE TABLE IF NOT EXISTS config (
  key   VARCHAR(50) PRIMARY KEY,
  value JSONB
);

-- Valor inicial: solo el tema 1 habilitado
INSERT INTO config (key, value)
VALUES ('enabled_topics', '[1]')
ON CONFLICT (key) DO NOTHING;

-- PDF de quiz: deshabilitado por defecto
INSERT INTO config (key, value)
VALUES ('allow_quiz_pdf', 'false')
ON CONFLICT (key) DO NOTHING;
