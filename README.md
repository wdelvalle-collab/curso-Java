# Java Journey ☕

Plataforma educativa interactiva para aprender Java paso a paso. Diseñada para estudiantes de 2do BT Tecnologías de la Información – UTU.

**URL oficial:** https://java-journey-beta.vercel.app

---

## Características

- 31 temas de Java organizados en acordeón
- Lecciones con editor de código embebido (CodeMirror); el botón "Ejecutar" corre el código en el servidor (Judge0) y el botón "Verificar" compara la salida contra la esperada, también en el servidor
- Quiz de opción múltiple al final de cada tema
- Sistema de progreso por estudiante (persistido en base de datos)
- Panel docente para gestión de temas, estudiantes y progreso del grupo
- **Seguridad:** las respuestas de los quizzes y las salidas esperadas de las lecciones no se envían al cliente en ningún endpoint; las salidas esperadas se guardan como hash SHA-256 (ver `api/_lib/expected-outputs.js`) para que tampoco queden legibles si el archivo se llegara a exponer

---

## Arquitectura

```
java-journey/
├── index.html              # Página principal (UI completa)
├── java-journey-oc.js      # Lógica del cliente (JS vanilla)
├── java-journey-oc.css     # Estilos
├── vercel.json             # Configuración Vercel
├── package.json            # Dependencias Node.js
├── api/
│   ├── config.js           # GET  /api/config
│   ├── verify.js           # POST /api/verify (ejecutar código y verificar salida)
│   ├── auth/
│   │   ├── student.js      # POST /api/auth/student
│   │   └── teacher.js      # POST /api/auth/teacher
│   ├── student/
│   │   └── progress.js     # GET  /api/student/progress
│   ├── quiz/
│   │   ├── questions.js    # GET  /api/quiz/questions
│   │   ├── answer.js       # POST /api/quiz/answer
│   │   └── complete.js     # POST /api/quiz/complete
│   ├── teacher/
│   │   ├── topics.js       # PUT  /api/teacher/topics
│   │   └── students/
│   │       ├── index.js    # GET + POST /api/teacher/students
│   │       └── [id].js     # DELETE + PUT /api/teacher/students/:id
│   └── _lib/                # ⚠ Código solo-servidor (Vercel lo excluye del deploy estático
│       ├── db.js            #   por el prefijo "_"; NO debe volver a vivir en la raíz del repo)
│       ├── auth.js          # JWT helpers, hashPassword
│       ├── quizzes.js       # Datos de quizzes (con la respuesta correcta)
│       └── expected-outputs.js # Hashes SHA-256 de las salidas esperadas, no el texto plano
└── db/
    └── schema.sql          # Esquema PostgreSQL
```

> Nota histórica: hasta septiembre 2026 estos módulos vivían en una carpeta `lib/` en la raíz del repo. Como GitHub Pages y el modo "estático" de Vercel publican tal cual todo archivo que no esté bajo `api/`, esos archivos (incluidas las respuestas de los quizzes) quedaban descargables directamente desde la URL pública del sitio. Por eso se movieron dentro de `api/_lib/`. Además, una subida accidental por la interfaz web de GitHub había dejado copias duplicadas de todo el proyecto en `lib/`, `lib/lib/` y `teacher/` (ya eliminadas).

---

## Variables de entorno

Configurar en Vercel → Settings → Environment Variables:

| Variable | Descripción |
|---|---|
| `DATABASE_URL` | Connection string de Neon PostgreSQL |
| `JWT_SECRET` | Clave secreta para firmar tokens JWT (larga y aleatoria) |
| `TEACHER_PASSWORD_HASH` | SHA-256 de la contraseña docente de emergencia (ver abajo) |

### Contraseña docente — sistema de doble capa

La autenticación docente funciona en dos capas:

1. **Base de datos (principal):** La cuenta docente (nombre + apellido + contraseña) se guarda en la tabla `teachers`. Se configura desde el panel docente → pestaña Temas → sección "Cuenta docente". Una vez configurada, el login requiere nombre, apellido y contraseña.

2. **Variable de entorno (fallback de emergencia):** Si no hay cuenta en la BD o se olvida la contraseña, se puede ingresar dejando nombre y apellido vacíos y usando el hash de `TEACHER_PASSWORD_HASH`. Sirve para recuperar el acceso y configurar una nueva cuenta en BD.

### Generar el hash para TEACHER_PASSWORD_HASH

```powershell
# En PowerShell:
$pass = "tu_contraseña_aqui"
$bytes = [System.Text.Encoding]::UTF8.GetBytes($pass)
$sha256 = [System.Security.Cryptography.SHA256]::Create()
$hash = $sha256.ComputeHash($bytes)
($hash | ForEach-Object { $_.ToString("x2") }) -join ""
```

---

## Base de datos

Ejecutar `db/schema.sql` en la consola SQL de Neon:

```sql
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

CREATE TABLE IF NOT EXISTS lesson_progress (
  student_id   INT REFERENCES students(id) ON DELETE CASCADE,
  lesson_id    INT NOT NULL,
  completed_at TIMESTAMP DEFAULT NOW(),
  PRIMARY KEY (student_id, lesson_id)
);

CREATE TABLE IF NOT EXISTS quiz_progress (
  student_id   INT REFERENCES students(id) ON DELETE CASCADE,
  topic_id     INT NOT NULL,
  score        INT,
  completed_at TIMESTAMP DEFAULT NOW(),
  PRIMARY KEY (student_id, topic_id)
);

CREATE TABLE IF NOT EXISTS teachers (
  id            SERIAL PRIMARY KEY,
  nombre        TEXT NOT NULL,
  apellido      TEXT NOT NULL,
  password_hash TEXT NOT NULL
);

CREATE UNIQUE INDEX IF NOT EXISTS teachers_nombre_apellido_idx
ON teachers (LOWER(nombre), LOWER(apellido));

CREATE TABLE IF NOT EXISTS config (
  key   VARCHAR(50) PRIMARY KEY,
  value JSONB
);

INSERT INTO config (key, value)
VALUES ('enabled_topics', '[1]')
ON CONFLICT (key) DO NOTHING;
```

---

## Flujo de uso

### Para el estudiante

1. Ingresar a https://java-journey-beta.vercel.app
2. Completar el formulario de login (Nombre / Apellido / Contraseña)
3. Navegar por los temas habilitados por la docente
4. En cada lección: leer el contenido, escribir el código en el editor embebido, presionar "Ejecutar" para ver la salida y "Verificar" para comprobarla
5. Al completar todas las lecciones de un tema: rendir el quiz
6. El progreso queda guardado automáticamente

### Para la docente

1. Hacer clic en **"Acceso docente"** (enlace discreto al pie del formulario de login de estudiante), o hacer **triple clic** en el ícono ☕ de la barra lateral
2. Ingresar nombre, apellido y contraseña docente (si aún no se configuró cuenta en BD, dejar nombre y apellido vacíos y usar la contraseña de `TEACHER_PASSWORD_HASH`)
3. El panel tiene tres pestañas:
   - **Temas:** habilitar/deshabilitar temas para el grupo; configurar cuenta docente; descargar PDF con todos los ejercicios
   - **Estudiantes:** crear cuentas, resetear contraseñas, eliminar estudiantes
   - **Progreso:** tabla con lecciones completadas, quizzes y puntaje promedio por estudiante; filtrable por grupo

### Recuperar acceso docente si se olvida la contraseña

- Usar el fallback de variable de entorno: dejar nombre y apellido vacíos en el login e ingresar la contraseña original (`TEACHER_PASSWORD_HASH`)
- Una vez dentro, ir a Temas → Cuenta docente → configurar nueva contraseña

---

## API

Todos los endpoints retornan JSON. Los que requieren autenticación usan `Authorization: Bearer <token>`.

| Método | Endpoint | Auth | Descripción |
|---|---|---|---|
| GET | `/api/config` | — | Temas habilitados |
| POST | `/api/auth/student` | — | Login estudiante → token JWT (7 días) |
| POST | `/api/auth/teacher` | — | Login docente → token JWT (8 horas) |
| PUT | `/api/auth/teacher` | Docente | Guardar/actualizar cuenta docente en BD |
| GET | `/api/student/progress` | Estudiante | Lecciones y quizzes completados |
| POST | `/api/verify` | Estudiante | Verificar salida de lección |
| GET | `/api/quiz/questions?topicId=N` | Estudiante | Preguntas del quiz (sin respuestas) |
| POST | `/api/quiz/answer` | Estudiante | Verificar respuesta en servidor |
| POST | `/api/quiz/complete` | Estudiante | Guardar puntaje final del quiz |
| GET | `/api/teacher/students` | Docente | Listar estudiantes con progreso |
| POST | `/api/teacher/students` | Docente | Crear estudiante |
| DELETE | `/api/teacher/students/:id` | Docente | Eliminar estudiante |
| PUT | `/api/teacher/students/:id` | Docente | Resetear contraseña |
| PUT | `/api/teacher/topics` | Docente | Actualizar temas habilitados |

---

## Stack técnico

- **Frontend:** HTML + JavaScript vanilla + Tailwind CSS (CDN)
- **Backend:** Vercel Serverless Functions (Node.js, CommonJS)
- **Base de datos:** Neon PostgreSQL (`@neondatabase/serverless`)
- **Autenticación:** JWT (`jsonwebtoken`)
- **Deploy:** GitHub → Vercel (automático en cada push a `main`)

---

## Créditos

Diseñada por Prof. Elizabeth Izquierdo con asistencia de Claude — [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)
