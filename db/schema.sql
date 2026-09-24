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
