// ─── Adaptador Netlify → handlers estilo Vercel ───────────────────────────────
// El proyecto está escrito para Vercel (carpeta api/ con handlers (req, res)).
// Netlify no ejecuta esa carpeta, así que esta única función recibe todas las
// llamadas a /api/* (ver netlify.toml) y las deriva al handler correspondiente,
// imitando el req/res de Vercel. Así el mismo código sirve en las dos plataformas.

const routes = [
  ['/api/config',                require('../../api/config.js')],
  ['/api/verify',                require('../../api/verify.js')],
  ['/api/auth/student',          require('../../api/auth/student.js')],
  ['/api/auth/teacher',          require('../../api/auth/teacher.js')],
  ['/api/quiz/questions',        require('../../api/quiz/questions.js')],
  ['/api/quiz/answer',           require('../../api/quiz/answer.js')],
  ['/api/quiz/complete',         require('../../api/quiz/complete.js')],
  ['/api/student/progress',      require('../../api/student/progress.js')],
  ['/api/teacher/config',        require('../../api/teacher/config.js')],
  ['/api/teacher/topics',        require('../../api/teacher/topics.js')],
  ['/api/teacher/students',      require('../../api/teacher/students/index.js')],
];
const studentById = require('../../api/teacher/students/[id].js');

function normalizePath(p) {
  p = (p || '').split('?')[0];
  const prefix = '/.netlify/functions/api';
  if (p.startsWith(prefix)) p = '/api' + p.slice(prefix.length);
  if (p.length > 1 && p.endsWith('/')) p = p.slice(0, -1);
  return p;
}

function findHandler(path) {
  for (const [route, handler] of routes) if (route === path) return { handler, params: {} };
  const m = path.match(/^\/api\/teacher\/students\/([^/]+)$/);
  if (m) return { handler: studentById, params: { id: decodeURIComponent(m[1]) } };
  return null;
}

exports.handler = async (event) => {
  const path = normalizePath(event.path);
  const found = findHandler(path);
  if (!found) {
    return { statusCode: 404, headers: { 'Content-Type': 'application/json' },
             body: JSON.stringify({ error: 'Ruta no encontrada: ' + path }) };
  }

  // ── req estilo Vercel ──
  let raw = event.body || '';
  if (event.isBase64Encoded) raw = Buffer.from(raw, 'base64').toString('utf8');
  let body = {};
  if (raw) { try { body = JSON.parse(raw); } catch { body = raw; } }

  const headers = {};
  for (const [k, v] of Object.entries(event.headers || {})) headers[k.toLowerCase()] = v;

  const req = {
    method: event.httpMethod,
    headers,
    body,
    query: { ...(event.queryStringParameters || {}), ...found.params },
  };

  // ── res estilo Vercel ──
  const res = {
    statusCode: 200,
    headers: {},
    body: '',
    status(code) { this.statusCode = code; return this; },
    setHeader(k, v) { this.headers[k] = v; return this; },
    json(obj) { this.headers['Content-Type'] = 'application/json'; this.body = JSON.stringify(obj); return this; },
    send(b) { this.body = typeof b === 'string' ? b : JSON.stringify(b); return this; },
    end(b) { if (b !== undefined) this.body = String(b); return this; },
  };

  try {
    await found.handler(req, res);
  } catch (err) {
    console.error(err);
    return { statusCode: 500, headers: { 'Content-Type': 'application/json' },
             body: JSON.stringify({ error: 'Error interno' }) };
  }
  return { statusCode: res.statusCode, headers: res.headers, body: res.body };
};
