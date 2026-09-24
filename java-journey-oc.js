// ─── TEMAS ────────────────────────────────────────────────────────────────────
const TOPICS = [  {
 id: 1,  label: "Hola Mundo",                 lessons: [1, 2] }
,  {
 id: 14, label: "Comentarios",                lessons: [27, 28] }
,  {
 id: 2,  label: "Variables numéricas",        lessons: [3, 4] }
,  {
 id: 4,  label: "Variables de texto",         lessons: [7, 8] }
,  {
 id: 15, label: "Constantes",                 lessons: [29, 30] }
,  {
 id: 16, label: "Conversión de tipos",        lessons: [31, 32] }
,  {
 id: 5,  label: "Operaciones aritméticas",    lessons: [9, 10] }
,  {
 id: 17, label: "Incremento y decremento",    lessons: [33, 34] }
,  {
 id: 18, label: "Atajos aritméticos",         lessons: [35, 36] }
,  {
 id: 19, label: "Operadores de comparación",  lessons: [37, 38] }
,  {
 id: 20, label: "Operadores lógicos",         lessons: [39, 40] }
,  {
 id: 3,  label: "Scanner",                    lessons: [5, 6] }
,  {
 id: 21, label: "System.out.print",           lessons: [41, 42] }
,  {
 id: 22, label: "Formato de salida",          lessons: [43, 44] }
,  {
 id: 6,  label: "Números Random",             lessons: [25, 26] }
,  {
 id: 7,  label: "Condicional if / else",      lessons: [11, 12] }
,  {
 id: 25, label: "Comparación de Strings",     lessons: [49, 50] }
,  {
 id: 26, label: "Métodos de String",          lessons: [51, 52] }
,  {
 id: 8,  label: "Bucle while",                lessons: [13, 14] }
,  {
 id: 9,  label: "Bucle do-while",             lessons: [19, 20] }
,  {
 id: 10, label: "Bucle for",                  lessons: [15, 16] }
,  {
 id: 23, label: "Switch",                     lessons: [45, 46] }
,  {
 id: 28, label: "Bucles anidados",            lessons: [55, 56] }
,  {
 id: 11, label: "Procedimientos",             lessons: [21, 22] }
,  {
 id: 29, label: "Sobrecarga de métodos",      lessons: [57, 58] }
,  {
 id: 12, label: "Funciones",                  lessons: [23, 24] }
,  {
 id: 13, label: "Arrays",                     lessons: [17, 18] }
,  {
 id: 30, label: "Proyecto Calculadora",       lessons: [59, 60] }
,  {
 id: 31, label: "Desafíos Finales",           lessons: [61, 62] }
,  // ── Extras / Opcionales ──
  {
 id: 24, label: "⭐ Operador ternario",       lessons: [47, 48] }
,  {
 id: 27, label: "⭐ Break y Continue",        lessons: [53, 54] }
,];
// ─── QUIZZES_CLIENT (solo topicId y título — preguntas y respuestas están en el servidor) ──
const QUIZZES_CLIENT = [  {
 topicId: 1,  title: "Hola Mundo", questionCount: 5 }
,  {
 topicId: 2,  title: "Variables numéricas", questionCount: 5 }
,  {
 topicId: 3,  title: "Scanner", questionCount: 5 }
,  {
 topicId: 4,  title: "Variables de texto", questionCount: 5 }
,  {
 topicId: 5,  title: "Operaciones aritméticas", questionCount: 5 }
,  {
 topicId: 6,  title: "Números Random", questionCount: 5 }
,  {
 topicId: 7,  title: "Condicional if / else", questionCount: 5 }
,  {
 topicId: 8,  title: "Bucle while", questionCount: 5 }
,  {
 topicId: 9,  title: "Bucle do-while", questionCount: 5 }
,  {
 topicId: 10, title: "Bucle for", questionCount: 5 }
,  {
 topicId: 11, title: "Procedimientos", questionCount: 5 }
,  {
 topicId: 12, title: "Funciones", questionCount: 5 }
,  {
 topicId: 13, title: "Arrays", questionCount: 5 }
,  {
 topicId: 14, title: "Comentarios", questionCount: 5 }
,  {
 topicId: 15, title: "Constantes", questionCount: 5 }
,  {
 topicId: 16, title: "Conversión de tipos", questionCount: 5 }
,  {
 topicId: 17, title: "Incremento y decremento", questionCount: 5 }
,  {
 topicId: 18, title: "Atajos aritméticos", questionCount: 5 }
,  {
 topicId: 19, title: "Operadores de comparación", questionCount: 5 }
,  {
 topicId: 20, title: "Operadores lógicos", questionCount: 5 }
,  {
 topicId: 21, title: "System.out.print", questionCount: 5 }
,  {
 topicId: 22, title: "Formato de salida", questionCount: 5 }
,  {
 topicId: 23, title: "Switch", questionCount: 5 }
,  {
 topicId: 24, title: "Operador ternario", questionCount: 5 }
,  {
 topicId: 25, title: "Comparación de Strings", questionCount: 5 }
,  {
 topicId: 26, title: "Métodos de String", questionCount: 5 }
,  {
 topicId: 27, title: "Break y Continue", questionCount: 5 }
,  {
 topicId: 28, title: "Bucles anidados", questionCount: 5 }
,  {
 topicId: 29, title: "Sobrecarga de métodos", questionCount: 5 }
,  {
 topicId: 30, title: "Proyecto Calculadora", questionCount: 5 }
,  {
 topicId: 31, title: "Desafíos Finales", questionCount: 5 }
,];
// ─── LECCIONES ────────────────────────────────────────────────────────────────
const LESSONS = [
  // ══ TEMA 1: Hola Mundo ═══════════════════════════════════════════════════
  {
 id: 1, title: "Hola Mundo", subtitle: "Tu primer programa",    explanation: `<h2 class="text-base font-bold mb-3">Tu primer programa en Java</h2><p class="text-slate-300 text-sm mb-4">Todo programa Java tiene una <strong>clase</strong> y un método <code class="text-indigo-400">main</code> — el punto de entrada. La JVM siempre empieza por ahí.</p><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-purple-400">public class</span> <span class="text-yellow-300">Main</span> {
<br>&nbsp;
&nbsp;
<span class="text-purple-400">public static void</span> <span class="text-blue-300">main</span>(<span class="text-green-300">String</span>[] args) {
<br>&nbsp;
&nbsp;
&nbsp;
&nbsp;
<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Hola Mundo"</span>);
<br>&nbsp;
&nbsp;
}
<br>}
</div><p class="text-slate-400 text-sm mb-3"><code class="text-green-400">System.out.println()</code> imprime una línea en la consola.</p><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> Escribir un programa que imprima en la consola un saludo que diga "Hola, Java!" — con coma y signo de exclamación.</div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">Hola, Java!</code></div>`,    starterCode: `public class Main {
\n    public static void main(String[] args) {
\n        // Escribir el código aquí\n\n    }
\n}`,    hint: 'Usar System.out.println() con el texto entre comillas dobles, exactamente como se pide.',  }
,  {
 id: 2, title: "Múltiples líneas", subtitle: "Imprimir varias líneas",    explanation: `<h2 class="text-base font-bold mb-3">Imprimir varias líneas</h2><p class="text-slate-300 text-sm mb-4">Cada llamada a <code class="text-indigo-400">System.out.println()</code> imprime una línea y baja al renglón siguiente. Para imprimir varias líneas se usa varias veces.</p><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Línea 1"</span>);
<br><span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Línea 2"</span>);
<br><span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Línea 3"</span>);
</div><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> Imprimir tres líneas con los datos de un estudiante: nombre (Ana), edad (17) y curso (2do BT).<br>Cada dato en su propia línea con el formato <em>Campo: valor</em>.</div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">Nombre: Ana<br>Edad: 17<br>Curso: 2do BT</code></div>`,    starterCode: `public class Main {
\n    public static void main(String[] args) {
\n        // Imprimir las tres líneas\n\n    }
\n}`,    hint: 'Usar println tres veces, una por cada dato. El texto va entre comillas dobles en cada llamada.',  }
,  // ══ TEMA 2: Variables numéricas ══════════════════════════════════════════
  {
 id: 3, title: "Variables enteras", subtitle: "El tipo int",    explanation: `<h2 class="text-base font-bold mb-3">Variables de tipo int</h2><p class="text-slate-300 text-sm mb-4">Una <strong>variable</strong> es un espacio con nombre donde se guarda un valor. Para números enteros se usa <code class="text-indigo-400">int</code>.</p><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-purple-400">int</span> edad = <span class="text-orange-300">25</span>;
<br><span class="text-purple-400">int</span> temperatura = <span class="text-orange-300">-5</span>;
<br><span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Edad: "</span> + edad);
</div><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> Declarar <code class="text-indigo-300">cantidad = 5</code> y <code class="text-indigo-300">precio = 200</code>.<br>Imprimir cada variable en su propia línea con el formato <em>NombreVariable: valor</em>.</div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">Cantidad: 5<br>Precio: 200</code></div>`,    starterCode: `public class Main {
\n    public static void main(String[] args) {
\n        // Declarar las variables e imprimirlas\n\n    }
\n}`,    hint: 'Declarar cada variable con int, asignarle el valor y luego usar println combinando texto con la variable usando +.',  }
,  {
 id: 4, title: "Variables decimales", subtitle: "El tipo double",    explanation: `<h2 class="text-base font-bold mb-3">Variables de tipo double</h2><p class="text-slate-300 text-sm mb-4">Para números con decimales se usa <code class="text-indigo-400">double</code>. El punto es el separador decimal en Java (no la coma).</p><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-purple-400">double</span> precio = <span class="text-orange-300">99.99</span>;
<br><span class="text-purple-400">double</span> pi = <span class="text-orange-300">3.14159</span>;
<br><span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Precio: "</span> + precio);
</div><div class="bg-amber-900/30 border border-amber-700/40 rounded-lg p-3 text-sm text-amber-200 mb-3">  ⚠️ <strong>int</strong> no puede guardar decimales. Si se necesita 3.14, usar <strong>double</strong>.</div><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> Usando <code class="text-indigo-300">precioUnitario = 24.99</code> y <code class="text-indigo-300">cantidad = 3</code>, calcular el total (precio × cantidad) e imprimirlo con el formato <em>Total: valor</em>.</div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">Total: 74.97</code></div>`,    starterCode: `public class Main {
\n    public static void main(String[] args) {
\n        double precioUnitario = 24.99;
\n        int cantidad = 3;
\n        // Calcular el total e imprimirlo\n\n    }
\n}`,    hint: 'Multiplicar precioUnitario por cantidad y guardar el resultado en una variable double. Luego imprimir con el texto "Total: " concatenado.',  }
,  // ══ TEMA 3: Scanner ═══════════════════════════════════════════════════════
  {
 id: 5, title: "Scanner — leer texto", subtitle: "Entrada del usuario",    explanation: `<h2 class="text-base font-bold mb-3">Leer datos con Scanner</h2><p class="text-slate-300 text-sm mb-4"><code class="text-indigo-400">Scanner</code> permite leer lo que el usuario escribe. Se importa de <code class="text-green-400">java.util.Scanner</code> y se conecta a <code class="text-green-400">System.in</code> (el teclado).</p><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-purple-400">import</span> java.util.Scanner;
<br><br><span class="text-yellow-300">Scanner</span> sc = <span class="text-purple-400">new</span> <span class="text-yellow-300">Scanner</span>(System.in);
<br><span class="text-green-300">String</span> nombre = sc.<span class="text-blue-300">nextLine</span>();
<br><span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Hola, "</span> + nombre + <span class="text-orange-300">"!"</span>);
</div><div class="bg-slate-700/40 rounded-lg p-3 text-sm text-slate-300 mb-3">  💡 Escribir el dato de entrada en el campo <strong>Entrada del programa</strong> antes de presionar Ejecutar.</div><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> Leer un nombre con <code class="text-yellow-300">nextLine()</code> e imprimir:<br>  <code class="text-yellow-300">Bienvenido, [nombre]!</code></div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">Bienvenido, Ana!</code> <span class="text-emerald-300/70 text-xs">(ejemplo — el valor exacto depende de la entrada o del azar)</span></div>`,    starterCode: `import java.util.Scanner;
\n\npublic class Main {
\n    public static void main(String[] args) {
\n        Scanner sc = new Scanner(System.in);
\n        // Leer el nombre e imprimir el saludo\n\n    }
\n}`,    hint: 'Usar sc.nextLine() para leer una línea de texto y guardarlo en un String. Luego construir el mensaje con +.',  }
,  {
 id: 6, title: "Scanner — leer números", subtitle: "nextInt y nextDouble",    explanation: `<h2 class="text-base font-bold mb-3">Leer números con Scanner</h2><p class="text-slate-300 text-sm mb-4">Para leer números enteros se usa <code class="text-indigo-400">nextInt()</code> y para decimales <code class="text-indigo-400">nextDouble()</code>.</p><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-yellow-300">Scanner</span> sc = <span class="text-purple-400">new</span> <span class="text-yellow-300">Scanner</span>(System.in);
<br><span class="text-purple-400">int</span> edad = sc.<span class="text-blue-300">nextInt</span>();
<br><span class="text-purple-400">double</span> altura = sc.<span class="text-blue-300">nextDouble</span>();
<br><span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Edad: "</span> + edad);
<br><span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Altura: "</span> + altura);
</div><div class="bg-slate-700/40 rounded-lg p-3 text-sm text-slate-300 mb-3">  💡 En la pestaña <strong>I/O</strong> escribir un número por línea: primero el entero, luego el decimal.</div><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> Leer dos números enteros e imprimir su suma:<br>  <code class="text-yellow-300">Suma: [resultado]</code></div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">Suma: 8</code> <span class="text-emerald-300/70 text-xs">(ejemplo — el valor exacto depende de la entrada o del azar)</span></div>`,    starterCode: `import java.util.Scanner;
\n\npublic class Main {
\n    public static void main(String[] args) {
\n        Scanner sc = new Scanner(System.in);
\n        // Leer dos enteros, sumarlos e imprimir el resultado\n\n    }
\n}`,    hint: 'Usar nextInt() dos veces para leer los dos números. Guardarlos en variables int y luego imprimir la suma.',  }
,  // ══ TEMA 4: Variables de texto ════════════════════════════════════════════
  {
 id: 7, title: "Variables String", subtitle: "Texto en Java",    explanation: `<h2 class="text-base font-bold mb-3">Cadenas de texto — String</h2><p class="text-slate-300 text-sm mb-4">Un <code class="text-indigo-400">String</code> guarda texto. Siempre va entre <strong>comillas dobles</strong>. String se escribe con mayúscula.</p><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-green-300">String</span> nombre = <span class="text-orange-300">"Ana"</span>;
<br><span class="text-green-300">String</span> saludo = <span class="text-orange-300">"Hola, "</span> + nombre + <span class="text-orange-300">"!"</span>;
<br><span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(saludo);
 <span class="text-slate-500">// Hola, Ana!</span></div><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> Declarar dos variables <code class="text-indigo-300">String</code>: una con la ciudad <em>Montevideo</em> y otra con el país <em>Uruguay</em>.<br>Imprimirlas combinadas en una sola línea con el formato <em>Ciudad: valor, País: valor</em>.</div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">Ciudad: Montevideo, País: Uruguay</code></div>`,    starterCode: `public class Main {
\n    public static void main(String[] args) {
\n        String ciudad = "Montevideo";
\n        String pais = "Uruguay";
\n        // Imprimir el mensaje combinando las variables\n\n    }
\n}`,    hint: 'Combinar texto fijo y variables con el operador +. El texto fijo va entre comillas dobles.',  }
,  {
 id: 8, title: "boolean y char", subtitle: "Otros tipos primitivos",    explanation: `<h2 class="text-base font-bold mb-3">boolean y char</h2><p class="text-slate-300 text-sm mb-3"><code class="text-indigo-400">boolean</code> solo tiene dos valores posibles: <code class="text-green-400">true</code> o <code class="text-green-400">false</code>.</p><div class="bg-slate-800/60 rounded-lg p-4 mb-3 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-purple-400">boolean</span> esMayor = <span class="text-purple-400">true</span>;
<br><span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Mayor de edad: "</span> + esMayor);
</div><p class="text-slate-300 text-sm mb-3"><code class="text-indigo-400">char</code> guarda un <strong>solo carácter</strong> entre <strong>comillas simples</strong>.</p><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-purple-400">char</span> inicial = <span class="text-orange-300">'A'</span>;
<br><span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Inicial: "</span> + inicial);
</div><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> Declarar <code class="text-indigo-300">boolean aprobado = true</code> y <code class="text-indigo-300">char calificacion = 'B'</code>.<br>Imprimir cada variable en su propia línea con el formato <em>NombreVariable: valor</em>.</div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">Aprobado: true<br>Calificación: B</code></div>`,    starterCode: `public class Main {
\n    public static void main(String[] args) {
\n        // Declarar las variables e imprimirlas\n\n    }
\n}`,    hint: 'boolean usa true/false sin comillas. char usa comillas simples para un solo carácter. Luego imprimir con println.',  }
,  // ══ TEMA 5: Operaciones aritméticas ══════════════════════════════════════
  {
 id: 9, title: "Suma, resta y producto", subtitle: "Operadores +  −  *",    explanation: `<h2 class="text-base font-bold mb-3">Operaciones aritméticas básicas</h2><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-purple-400">int</span> a = <span class="text-orange-300">10</span>, b = <span class="text-orange-300">3</span>;
<br>a + b  <span class="text-slate-500">// 13  — suma</span><br>a - b  <span class="text-slate-500">// 7   — resta</span><br>a * b  <span class="text-slate-500">// 30  — multiplicación</span></div><p class="text-slate-400 text-sm mb-3">Al mezclar una operación con texto en println, poner la operación entre paréntesis: <code class="text-yellow-300">"Suma: " + (a + b)</code></p><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> Con <code class="text-indigo-300">a = 8</code> y <code class="text-indigo-300">b = 5</code>, calcular la suma, la resta y el producto.<br>Imprimir cada resultado en su propia línea con el formato <em>Operación: valor</em>.</div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">Suma: 13<br>Resta: 3<br>Producto: 40</code></div>`,    starterCode: `public class Main {
\n    public static void main(String[] args) {
\n        int a = 8;
\n        int b = 5;
\n        // Imprimir suma, resta y producto\n\n    }
\n}`,    hint: 'Usar println tres veces. Poner cada operación entre paréntesis dentro del mensaje: "Suma: " + (a + b).',  }
,  {
 id: 10, title: "División y módulo", subtitle: "Operadores  /  y  %",    explanation: `<h2 class="text-base font-bold mb-3">División y resto</h2><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-purple-400">int</span> a = <span class="text-orange-300">10</span>, b = <span class="text-orange-300">3</span>;
<br>a / b  <span class="text-slate-500">// 3  — división entera (descarta decimales)</span><br>a % b  <span class="text-slate-500">// 1  — resto de la división</span></div><p class="text-slate-400 text-sm mb-3">La división entre enteros da un resultado entero. Para obtener decimales, al menos uno debe ser <code class="text-yellow-300">double</code>.</p><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> Un salón tiene 30 estudiantes que forman grupos de 7.<br>Calcular cuántos grupos completos se forman y cuántos estudiantes sobran.<br>Imprimir en dos líneas con el formato exacto:<br>  <code class="text-yellow-300">Grupos: valor</code><br>  <code class="text-yellow-300">Sobran: valor</code></div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">Grupos: 4<br>Sobran: 2</code></div>`,    starterCode: `public class Main {
\n    public static void main(String[] args) {
\n        int estudiantes = 30;
\n        int porGrupo = 7;
\n        // Calcular grupos completos y sobrantes\n\n    }
\n}`,    hint: 'La división entera (/) da los grupos completos. El módulo (%) da el resto, es decir, los que sobran.',  }
,  // ══ TEMA 6: Números Random ═══════════════════════════════════════════════
  {
 id: 25, title: "Clase Random", subtitle: "Generar números aleatorios",    explanation: `<h2 class="text-base font-bold mb-3">Números aleatorios con la clase Random</h2><p class="text-slate-300 text-sm mb-4">La clase <code class="text-indigo-400">Random</code> del paquete <code class="text-indigo-400">java.util</code> permite generar valores aleatorios de distintos tipos. Primero se importa y luego se crea un objeto.</p><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-purple-400">import</span> java.util.<span class="text-green-300">Random</span>;
<br><br><span class="text-green-300">Random</span> rnd = <span class="text-purple-400">new</span> <span class="text-green-300">Random</span>();
<br><br><span class="text-slate-500">// entero entre 0 y 9</span><br><span class="text-purple-400">int</span> n = rnd.<span class="text-blue-300">nextInt</span>(<span class="text-orange-300">10</span>);
<br><br><span class="text-slate-500">// entero entre 1 y 6 (dado)</span><br><span class="text-purple-400">int</span> dado = rnd.<span class="text-blue-300">nextInt</span>(<span class="text-orange-300">6</span>) + <span class="text-orange-300">1</span>;
<br><br><span class="text-slate-500">// boolean aleatorio</span><br><span class="text-purple-400">boolean</span> cara = rnd.<span class="text-blue-300">nextBoolean</span>();
</div><div class="bg-amber-900/30 border border-amber-700/40 rounded-lg p-3 text-sm text-amber-200 mb-3">  💡 <code>nextInt(n)</code> devuelve un entero entre <strong>0 y n-1</strong>.<br>  Para rango min–max: <code>rnd.nextInt(max - min + 1) + min</code></div><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> Simular el lanzamiento de un dado de 6 caras e imprimir:<br>  <code class="text-yellow-300">Resultado del dado: 4</code> (el número varía cada ejecución)</div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">Resultado del dado: 4</code> <span class="text-emerald-300/70 text-xs">(ejemplo — el valor exacto depende de la entrada o del azar)</span></div>`,    starterCode: `import java.util.Random;
\n\npublic class Main {
\n    public static void main(String[] args) {
\n        Random rnd = new Random();
\n        // Generar un entero entre 1 y 6\n\n        System.out.println("Resultado del dado: " + dado);
\n    }
\n}`,    hint: 'nextInt(6) da un entero entre 0 y 5. Sumar 1 desplaza el rango a 1–6: rnd.nextInt(6) + 1',  }
,  {
 id: 26, title: "Clase Random", subtitle: "Rangos personalizados",    explanation: `<h2 class="text-base font-bold mb-3">La clase Random</h2><p class="text-slate-300 text-sm mb-4">La clase <code class="text-indigo-400">Random</code> del paquete <code class="text-indigo-400">java.util</code> ofrece métodos más claros para generar distintos tipos de valores aleatorios.</p><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-purple-400">import</span> java.util.<span class="text-green-300">Random</span>;
<br><br><span class="text-green-300">Random</span> rnd = <span class="text-purple-400">new</span> <span class="text-green-300">Random</span>();
<br><br><span class="text-purple-400">int</span> n = rnd.<span class="text-blue-300">nextInt</span>(<span class="text-orange-300">10</span>);
     <span class="text-slate-500">// 0 a 9</span><br><span class="text-purple-400">int</span> m = rnd.<span class="text-blue-300">nextInt</span>(<span class="text-orange-300">10</span>) + <span class="text-orange-300">1</span>;
 <span class="text-slate-500">// 1 a 10</span><br><span class="text-purple-400">double</span> d = rnd.<span class="text-blue-300">nextDouble</span>();
   <span class="text-slate-500">// 0.0 a 1.0</span><br><span class="text-purple-400">boolean</span> b = rnd.<span class="text-blue-300">nextBoolean</span>();
 <span class="text-slate-500">// true o false</span></div><div class="bg-amber-900/30 border border-amber-700/40 rounded-lg p-3 text-sm text-amber-200 mb-3">  💡 <code>nextInt(n)</code> genera entre <strong>0 y n-1</strong>. Para rango min–max:<br>  <code>rnd.nextInt(max - min + 1) + min</code></div><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> Usando la clase Random, generar e imprimir:<br>  — Un número entero entre 50 y 100<br>  — Un booleano aleatorio<br>  <code class="text-yellow-300">Número: 73</code><br>  <code class="text-yellow-300">Cara: true</code></div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">Número: 73<br>Cara: true</code> <span class="text-emerald-300/70 text-xs">(ejemplo — el valor exacto depende de la entrada o del azar)</span></div>`,    starterCode: `import java.util.Random;
\n\npublic class Main {
\n    public static void main(String[] args) {
\n        Random rnd = new Random();
\n        // Entero entre 50 y 100\n        int numero = rnd.nextInt(51) + 50;
\n        // Booleano aleatorio\n        boolean cara = rnd.nextBoolean();
\n        System.out.println("Número: " + numero);
\n        System.out.println("Cara: " + cara);
\n    }
\n}`,    hint: 'Para un rango [50, 100] usar nextInt(51) + 50: nextInt(51) da 0–50, sumando 50 da 50–100. nextBoolean() devuelve true o false al azar.',  }
,  // ══ TEMA 7: Condicional if / else ═════════════════════════════════════════
  {
 id: 11, title: "Condicional if / else", subtitle: "Tomar decisiones",    explanation: `<h2 class="text-base font-bold mb-3">if / else</h2><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-purple-400">if</span> (edad >= <span class="text-orange-300">18</span>) {
<br>&nbsp;
&nbsp;
<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Mayor de edad"</span>);
<br>}
 <span class="text-purple-400">else</span> {
<br>&nbsp;
&nbsp;
<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Menor de edad"</span>);
<br>}
</div><p class="text-slate-400 text-sm mb-3">Operadores: <code class="text-yellow-300">==</code> igual &nbsp;
 <code class="text-yellow-300">!=</code> distinto &nbsp;
 <code class="text-yellow-300">&gt;
</code> <code class="text-yellow-300">&lt;
</code> <code class="text-yellow-300">&gt;
=</code> <code class="text-yellow-300">&lt;
=</code></p><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> Con <code class="text-indigo-300">temperatura = 35</code>: si es mayor a 30, imprimir exactamente <code class="text-yellow-300">Hace calor</code>;
 si no, imprimir exactamente <code class="text-yellow-300">Temperatura normal</code>.</div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">Hace calor</code></div>`,    starterCode: `public class Main {
\n    public static void main(String[] args) {
\n        int temperatura = 35;
\n        // Escribir el if / else\n\n    }
\n}`,    hint: 'Escribir if (condición) { ... } else { ... }. Pensar qué operador de comparación corresponde para "mayor a 30".',  }
,  {
 id: 12, title: "if / else anidado", subtitle: "Varias condiciones",    explanation: `<h2 class="text-base font-bold mb-3">if / else if / else</h2><p class="text-slate-300 text-sm mb-4">Para evaluar más de dos casos se encadenan condiciones con <code class="text-indigo-400">else if</code>.</p><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-purple-400">if</span> (nota >= <span class="text-orange-300">90</span>) {
<br>&nbsp;
&nbsp;
<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Sobresaliente"</span>);
<br>}
 <span class="text-purple-400">else if</span> (nota >= <span class="text-orange-300">60</span>) {
<br>&nbsp;
&nbsp;
<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Aprobado"</span>);
<br>}
 <span class="text-purple-400">else</span> {
<br>&nbsp;
&nbsp;
<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Reprobado"</span>);
<br>}
</div><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> Con <code class="text-indigo-300">int hora = 14</code>: si la hora es menor a 12 imprimir <code class="text-yellow-300">Buenos días</code>; si es menor a 20 imprimir <code class="text-yellow-300">Buenas tardes</code>; en cualquier otro caso imprimir <code class="text-yellow-300">Buenas noches</code>.</div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">Buenas tardes</code></div>`,    starterCode: `public class Main {
\n    public static void main(String[] args) {
\n        int hora = 14;
\n        // Escribir if / else if / else\n\n    }
\n}`,    hint: 'Usar if para la primera condición, else if para la segunda y else para el caso restante. Las condiciones se evalúan en orden: la primera que sea verdadera se ejecuta.',  }
,  // ══ TEMA 7: Bucle while ═══════════════════════════════════════════════════
  {
 id: 13, title: "Bucle while", subtitle: "Repetir mientras...",    explanation: `<h2 class="text-base font-bold mb-3">El bucle while</h2><p class="text-slate-300 text-sm mb-4">Repite un bloque <strong>mientras</strong> la condición sea verdadera. Es importante modificar algo dentro del bucle para que la condición eventualmente sea falsa.</p><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-purple-400">int</span> i = <span class="text-orange-300">1</span>;
<br><span class="text-purple-400">while</span> (i <= <span class="text-orange-300">3</span>) {
<br>&nbsp;
&nbsp;
<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Vuelta "</span> + i);
<br>&nbsp;
&nbsp;
i++;
 <span class="text-slate-500">// i = i + 1</span><br>}
</div><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> Usar un while para imprimir los números del 1 al 5, uno por línea.</div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">1<br>2<br>3<br>4<br>5</code></div>`,    starterCode: `public class Main {
\n    public static void main(String[] args) {
\n        int i = 1;
\n        // Completar el while\n\n    }
\n}`,    hint: 'El while necesita una condición (¿hasta qué valor llega i?) y dentro del cuerpo algo que incremente i para que el bucle termine.',  }
,  {
 id: 14, title: "Acumulador con while", subtitle: "Sumar con un bucle",    explanation: `<h2 class="text-base font-bold mb-3">Acumulador</h2><p class="text-slate-300 text-sm mb-4">Un <strong>acumulador</strong> es una variable que va sumando valores en cada vuelta del bucle.</p><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-purple-400">int</span> suma = <span class="text-orange-300">0</span>;
<br><span class="text-purple-400">int</span> i = <span class="text-orange-300">1</span>;
<br><span class="text-purple-400">while</span> (i <= <span class="text-orange-300">5</span>) {
<br>&nbsp;
&nbsp;
suma = suma + i;
 <span class="text-slate-500">// acumula</span><br>&nbsp;
&nbsp;
i++;
<br>}
<br><span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Suma: "</span> + suma);
 <span class="text-slate-500">// 15</span></div><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> Calcular la suma de los números pares del 2 al 10 (2+4+6+8+10) usando while e imprimir el resultado con el formato <em>Suma de pares: valor</em>.</div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">Suma de pares: 30</code></div>`,    starterCode: `public class Main {
\n    public static void main(String[] args) {
\n        int suma = 0;
\n        int i = 2;
\n        // Completar el while sumando los pares\n\n        System.out.println("Suma de pares: " + suma);
\n    }
\n}`,    hint: 'Iniciar i en 2 y sumar de 2 en 2 (i += 2) hasta llegar a 10. En cada vuelta acumular i en suma.',  }
,  // ══ TEMA 8: Bucle do-while ═══════════════════════════════════════════════
  {
 id: 19, title: "Bucle do-while", subtitle: "Ejecutar al menos una vez",    explanation: `<h2 class="text-base font-bold mb-3">El bucle do-while</h2><p class="text-slate-300 text-sm mb-4">A diferencia del <code class="text-indigo-400">while</code>, el <code class="text-indigo-400">do-while</code> ejecuta el bloque <strong>al menos una vez</strong> antes de verificar la condición.</p><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-purple-400">int</span> i = <span class="text-orange-300">1</span>;
<br><span class="text-purple-400">do</span> {
<br>&nbsp;
&nbsp;
<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Vuelta "</span> + i);
<br>&nbsp;
&nbsp;
i++;
<br>}
 <span class="text-purple-400">while</span> (i <= <span class="text-orange-300">3</span>);
<br><span class="text-slate-500">// Imprime: Vuelta 1 / Vuelta 2 / Vuelta 3</span></div><div class="bg-amber-900/30 border border-amber-700/40 rounded-lg p-3 text-sm text-amber-200 mb-3">  💡 Diferencia clave: si la condición es falsa desde el inicio, <strong>while</strong> no ejecuta nada, pero <strong>do-while</strong> ejecuta el bloque una vez igual.</div><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> Usar un do-while para imprimir los números del 1 al 4, uno por línea.<br>La condición debe ir al final del bloque.</div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">1<br>2<br>3<br>4</code></div>`,    starterCode: `public class Main {
\n    public static void main(String[] args) {
\n        int i = 1;
\n        // Completar el do-while\n\n    }
\n}`,    hint: 'El do-while tiene la condición al final: do { ... } while (condicion); El cuerpo se ejecuta primero y luego se verifica si continuar.',  }
,  {
 id: 20, title: "do-while con acumulador", subtitle: "Sumar con do-while",    explanation: `<h2 class="text-base font-bold mb-3">do-while con acumulador</h2><p class="text-slate-300 text-sm mb-4">El do-while es útil cuando se necesita ejecutar el cuerpo al menos una vez antes de decidir si continuar. Combinado con un acumulador permite calcular sumas.</p><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-purple-400">int</span> suma = <span class="text-orange-300">0</span>;
<br><span class="text-purple-400">int</span> i = <span class="text-orange-300">1</span>;
<br><span class="text-purple-400">do</span> {
<br>&nbsp;
&nbsp;
suma += i;
<br>&nbsp;
&nbsp;
i++;
<br>}
 <span class="text-purple-400">while</span> (i <= <span class="text-orange-300">5</span>);
<br><span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Suma: "</span> + suma);
 <span class="text-slate-500">// 15</span></div><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> Usando do-while, calcular la suma de los números impares del 1 al 9 (1+3+5+7+9) e imprimir el resultado con el formato <em>Suma de impares: valor</em>.</div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">Suma de impares: 25</code></div>`,    starterCode: `public class Main {
\n    public static void main(String[] args) {
\n        int suma = 0;
\n        int i = 1;
\n        // Completar el do-while sumando impares\n\n        System.out.println("Suma de impares: " + suma);
\n    }
\n}`,    hint: 'Iniciar i en 1 e incrementar de 2 en 2 (i += 2) para recorrer solo los impares: 1, 3, 5, 7, 9. La condición al final verifica si i todavía es <= 9.',  }
,  // ══ TEMA 10: Procedimientos ══════════════════════════════════════════════
  {
 id: 21, title: "Procedimientos", subtitle: "Métodos sin retorno",    explanation: `<h2 class="text-base font-bold mb-3">Procedimientos — static void</h2><p class="text-slate-300 text-sm mb-4">Un <strong>procedimiento</strong> es un bloque de código con nombre que realiza una tarea pero <strong>no devuelve ningún valor</strong>. En Java se declara con <code class="text-indigo-400">static void</code>.</p><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-purple-400">static void</span> <span class="text-blue-300">saludar</span>() {
<br>&nbsp;
&nbsp;
<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Hola desde el procedimiento"</span>);
<br>}
<br><br><span class="text-purple-400">public static void</span> <span class="text-blue-300">main</span>(<span class="text-green-300">String</span>[] args) {
<br>&nbsp;
&nbsp;
<span class="text-blue-300">saludar</span>();
 <span class="text-slate-500">// llamada al procedimiento</span><br>&nbsp;
&nbsp;
<span class="text-blue-300">saludar</span>();
 <span class="text-slate-500">// se puede llamar múltiples veces</span><br>}
</div><p class="text-slate-400 text-sm mb-3">Los procedimientos permiten <strong>reutilizar código</strong>: se escribe una vez y se llama cuantas veces sea necesario.</p><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> Crear un procedimiento <code class="text-yellow-300">static void mostrarLinea()</code> que imprima <code class="text-yellow-300">----------</code> y llamarlo 3 veces desde <code class="text-yellow-300">main</code>.</div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">----------<br>----------<br>----------</code></div>`,    starterCode: `public class Main {
\n\n    static void mostrarLinea() {
\n        // Imprimir diez guiones\n\n    }
\n\n    public static void main(String[] args) {
\n        // Llamar a mostrarLinea tres veces\n\n    }
\n}`,    hint: 'Dentro del procedimiento usar println con el texto de guiones. En main, llamar al procedimiento por su nombre con paréntesis: mostrarLinea();',  }
,  {
 id: 22, title: "Procedimientos con parámetros", subtitle: "Pasar datos a un método",    explanation: `<h2 class="text-base font-bold mb-3">Procedimientos con parámetros</h2><p class="text-slate-300 text-sm mb-4">Los parámetros permiten que un procedimiento reciba datos para trabajar con ellos. Se declaran entre los paréntesis con su tipo y nombre.</p><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-purple-400">static void</span> <span class="text-blue-300">saludar</span>(<span class="text-green-300">String</span> nombre) {
<br>&nbsp;
&nbsp;
<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Hola, "</span> + nombre + <span class="text-orange-300">"!"</span>);
<br>}
<br><br><span class="text-blue-300">saludar</span>(<span class="text-orange-300">"Ana"</span>);
  <span class="text-slate-500">// Hola, Ana!</span><br><span class="text-blue-300">saludar</span>(<span class="text-orange-300">"Luis"</span>);
 <span class="text-slate-500">// Hola, Luis!</span></div><p class="text-slate-400 text-sm mb-3">El mismo procedimiento produce resultados distintos según el argumento que recibe.</p><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> Crear <code class="text-indigo-300">static void mostrarProducto(String nombre, double precio)</code> que imprima los datos de cada producto con el formato <em>Producto: nombre — Precio: $valor</em>.<br>Llamarlo con tres productos: Arroz ($45.5), Aceite ($120.0) y Azúcar ($38.75).</div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">Producto: Arroz — Precio: $45.5<br>Producto: Aceite — Precio: $120.0<br>Producto: Azúcar — Precio: $38.75</code></div>`,    starterCode: `public class Main {
\n\n    static void mostrarProducto(String nombre, double precio) {
\n        // Imprimir el nombre y el precio\n\n    }
\n\n    public static void main(String[] args) {
\n        mostrarProducto("Arroz", 45.5);
\n        mostrarProducto("Aceite", 120.0);
\n        mostrarProducto("Azúcar", 38.75);
\n    }
\n}`,    hint: 'Dentro del procedimiento usar println combinando el texto fijo con los parámetros nombre y precio usando el operador +.',  }
,  // ══ TEMA 11: Funciones ════════════════════════════════════════════════════
  {
 id: 23, title: "Funciones", subtitle: "Métodos que devuelven un valor",    explanation: `<h2 class="text-base font-bold mb-3">Funciones — métodos con return</h2><p class="text-slate-300 text-sm mb-4">Una <strong>función</strong> es un método que <strong>devuelve un valor</strong> al código que la llamó. En lugar de <code class="text-indigo-400">void</code>, se escribe el tipo del valor que retorna.</p><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-purple-400">static int</span> <span class="text-blue-300">sumar</span>(<span class="text-purple-400">int</span> a, <span class="text-purple-400">int</span> b) {
<br>&nbsp;
&nbsp;
<span class="text-purple-400">return</span> a + b;
 <span class="text-slate-500">// devuelve el resultado</span><br>}
<br><br><span class="text-purple-400">int</span> resultado = <span class="text-blue-300">sumar</span>(<span class="text-orange-300">4</span>, <span class="text-orange-300">7</span>);
<br><span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Resultado: "</span> + resultado);
 <span class="text-slate-500">// 11</span></div><div class="bg-amber-900/30 border border-amber-700/40 rounded-lg p-3 text-sm text-amber-200 mb-3">  💡 <strong>void</strong> = no devuelve nada &nbsp;
|&nbsp;
 <strong>int / double / String</strong> = devuelve ese tipo</div><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> Crear <code class="text-indigo-300">static double calcularArea(double base, double altura)</code> que retorne el área de un triángulo (base × altura / 2).<br>Llamarla con base=6 y altura=4 e imprimir el resultado con el formato <code class="text-yellow-300">Área: valor</code>.</div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">Área: 12.0</code></div>`,    starterCode: `public class Main {
\n\n    static double calcularArea(double base, double altura) {
\n        // Calcular y retornar el área\n\n    }
\n\n    public static void main(String[] args) {
\n        double area = calcularArea(6, 4);
\n        System.out.println("Área: " + area);
\n    }
\n}`,    hint: 'La función debe usar return para devolver el cálculo: return base * altura / 2; El tipo de retorno declarado es double.',  }
,  {
 id: 24, title: "Funciones con String", subtitle: "Retornar texto",    explanation: `<h2 class="text-base font-bold mb-3">Funciones que retornan String</h2><p class="text-slate-300 text-sm mb-4">Una función puede retornar cualquier tipo, incluyendo <code class="text-indigo-400">String</code>. Es útil para construir mensajes o transformar texto.</p><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-purple-400">static</span> <span class="text-green-300">String</span> <span class="text-blue-300">crearSaludo</span>(<span class="text-green-300">String</span> nombre, <span class="text-purple-400">int</span> edad) {
<br>&nbsp;
&nbsp;
<span class="text-purple-400">return</span> <span class="text-orange-300">"Hola "</span> + nombre + <span class="text-orange-300">", tenés "</span> + edad + <span class="text-orange-300">" años."</span>;
<br>}
<br><br><span class="text-green-300">String</span> msg = <span class="text-blue-300">crearSaludo</span>(<span class="text-orange-300">"María"</span>, <span class="text-orange-300">17</span>);
<br><span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(msg);
</div><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> Crear <code class="text-indigo-300">static String clasificar(int nota)</code> que retorne <code class="text-yellow-300">Destacado</code> si la nota es mayor o igual a 90, <code class="text-yellow-300">Logrado</code> si es mayor o igual a 60, o <code class="text-yellow-300">En proceso</code> en cualquier otro caso.<br>Probar con notas 95, 75 y 40 e imprimir cada resultado.</div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">Destacado<br>Logrado<br>En proceso</code></div>`,    starterCode: `public class Main {
\n\n    static String clasificar(int nota) {
\n        // Retornar la clasificación según la nota\n\n    }
\n\n    public static void main(String[] args) {
\n        System.out.println(clasificar(95));
\n        System.out.println(clasificar(75));
\n        System.out.println(clasificar(40));
\n    }
\n}`,    hint: 'Usar if / else if / else dentro de la función y retornar el String correspondiente en cada caso. Recordar que todas las ramas deben tener return.',  }
,  // ══ TEMA 9: Bucle for ═════════════════════════════════════════════════════
  {
 id: 15, title: "Bucle for", subtitle: "Repetir un número fijo de veces",    explanation: `<h2 class="text-base font-bold mb-3">El bucle for</h2><p class="text-slate-300 text-sm mb-4">El <code class="text-indigo-400">for</code> agrupa en una línea: valor inicial, condición e incremento. Es el más usado cuando se conoce cuántas veces repetir.</p><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-purple-400">for</span> (<span class="text-purple-400">int</span> i = <span class="text-orange-300">1</span>;
 i <= <span class="text-orange-300">3</span>;
 i++) {
<br>&nbsp;
&nbsp;
<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Vuelta "</span> + i);
<br>}
<br><span class="text-slate-500">// Vuelta 1 / Vuelta 2 / Vuelta 3</span></div><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> Usar un for para imprimir la tabla de multiplicar del 3, desde 3×1 hasta 3×5, una línea por resultado con el formato <em>3 x N = resultado</em>.</div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">3 x 1 = 3<br>3 x 2 = 6<br>3 x 3 = 9<br>3 x 4 = 12<br>3 x 5 = 15</code></div>`,    starterCode: `public class Main {
\n    public static void main(String[] args) {
\n        // Escribir el for del 1 al 5\n\n    }
\n}`,    hint: 'El for va del 1 al 5 (i <= 5). Dentro armar el mensaje: "3 x " + i + " = " + (3 * i). Los paréntesis fuerzan que la multiplicación se calcule antes.',  }
,  {
 id: 16, title: "for con acumulador", subtitle: "Calcular con un bucle",    explanation: `<h2 class="text-base font-bold mb-3">for con acumulador</h2><p class="text-slate-300 text-sm mb-4">El for también sirve para acumular valores. La variable acumuladora se declara <strong>antes</strong> del bucle y se imprime <strong>después</strong>.</p><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-purple-400">int</span> suma = <span class="text-orange-300">0</span>;
<br><span class="text-purple-400">for</span> (<span class="text-purple-400">int</span> i = <span class="text-orange-300">1</span>;
 i <= <span class="text-orange-300">5</span>;
 i++) {
<br>&nbsp;
&nbsp;
suma += i;
 <span class="text-slate-500">// suma = suma + i</span><br>}
<br><span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Total: "</span> + suma);
 <span class="text-slate-500">// 15</span></div><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> Calcular el factorial de 5 (5×4×3×2×1) usando un for e imprimir el resultado con el formato <em>5! = valor</em>.</div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">5! = 120</code></div>`,    starterCode: `public class Main {
\n    public static void main(String[] args) {
\n        int factorial = 1;
\n        // Completar el for multiplicando\n\n        System.out.println("5! = " + factorial);
\n    }
\n}`,    hint: 'En lugar de sumar, multiplicar en cada vuelta: factorial *= i (equivale a factorial = factorial * i). El for va del 1 al 5.',  }
,  // ══ TEMA 9: Arrays ════════════════════════════════════════════════════════
  {
 id: 17, title: "Arrays — declarar y acceder", subtitle: "Listas de valores",    explanation: `<h2 class="text-base font-bold mb-3">Arrays</h2><p class="text-slate-300 text-sm mb-4">Un array guarda múltiples valores del mismo tipo. Los índices empiezan en <strong>0</strong>.</p><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-purple-400">int</span>[] notas = {
<span class="text-orange-300">85</span>, <span class="text-orange-300">90</span>, <span class="text-orange-300">78</span>}
;
<br>notas[<span class="text-orange-300">0</span>]  <span class="text-slate-500">// 85 — primer elemento</span><br>notas[<span class="text-orange-300">2</span>]  <span class="text-slate-500">// 78 — tercer elemento</span><br>notas.length  <span class="text-slate-500">// 3 — cantidad de elementos</span></div><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> Con el array <code class="text-indigo-300">String[] materias = {
"Matemática", "Inglés", "Programación"}
</code>, imprimir en tres líneas con el formato exacto: <code class="text-yellow-300">Primera: valor</code>, <code class="text-yellow-300">Última: valor</code> y <code class="text-yellow-300">Total: valor</code>.</div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">Primera: Matemática<br>Última: Programación<br>Total: 3</code></div>`,    starterCode: `public class Main {
\n    public static void main(String[] args) {
\n        String[] materias = {
"Matemática", "Inglés", "Programación"}
;
\n        // Imprimir primera, última y total\n\n    }
\n}`,    hint: 'El primer elemento tiene índice 0. El último tiene índice length-1. Usar .length para obtener la cantidad total.',  }
,  {
 id: 18, title: "Recorrer un array", subtitle: "for con array",    explanation: `<h2 class="text-base font-bold mb-3">Recorrer un array con for</h2><p class="text-slate-300 text-sm mb-4">El for-each es la forma más sencilla de recorrer todos los elementos de un array:</p><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-purple-400">int</span>[] notas = {
<span class="text-orange-300">85</span>, <span class="text-orange-300">90</span>, <span class="text-orange-300">78</span>}
;
<br><span class="text-purple-400">for</span> (<span class="text-purple-400">int</span> n : notas) {
<br>&nbsp;
&nbsp;
<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(n);
<br>}
</div><p class="text-slate-400 text-sm mb-3">También se puede usar un for clásico con índice para acceder a la posición.</p><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> Dado el array <code class="text-indigo-300">int[] precios = {
100, 250, 80, 320, 150}
</code>, recorrer el array con un for, acumular la suma de todos los precios e imprimir el total.</div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">Total: 900</code></div>`,    starterCode: `public class Main {
\n    public static void main(String[] args) {
\n        int[] precios = {
100, 250, 80, 320, 150}
;
\n        int total = 0;
\n        // Recorrer el array y acumular en total\n\n        System.out.println("Total: " + total);
\n    }
\n}`,    hint: 'Usar un for-each (for (int p : precios)) y en cada vuelta sumar p al acumulador total. El resultado se imprime después del bucle.',  }
,  // ══ TEMA 14: Comentarios ═════════════════════════════════════════════════════
  {
 id: 27, title: "Comentarios de una línea", subtitle: "El símbolo //",    explanation: `<h2 class="text-base font-bold mb-3">Comentarios en Java</h2><p class="text-slate-300 text-sm mb-4">Un <strong>comentario</strong> es texto que el compilador ignora por completo. Sirve para documentar el código y explicar qué hace cada parte.</p><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-slate-500">// Esto es un comentario de una línea</span><br><span class="text-purple-400">int</span> edad = <span class="text-orange-300">17</span>;
 <span class="text-slate-500">// también al final de una línea</span><br><br><span class="text-slate-500">/* Esto es un comentario</span><br><span class="text-slate-500">&nbsp;
&nbsp;
 de bloque, puede abarcar</span><br><span class="text-slate-500">&nbsp;
&nbsp;
 varias líneas */</span></div><div class="bg-amber-900/30 border border-amber-700/40 rounded-lg p-3 text-sm text-amber-200 mb-3">  💡 Los comentarios no se ejecutan ni afectan el programa. Son solo para los programadores.</div><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> El primer comentario ya está escrito como ejemplo.<br>Agregar un comentario antes de <code class="text-indigo-300">int edad</code> y antes de cada <code class="text-indigo-300">System.out.println</code> (3 comentarios más).<br>Ejecutar: la salida debe ser exactamente:<br><code class="text-green-300 text-xs">Nombre: Lucas<br>Edad: 17</code></div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">Nombre: Lucas<br>Edad: 17</code></div>`,    starterCode: `public class Main {
\n    public static void main(String[] args) {
\n        // Guarda el nombre del estudiante\n        String nombre = "Lucas";
\n        int edad = 17;
\n        System.out.println("Nombre: " + nombre);
\n        System.out.println("Edad: " + edad);
\n    }
\n}`,    hint: 'Escribir // tu comentario antes de int edad, antes del primer println y antes del segundo println. El codigo no cambia, solo se agregan lineas de comentario.',  }
,  {
 id: 28, title: "Comentarios de bloque", subtitle: "/* ... */ y buenas prácticas",    explanation: `<h2 class="text-base font-bold mb-3">Comentarios de bloque</h2><p class="text-slate-300 text-sm mb-4">Para comentarios largos que abarcan varias líneas se usan <code class="text-indigo-400">/* ... */</code>. Son útiles para describir la lógica de un bloque completo.</p><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-slate-500">/*</span><br><span class="text-slate-500">&nbsp;
 Calcula el área de un rectángulo.</span><br><span class="text-slate-500">&nbsp;
 base y altura deben ser positivos.</span><br><span class="text-slate-500">*/</span><br><span class="text-purple-400">double</span> area = base * altura;
</div><p class="text-slate-400 text-sm mb-3">Un buen comentario explica el <strong>por qué</strong>, no solo el qué. "Suma 1 a i" es innecesario;
 "Contamos desde 1 porque el índice 0 está reservado" agrega valor.</p><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> Agregar un comentario de bloque (<code class="text-indigo-300">/* ... */</code>) al inicio del método main describiendo qué calcula el programa.<br>Luego ejecutar para verificar que el comentario no afecta el resultado.</div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">Área: 24.0</code></div>`,    starterCode: `public class Main {
\n    public static void main(String[] args) {
\n        /* Agrega aquí un comentario de bloque\n           describiendo qué calcula este programa */\n        double base = 6.0;
\n        double altura = 4.0;
\n        double area = base * altura;
\n        System.out.println("Área: " + area);
\n    }
\n}`,    hint: 'El comentario de bloque ya tiene la estructura /* ... */. Completar el texto descriptivo y ejecutar para ver la salida.',  }
,  // ══ TEMA 15: Constantes ══════════════════════════════════════════════════════
  {
 id: 29, title: "La palabra clave final", subtitle: "Valores que no cambian",    explanation: `<h2 class="text-base font-bold mb-3">Constantes con final</h2><p class="text-slate-300 text-sm mb-4">Una <strong>constante</strong> es una variable cuyo valor no puede cambiar después de asignarse. Se declara con la palabra clave <code class="text-indigo-400">final</code>. Por convención, el nombre va en <strong>MAYÚSCULAS</strong>.</p><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-purple-400">final double</span> TASA_IVA = <span class="text-orange-300">0.22</span>;
<br><span class="text-purple-400">final int</span> MAX_INTENTOS = <span class="text-orange-300">3</span>;
<br><br><span class="text-slate-500">// Error: no se puede reasignar una constante</span><br><span class="text-slate-500">// TASA_IVA = 0.10;
 ← Error de compilación</span></div><div class="bg-amber-900/30 border border-amber-700/40 rounded-lg p-3 text-sm text-amber-200 mb-3">  💡 Usar constantes hace el código más legible y facilita los cambios: si la tasa del IVA cambia, solo se modifica en un lugar.</div><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> Declarar <code class="text-indigo-300">final double PRECIO_BASE = 1000.0</code> y <code class="text-indigo-300">final double DESCUENTO = 0.15</code>.<br>Calcular el precio con descuento (PRECIO_BASE − PRECIO_BASE × DESCUENTO) e imprimirlo con el formato <code class="text-yellow-300">Precio final: valor</code>.</div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">Precio final: 850.0</code></div>`,    starterCode: `public class Main {
\n    public static void main(String[] args) {
\n        final double PRECIO_BASE = 1000.0;
\n        final double DESCUENTO = 0.15;
\n        // Calcular precio final: PRECIO_BASE - (PRECIO_BASE * DESCUENTO)\n\n    }
\n}`,    hint: 'El precio final es PRECIO_BASE menos el descuento. El descuento es PRECIO_BASE * DESCUENTO. Guardar en una variable double e imprimir.',  }
,  {
 id: 30, title: "Constantes en práctica", subtitle: "Uso en cálculos reales",    explanation: `<h2 class="text-base font-bold mb-3">Constantes en cálculos</h2><p class="text-slate-300 text-sm mb-4">Las constantes son especialmente útiles para valores físicos, reglas de negocio o límites del sistema que no deben cambiar durante la ejecución.</p><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-purple-400">final double</span> PI = <span class="text-orange-300">3.14159</span>;
<br><span class="text-purple-400">final int</span> NOTA_MINIMA = <span class="text-orange-300">60</span>;
<br><br><span class="text-purple-400">double</span> radio = <span class="text-orange-300">5.0</span>;
<br><span class="text-purple-400">double</span> area = PI * radio * radio;
<br><span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Área: "</span> + area);
</div><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> Usando <code class="text-indigo-300">final int HORAS_DIA = 24</code> y <code class="text-indigo-300">final int DIAS_SEMANA = 7</code>, calcular el producto de ambas constantes e imprimirlo con el formato <code class="text-yellow-300">Horas en una semana: valor</code>.</div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">Horas en una semana: 168</code></div>`,    starterCode: `public class Main {
\n    public static void main(String[] args) {
\n        final int HORAS_DIA = 24;
\n        final int DIAS_SEMANA = 7;
\n        // Calcular e imprimir las horas en una semana\n\n    }
\n}`,    hint: 'Multiplicar HORAS_DIA por DIAS_SEMANA y guardar el resultado en una variable int. Luego imprimir con el texto correspondiente.',  }
,  // ══ TEMA 16: Conversión de tipos ═════════════════════════════════════════════
  {
 id: 31, title: "Widening — conversión implícita", subtitle: "De menor a mayor tipo",    explanation: `<h2 class="text-base font-bold mb-3">Conversión implícita (widening)</h2><p class="text-slate-300 text-sm mb-4">Java convierte automáticamente un tipo de dato <strong>más pequeño</strong> a uno <strong>más grande</strong> sin necesidad de indicarlo. No hay pérdida de información.</p><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-purple-400">int</span> entero = <span class="text-orange-300">42</span>;
<br><span class="text-purple-400">double</span> decimal = entero;
 <span class="text-slate-500">// 42 → 42.0 automáticamente</span><br><span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(decimal);
 <span class="text-slate-500">// 42.0</span><br><br><span class="text-slate-500">// Orden: byte → short → int → long → float → double</span></div><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> Declarar <code class="text-indigo-300">int cantidad = 7</code> y asignarla a una variable <code class="text-indigo-300">double resultado</code>.<br>Dividir resultado entre 2 e imprimir con el formato <code class="text-yellow-300">Resultado: valor</code>.</div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">Resultado: 3.5</code></div>`,    starterCode: `public class Main {
\n    public static void main(String[] args) {
\n        int cantidad = 7;
\n        // Asignar cantidad a una variable double\n        double resultado = cantidad;
\n        // Dividir resultado entre 2 e imprimir\n\n    }
\n}`,    hint: 'resultado ya es double (7.0). Dividir resultado / 2 dará 3.5. Imprimir con "Resultado: " + (resultado / 2).',  }
,  {
 id: 32, title: "Narrowing — cast explícito", subtitle: "De mayor a menor tipo",    explanation: `<h2 class="text-base font-bold mb-3">Conversión explícita (narrowing)</h2><p class="text-slate-300 text-sm mb-4">Cuando se convierte de un tipo <strong>mayor a uno menor</strong> (por ejemplo de <code class="text-indigo-400">double</code> a <code class="text-indigo-400">int</code>), se debe indicar explícitamente con un <strong>cast</strong>. Se pueden perder decimales.</p><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-purple-400">double</span> precio = <span class="text-orange-300">99.99</span>;
<br><span class="text-purple-400">int</span> entero = (<span class="text-purple-400">int</span>) precio;
 <span class="text-slate-500">// 99 (trunca, no redondea)</span><br><br><span class="text-purple-400">double</span> promedio = <span class="text-orange-300">7.8</span>;
<br><span class="text-purple-400">int</span> nota = (<span class="text-purple-400">int</span>) promedio;
 <span class="text-slate-500">// 7</span></div><div class="bg-amber-900/30 border border-amber-700/40 rounded-lg p-3 text-sm text-amber-200 mb-3">  ⚠️ El cast <strong>trunca</strong> los decimales (los descarta). 7.9 se convierte en 7, no en 8.</div><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> Dividir 10 entre 3 de dos formas: división entera y con cast.<br>Imprimir:<br>  <code class="text-yellow-300">División entera: 3<br>Con cast: 3</code></div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">División entera: 3<br>Con cast: 3</code></div>`,    starterCode: `public class Main {
\n    public static void main(String[] args) {
\n        // División entera directa\n        int divEntera = 10 / 3;
\n        System.out.println("División entera: " + divEntera);
\n        // Obtener resultado decimal y luego castear a int\n        double decimal = 10.0 / 3;
\n        int conCast = (int) decimal;
\n        System.out.println("Con cast: " + conCast);
\n    }
\n}`,    hint: 'El código ya está completo. Ejecutar y observar cómo ambas formas producen el mismo entero 3, pero por caminos distintos.',  }
,  // ══ TEMA 17: Incremento y decremento ═════════════════════════════════════════
  {
 id: 33, title: "Operadores ++ y --", subtitle: "Incrementar y decrementar",    explanation: `<h2 class="text-base font-bold mb-3">Incremento y decremento</h2><p class="text-slate-300 text-sm mb-4"><code class="text-indigo-400">++</code> aumenta una variable en 1 y <code class="text-indigo-400">--</code> la disminuye en 1. Son atajos muy usados en bucles y contadores.</p><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-purple-400">int</span> contador = <span class="text-orange-300">5</span>;
<br>contador++;
 <span class="text-slate-500">// ahora vale 6 (igual que contador = contador + 1)</span><br>contador--;
 <span class="text-slate-500">// ahora vale 5 nuevamente</span><br><br><span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(contador);
 <span class="text-slate-500">// 5</span></div><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> Empezar con <code class="text-indigo-300">int vidas = 3</code>.<br>Incrementar una vez e imprimir el valor.<br>Luego decrementar dos veces e imprimir el nuevo valor.<br>Cada impresión con el formato <em>Vidas: valor</em>.</div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">Vidas: 4<br>Vidas: 2</code></div>`,    starterCode: `public class Main {
\n    public static void main(String[] args) {
\n        int vidas = 3;
\n        // Incrementar e imprimir\n\n        // Decrementar dos veces e imprimir\n\n    }
\n}`,    hint: 'Usar vidas++ para incrementar y vidas-- para decrementar. Imprimir con println después de cada operación.',  }
,  {
 id: 34, title: "Pre vs Post incremento", subtitle: "++i vs i++",    explanation: `<h2 class="text-base font-bold mb-3">Pre-incremento vs Post-incremento</h2><p class="text-slate-300 text-sm mb-4">La posición del <code class="text-indigo-400">++</code> importa cuando se usa dentro de una expresión:</p><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-purple-400">int</span> i = <span class="text-orange-300">5</span>;
<br><br><span class="text-slate-500">// Post-incremento: primero usa el valor, luego incrementa</span><br><span class="text-purple-400">int</span> a = i++;
 <span class="text-slate-500">// a = 5, luego i = 6</span><br><br><span class="text-purple-400">int</span> j = <span class="text-orange-300">5</span>;
<br><span class="text-slate-500">// Pre-incremento: primero incrementa, luego usa el valor</span><br><span class="text-purple-400">int</span> b = ++j;
 <span class="text-slate-500">// j = 6, luego b = 6</span></div><div class="bg-amber-900/30 border border-amber-700/40 rounded-lg p-3 text-sm text-amber-200 mb-3">  💡 En una línea sola (<code>i++;
</code>) no hay diferencia. La diferencia solo aparece cuando el resultado se usa en una expresión.</div><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> El código ya está escrito.<br>Predecir los valores e imprimir para comprobar:<br>  <code class="text-yellow-300">a: 5 — i: 6<br>b: 6 — j: 6</code></div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">a: 5 — i: 6<br>b: 6 — j: 6</code></div>`,    starterCode: `public class Main {
\n    public static void main(String[] args) {
\n        int i = 5;
\n        int a = i++;
\n        System.out.println("a: " + a + " — i: " + i);
\n\n        int j = 5;
\n        int b = ++j;
\n        System.out.println("b: " + b + " — j: " + j);
\n    }
\n}`,    hint: 'El código ya está completo. Ejecutar y observar la diferencia entre post-incremento (i++) y pre-incremento (++j).',  }
,  // ══ TEMA 18: Atajos aritméticos ══════════════════════════════════════════════
  {
 id: 35, title: "Operadores de asignación compuesta", subtitle: "+=  -=  *=  /=",    explanation: `<h2 class="text-base font-bold mb-3">Atajos aritméticos</h2><p class="text-slate-300 text-sm mb-4">Los operadores de asignación compuesta combinan una operación aritmética con la asignación. Son atajos que hacen el código más conciso.</p><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-purple-400">int</span> x = <span class="text-orange-300">10</span>;
<br>x += <span class="text-orange-300">5</span>;
  <span class="text-slate-500">// x = x + 5 → 15</span><br>x -= <span class="text-orange-300">3</span>;
  <span class="text-slate-500">// x = x - 3 → 12</span><br>x *= <span class="text-orange-300">2</span>;
  <span class="text-slate-500">// x = x * 2 → 24</span><br>x /= <span class="text-orange-300">4</span>;
  <span class="text-slate-500">// x = x / 4 → 6</span></div><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> Empezar con <code class="text-indigo-300">int puntos = 100</code>.<br>Aplicar en orden: sumar 50, restar 30, multiplicar por 2 usando +=, -= y *=.<br>Imprimir el valor final con el formato <code class="text-yellow-300">Puntos: valor</code>.</div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">Puntos: 240</code></div>`,    starterCode: `public class Main {
\n    public static void main(String[] args) {
\n        int puntos = 100;
\n        // Sumar 50\n\n        // Restar 30\n\n        // Multiplicar por 2\n\n        System.out.println("Puntos: " + puntos);
\n    }
\n}`,    hint: 'Usar puntos += 50; luego puntos -= 30; luego puntos *= 2; Cada operación modifica el valor acumulado de puntos.',  }
,  {
 id: 36, title: "Operador %=", subtitle: "Módulo con atajo",    explanation: `<h2 class="text-base font-bold mb-3">El atajo %=</h2><p class="text-slate-300 text-sm mb-4"><code class="text-indigo-400">%=</code> aplica el módulo y reasigna: <code class="text-indigo-400">x %= n</code> es lo mismo que <code class="text-indigo-400">x = x % n</code>.</p><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-purple-400">int</span> x = <span class="text-orange-300">17</span>;
<br>x %= <span class="text-orange-300">5</span>;
 <span class="text-slate-500">// x = 17 % 5 → 2 (resto de 17/5)</span><br><span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(x);
 <span class="text-slate-500">// 2</span></div><p class="text-slate-400 text-sm mb-3">Recordar que todos los atajos funcionan igual con variables de tipo <code class="text-yellow-300">double</code>.</p><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> El código ya está completo.<br>Hay 23 estudiantes para distribuir en mesas de 4; usando <code class="text-yellow-300">%=</code> se calcula cuántos no tienen mesa completa.<br>Ejecutar y verificar que imprime <code class="text-yellow-300">Estudiantes sin mesa completa: 3</code>.</div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">Estudiantes sin mesa completa: 3</code></div>`,    starterCode: `public class Main {
\n    public static void main(String[] args) {
\n        int estudiantes = 23;
\n        estudiantes %= 4;
\n        System.out.println("Estudiantes sin mesa completa: " + estudiantes);
\n    }
\n}`,    hint: 'El código ya está escrito. 23 % 4 = 3 porque 4×5=20 y sobran 3. Ejecutar para verificar.',  }
,  // ══ TEMA 19: Operadores de comparación ════════════════════════════════════════
  {
 id: 37, title: "Operadores de comparación", subtitle: "== != > < >= <=",    explanation: `<h2 class="text-base font-bold mb-3">Operadores de comparación</h2><p class="text-slate-300 text-sm mb-4">Los operadores de comparación evalúan una condición y devuelven un valor <code class="text-indigo-400">boolean</code> (<code class="text-green-400">true</code> o <code class="text-green-400">false</code>).</p><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-purple-400">int</span> a = <span class="text-orange-300">10</span>, b = <span class="text-orange-300">7</span>;
<br>a == b  <span class="text-slate-500">// false  — ¿son iguales?</span><br>a != b  <span class="text-slate-500">// true   — ¿son distintos?</span><br>a &gt;
  b  <span class="text-slate-500">// true   — ¿a mayor que b?</span><br>a &lt;
  b  <span class="text-slate-500">// false  — ¿a menor que b?</span><br>a &gt;
= b  <span class="text-slate-500">// true   — ¿a mayor o igual?</span><br>a &lt;
= b  <span class="text-slate-500">// false  — ¿a menor o igual?</span></div><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> Con <code class="text-yellow-300">int nota = 75</code>, imprimir el resultado de comparar si la nota es mayor o igual a 60 e imprimir:<br>  <code class="text-yellow-300">¿Aprobado? true</code></div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">¿Aprobado? true</code></div>`,    starterCode: `public class Main {
\n    public static void main(String[] args) {
\n        int nota = 75;
\n        boolean aprobado = nota >= 60;
\n        System.out.println("¿Aprobado? " + aprobado);
\n    }
\n}`,    hint: 'El código ya está completo. Ejecutar y observar que la comparación nota >= 60 produce un boolean que se puede guardar en una variable.',  }
,  {
 id: 38, title: "Comparaciones en condiciones", subtitle: "Usar == y != con if",    explanation: `<h2 class="text-base font-bold mb-3">Comparaciones con if</h2><p class="text-slate-300 text-sm mb-4">Los operadores de comparación se usan directamente en las condiciones de <code class="text-indigo-400">if</code>, <code class="text-indigo-400">while</code> y <code class="text-indigo-400">for</code>.</p><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-purple-400">int</span> edad = <span class="text-orange-300">20</span>;
<br><span class="text-purple-400">if</span> (edad >= <span class="text-orange-300">18</span>) {
<br>&nbsp;
&nbsp;
<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Mayor de edad"</span>);
<br>}
<br><br><span class="text-purple-400">int</span> dia = <span class="text-orange-300">7</span>;
<br><span class="text-purple-400">if</span> (dia != <span class="text-orange-300">0</span>) {
<br>&nbsp;
&nbsp;
<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Día válido"</span>);
<br>}
</div><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> Con <code class="text-indigo-300">int temperatura = 38</code>: si es mayor a 37 imprimir <code class="text-yellow-300">Fiebre</code>; si es igual a 37 imprimir <code class="text-yellow-300">Temperatura normal</code>; en cualquier otro caso imprimir <code class="text-yellow-300">Hipotermia</code>.</div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">Fiebre</code></div>`,    starterCode: `public class Main {
\n    public static void main(String[] args) {
\n        int temperatura = 38;
\n        // Escribir el if / else if / else usando operadores de comparación\n\n    }
\n}`,    hint: 'Usar if (temperatura > 37) para fiebre, else if (temperatura == 37) para normal, y else para el último caso.',  }
,  // ══ TEMA 20: Operadores lógicos ══════════════════════════════════════════════
  {
 id: 39, title: "AND y OR — && y ||", subtitle: "Combinar condiciones",    explanation: `<h2 class="text-base font-bold mb-3">Operadores lógicos && y ||</h2><p class="text-slate-300 text-sm mb-4">Los operadores lógicos permiten combinar varias condiciones en una sola expresión.</p><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-slate-500">// && (AND): verdadero solo si AMBAS condiciones son true</span><br><span class="text-purple-400">if</span> (edad >= <span class="text-orange-300">18</span> && edad &lt;
= <span class="text-orange-300">65</span>) {
<br>&nbsp;
&nbsp;
<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"En edad laboral"</span>);
<br>}
<br><br><span class="text-slate-500">// || (OR): verdadero si AL MENOS UNA condición es true</span><br><span class="text-purple-400">if</span> (dia == <span class="text-orange-300">6</span> || dia == <span class="text-orange-300">7</span>) {
<br>&nbsp;
&nbsp;
<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Fin de semana"</span>);
<br>}
</div><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> Con <code class="text-indigo-300">int nota = 75</code> y <code class="text-indigo-300">boolean entrego = true</code>: si la nota es mayor o igual a 60 Y entregó la tarea, imprimir <code class="text-yellow-300">Aprobado</code>;
 si no, imprimir <code class="text-yellow-300">Reprobado</code>.</div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">Aprobado</code></div>`,    starterCode: `public class Main {
\n    public static void main(String[] args) {
\n        int nota = 75;
\n        boolean entrego = true;
\n        // Combinar ambas condiciones con &&\n\n    }
\n}`,    hint: 'Usar if (nota >= 60 && entrego) { ... } else { ... }. Ambas condiciones deben ser true para aprobar.',  }
,  {
 id: 40, title: "NOT — el operador !", subtitle: "Invertir una condición",    explanation: `<h2 class="text-base font-bold mb-3">Operador lógico !</h2><p class="text-slate-300 text-sm mb-4"><code class="text-indigo-400">!</code> (NOT) invierte el valor de un booleano: convierte <code class="text-green-400">true</code> en <code class="text-green-400">false</code> y viceversa.</p><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-purple-400">boolean</span> conectado = <span class="text-purple-400">false</span>;
<br><span class="text-purple-400">if</span> (!conectado) {
<br>&nbsp;
&nbsp;
<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Sin conexión"</span>);
<br>}
<br><br><span class="text-slate-500">// !true = false</span><br><span class="text-slate-500">// !false = true</span></div><p class="text-slate-400 text-sm mb-3"><code>!condicion</code> es una forma más clara de escribir <code>condicion == false</code>.</p><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> Con <code class="text-indigo-300">boolean pagado = false</code>: si NO está pagado, imprimir <code class="text-yellow-300">Pago pendiente</code>;
 si está pagado, imprimir <code class="text-yellow-300">Pago registrado</code>.</div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">Pago pendiente</code></div>`,    starterCode: `public class Main {
\n    public static void main(String[] args) {
\n        boolean pagado = false;
\n        // Usar ! para verificar si NO está pagado\n\n    }
\n}`,    hint: 'Escribir if (!pagado) { ... } else { ... }. !pagado es true cuando pagado es false.',  }
,  // ══ TEMA 21: System.out.print ════════════════════════════════════════════════
  {
 id: 41, title: "print vs println", subtitle: "Salida sin salto de línea",    explanation: `<h2 class="text-base font-bold mb-3">print vs println</h2><p class="text-slate-300 text-sm mb-3"><code class="text-indigo-400">println</code> imprime y baja al renglón siguiente. <code class="text-indigo-400">print</code> imprime sin moverse al siguiente renglón.</p><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-green-300">System</span>.out.<span class="text-blue-300">print</span>(<span class="text-orange-300">"Hola "</span>);
<br><span class="text-green-300">System</span>.out.<span class="text-blue-300">print</span>(<span class="text-orange-300">"mundo"</span>);
<br><span class="text-slate-500">// Salida: Hola mundo (en una sola línea)</span><br><br><span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Línea 1"</span>);
<br><span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Línea 2"</span>);
<br><span class="text-slate-500">// Salida: Línea 1 / Línea 2 (en líneas distintas)</span></div><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> Usando solo <code class="text-indigo-300">System.out.print</code>, imprimir los números del 1 al 5 separados por espacios, todos en una sola línea.</div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">1 2 3 4 5</code></div>`,    starterCode: `public class Main {
\n    public static void main(String[] args) {
\n        // Imprimir 1 2 3 4 5 en una sola línea usando print\n        System.out.print(1 + " ");
\n        // Continuar con los demás números\n\n    }
\n}`,    hint: 'Usar System.out.print() cinco veces, una por número. Cada llamada imprime el número seguido de un espacio, sin saltar de línea.',  }
,  {
 id: 42, title: "Secuencias de escape", subtitle: "\\n  \\t  \\\"  \\\\",    explanation: `<h2 class="text-base font-bold mb-3">Secuencias de escape</h2><p class="text-slate-300 text-sm mb-4">Algunas caracteres especiales dentro de un String se escriben con una barra invertida <code class="text-indigo-400">\\</code> seguida de una letra:</p><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-orange-300">"\\n"</span>  <span class="text-slate-500">→ salto de línea</span><br><span class="text-orange-300">"\\t"</span>  <span class="text-slate-500">→ tabulación (Tab)</span><br><span class="text-orange-300">"\\""</span>  <span class="text-slate-500">→ comilla doble</span><br><span class="text-orange-300">"\\\\"</span> <span class="text-slate-500">→ barra invertida</span><br><br><span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Nombre:\\tAna\\nEdad:\\t17"</span>);
</div><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> Con un solo <code class="text-yellow-300">println</code>, imprimir usando secuencias de escape:<br>  <code class="text-yellow-300">Producto:&nbsp;
&nbsp;
&nbsp;
&nbsp;
Yerba<br>Precio:&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
$85.50</code></div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">Producto:&nbsp;&nbsp;&nbsp;&nbsp;Yerba<br>Precio:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$85.50</code></div>`,    starterCode: `public class Main {
\n    public static void main(String[] args) {
\n        // Usar \\t para la tabulación y \\n para el salto de línea\n        System.out.println("Producto:\\tYerba\\nPrecio:\\t$85.50");
\n    }
\n}`,    hint: 'El código ya está escrito. Ejecutar y observar cómo \\t crea una tabulación y \\n salta de línea, todo dentro de un solo String.',  }
,  // ══ TEMA 22: Formato de salida ═══════════════════════════════════════════════
  {
 id: 43, title: "printf y especificadores", subtitle: "%d  %s  %f",    explanation: `<h2 class="text-base font-bold mb-3">Salida formateada con printf</h2><p class="text-slate-300 text-sm mb-4"><code class="text-indigo-400">System.out.printf()</code> permite controlar exactamente cómo se muestra cada valor usando <strong>especificadores de formato</strong>.</p><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-green-300">System</span>.out.<span class="text-blue-300">printf</span>(<span class="text-orange-300">"%s tiene %d años\\n"</span>, <span class="text-orange-300">"Ana"</span>, <span class="text-orange-300">17</span>);
<br><span class="text-slate-500">// Ana tiene 17 años</span><br><br><span class="text-green-300">System</span>.out.<span class="text-blue-300">printf</span>(<span class="text-orange-300">"Precio: $%.2f\\n"</span>, <span class="text-orange-300">89.5</span>);
<br><span class="text-slate-500">// Precio: $89.50</span></div><div class="bg-slate-700/40 rounded-lg p-3 text-sm text-slate-300 mb-3">  📌 <strong>%d</strong> = entero &nbsp;
|&nbsp;
 <strong>%s</strong> = String &nbsp;
|&nbsp;
 <strong>%f</strong> = decimal &nbsp;
|&nbsp;
 <strong>%.2f</strong> = 2 decimales</div><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> Usando printf, imprimir tres líneas con el formato exacto: <code class="text-yellow-300">Producto: %s</code>, <code class="text-yellow-300">Precio: $%.2f</code> y <code class="text-yellow-300">Stock: %d unidades</code>, usando nombre="Aceite", precio=125.0 y stock=48.</div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">Producto: Aceite<br>Precio: $125.00<br>Stock: 48 unidades</code></div>`,    starterCode: `public class Main {
\n    public static void main(String[] args) {
\n        String nombre = "Aceite";
\n        double precio = 125.0;
\n        int stock = 48;
\n        // Usar printf con %s, %.2f y %d\n\n    }
\n}`,    hint: 'Usar printf tres veces o combinar todo en uno: printf("Producto: %s\\nPrecio: $%.2f\\nStock: %d unidades\\n", nombre, precio, stock);',  }
,  {
 id: 44, title: "String.format", subtitle: "Formato en variables",    explanation: `<h2 class="text-base font-bold mb-3">String.format</h2><p class="text-slate-300 text-sm mb-4"><code class="text-indigo-400">String.format()</code> crea un String formateado sin imprimirlo de inmediato. Es útil para construir mensajes antes de mostrarlos.</p><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-green-300">String</span> msg = <span class="text-green-300">String</span>.<span class="text-blue-300">format</span>(<span class="text-orange-300">"Hola, %s! Nota: %.1f"</span>, <span class="text-orange-300">"Luis"</span>, <span class="text-orange-300">8.75</span>);
<br><span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(msg);
<br><span class="text-slate-500">// Hola, Luis! Nota: 8.8</span></div><p class="text-slate-400 text-sm mb-3">Los mismos especificadores de printf funcionan en String.format.</p><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> Construir un String formateado con los datos de un estudiante e imprimirlo:<br>  <code class="text-yellow-300">Estudiante: Valentina — Promedio: 8.75</code></div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">Estudiante: Valentina — Promedio: 8.75</code></div>`,    starterCode: `public class Main {
\n    public static void main(String[] args) {
\n        String nombre = "Valentina";
\n        double promedio = 8.75;
\n        // Usar String.format para construir el mensaje\n        String reporte = String.format("Estudiante: %s — Promedio: %.2f", nombre, promedio);
\n        System.out.println(reporte);
\n    }
\n}`,    hint: 'El código ya está completo. Ejecutar y observar que %.2f muestra el promedio con exactamente 2 decimales.',  }
,  // ══ TEMA 23: Switch ════════════════════════════════════════════════════════════
  {
 id: 45, title: "Sentencia switch", subtitle: "Múltiples casos",    explanation: `<h2 class="text-base font-bold mb-3">La sentencia switch</h2><p class="text-slate-300 text-sm mb-4"><code class="text-indigo-400">switch</code> evalúa una variable y ejecuta el bloque del <code class="text-indigo-400">case</code> que coincida con su valor. Es una alternativa más clara al encadenamiento de <code class="text-indigo-400">else if</code> cuando se comparan valores fijos.</p><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-purple-400">switch</span> (dia) {
<br>&nbsp;
&nbsp;
<span class="text-purple-400">case</span> <span class="text-orange-300">1</span>: <span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Lunes"</span>);
 <span class="text-purple-400">break</span>;
<br>&nbsp;
&nbsp;
<span class="text-purple-400">case</span> <span class="text-orange-300">2</span>: <span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Martes"</span>);
 <span class="text-purple-400">break</span>;
<br>&nbsp;
&nbsp;
<span class="text-purple-400">default</span>: <span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Otro día"</span>);
<br>}
</div><div class="bg-amber-900/30 border border-amber-700/40 rounded-lg p-3 text-sm text-amber-200 mb-3">  ⚠️ Sin <code>break</code> ocurre <strong>fall-through</strong>: se ejecutan todos los case siguientes hasta el final.</div><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> Con <code class="text-indigo-300">int mes = 3</code>, agregar el case faltante al switch para que imprima el nombre del mes correspondiente.</div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">Marzo</code></div>`,    starterCode: `public class Main {
\n    public static void main(String[] args) {
\n        int mes = 3;
\n        switch (mes) {
\n            case 1: System.out.println("Enero");
 break;
\n            case 2: System.out.println("Febrero");
 break;
\n            // Agregar case 3 y default\n\n        }
\n    }
\n}`,    hint: 'Agregar case 3: System.out.println("Marzo"); break; y un default que imprima "Mes no válido".',  }
,  {
 id: 46, title: "Switch con String", subtitle: "Evaluar texto",    explanation: `<h2 class="text-base font-bold mb-3">Switch con String</h2><p class="text-slate-300 text-sm mb-4">Desde Java 7, switch también puede evaluar <code class="text-indigo-400">String</code>. La comparación es sensible a mayúsculas.</p><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-green-300">String</span> color = <span class="text-orange-300">"rojo"</span>;
<br><span class="text-purple-400">switch</span> (color) {
<br>&nbsp;
&nbsp;
<span class="text-purple-400">case</span> <span class="text-orange-300">"rojo"</span>:   <span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"🔴"</span>);
 <span class="text-purple-400">break</span>;
<br>&nbsp;
&nbsp;
<span class="text-purple-400">case</span> <span class="text-orange-300">"verde"</span>:  <span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"🟢"</span>);
 <span class="text-purple-400">break</span>;
<br>&nbsp;
&nbsp;
<span class="text-purple-400">case</span> <span class="text-orange-300">"azul"</span>:   <span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"🔵"</span>);
 <span class="text-purple-400">break</span>;
<br>&nbsp;
&nbsp;
<span class="text-purple-400">default</span>: <span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Color desconocido"</span>);
<br>}
</div><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> Con <code class="text-indigo-300">String turno = "tarde"</code>, agregar los cases faltantes para imprimir <code class="text-yellow-300">Buenos días</code> (mañana), <code class="text-yellow-300">Buenas tardes</code> (tarde) o <code class="text-yellow-300">Buenas noches</code> (noche) según corresponda.</div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">Buenas tardes</code></div>`,    starterCode: `public class Main {
\n    public static void main(String[] args) {
\n        String turno = "tarde";
\n        switch (turno) {
\n            case "mañana": System.out.println("Buenos días");
 break;
\n            // Agregar case "tarde" y case "noche"\n\n            default: System.out.println("Turno no válido");
\n        }
\n    }
\n}`,    hint: 'Agregar case "tarde": System.out.println("Buenas tardes"); break; y case "noche": System.out.println("Buenas noches"); break;',  }
,  // ══ TEMA 24: Operador ternario ════════════════════════════════════════════════
  {
 id: 47, title: "Operador ternario", subtitle: "condicion ? si : no",    explanation: `<h2 class="text-base font-bold mb-3">El operador ternario</h2><p class="text-slate-300 text-sm mb-4">El operador ternario es una forma compacta de escribir un <code class="text-indigo-400">if/else</code> que produce un valor. Su sintaxis es:<br><code class="text-yellow-300">condicion ? valorSiVerdadero : valorSiFalso</code></p><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-purple-400">int</span> edad = <span class="text-orange-300">20</span>;
<br><span class="text-green-300">String</span> estado = (edad >= <span class="text-orange-300">18</span>) ? <span class="text-orange-300">"Mayor"</span> : <span class="text-orange-300">"Menor"</span>;
<br><span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(estado);
 <span class="text-slate-500">// Mayor</span><br><br><span class="text-slate-500">// Equivale a:</span><br><span class="text-purple-400">if</span> (edad >= <span class="text-orange-300">18</span>) estado = <span class="text-orange-300">"Mayor"</span>;
<br><span class="text-purple-400">else</span> estado = <span class="text-orange-300">"Menor"</span>;
</div><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> Con <code class="text-yellow-300">int numero = -7</code>, usar el ternario para determinar si es positivo o no positivo e imprimir:<br>  <code class="text-yellow-300">-7 es: no positivo</code></div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">-7 es: no positivo</code></div>`,    starterCode: `public class Main {
\n    public static void main(String[] args) {
\n        int numero = -7;
\n        // Usar el operador ternario para clasificar el número\n        String tipo = (numero > 0) ? "positivo" : "no positivo";
\n        System.out.println(numero + " es: " + tipo);
\n    }
\n}`,    hint: 'El código ya está completo. Ejecutar y observar cómo el ternario decide el String según la condición numero > 0.',  }
,  {
 id: 48, title: "Ternario en práctica", subtitle: "Simplificar decisiones",    explanation: `<h2 class="text-base font-bold mb-3">Ternario en situaciones reales</h2><p class="text-slate-300 text-sm mb-4">El operador ternario es especialmente útil para asignar valores en una línea o directamente dentro de un <code class="text-indigo-400">println</code>.</p><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-slate-500">// Dentro de println directamente</span><br><span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"¿Par? "</span> + (n % <span class="text-orange-300">2</span> == <span class="text-orange-300">0</span> ? <span class="text-orange-300">"Sí"</span> : <span class="text-orange-300">"No"</span>));
<br><br><span class="text-slate-500">// Para calcular el mayor de dos valores</span><br><span class="text-purple-400">int</span> mayor = (a > b) ? a : b;
</div><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> Con <code class="text-yellow-300">int a = 15</code> y <code class="text-yellow-300">int b = 28</code>, usar el ternario para encontrar el mayor e imprimir:<br>  <code class="text-yellow-300">El mayor es: 28</code></div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">El mayor es: 28</code></div>`,    starterCode: `public class Main {
\n    public static void main(String[] args) {
\n        int a = 15;
\n        int b = 28;
\n        // Usar el ternario para obtener el mayor\n        int mayor = (a > b) ? a : b;
\n        System.out.println("El mayor es: " + mayor);
\n    }
\n}`,    hint: 'El código ya está completo. El ternario (a > b) ? a : b devuelve a si es mayor, o b si no lo es.',  }
,  // ══ TEMA 25: Comparación de Strings ══════════════════════════════════════════
  {
 id: 49, title: "equals() vs ==", subtitle: "Comparar contenido de texto",    explanation: `<h2 class="text-base font-bold mb-3">Comparar Strings correctamente</h2><p class="text-slate-300 text-sm mb-4">Para comparar el <strong>contenido</strong> de dos Strings se usa <code class="text-indigo-400">.equals()</code>. El operador <code class="text-indigo-400">==</code> compara las <strong>referencias</strong> en memoria, no el texto.</p><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-green-300">String</span> a = <span class="text-orange-300">"hola"</span>;
<br><span class="text-green-300">String</span> b = <span class="text-orange-300">"hola"</span>;
<br><br><span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(a.equals(b));
   <span class="text-slate-500">// true ✓</span><br><span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(a.equalsIgnoreCase(<span class="text-orange-300">"HOLA"</span>));
 <span class="text-slate-500">// true</span></div><div class="bg-amber-900/30 border border-amber-700/40 rounded-lg p-3 text-sm text-amber-200 mb-3">  ⚠️ Nunca usar <code>==</code> para comparar el contenido de Strings. Usar siempre <code>.equals()</code>.</div><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> Con <code class="text-yellow-300">String clave = "Java2025"</code> y un intento de acceso, verificar si coincide e imprimir:<br>  <code class="text-yellow-300">Acceso concedido</code> o <code class="text-yellow-300">Acceso denegado</code></div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">Acceso concedido</code></div>`,    starterCode: `public class Main {
\n    public static void main(String[] args) {
\n        String clave = "Java2025";
\n        String intento = "Java2025";
\n        // Comparar usando .equals()\n        if (clave.equals(intento)) {
\n            System.out.println("Acceso concedido");
\n        }
 else {
\n            System.out.println("Acceso denegado");
\n        }
\n    }
\n}`,    hint: 'El código ya usa .equals() correctamente. Probar cambiando el valor de intento para ver "Acceso denegado".',  }
,  {
 id: 50, title: "equalsIgnoreCase y compareTo", subtitle: "Comparaciones avanzadas",    explanation: `<h2 class="text-base font-bold mb-3">Métodos de comparación de Strings</h2><p class="text-slate-300 text-sm mb-3"><code class="text-indigo-400">equalsIgnoreCase()</code> compara ignorando mayúsculas y minúsculas.</p><div class="bg-slate-800/60 rounded-lg p-4 mb-3 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-orange-300">"Uruguay"</span>.equalsIgnoreCase(<span class="text-orange-300">"URUGUAY"</span>) <span class="text-slate-500">// true</span></div><p class="text-slate-300 text-sm mb-3"><code class="text-indigo-400">compareTo()</code> compara lexicográficamente: devuelve 0 si son iguales, negativo si el primero va antes alfabéticamente, positivo si va después.</p><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-orange-300">"Ana"</span>.compareTo(<span class="text-orange-300">"Ana"</span>)  <span class="text-slate-500">// 0 — son iguales</span><br><span class="text-orange-300">"Ana"</span>.compareTo(<span class="text-orange-300">"Luis"</span>) <span class="text-slate-500">// negativo — Ana va antes</span></div><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> Con <code class="text-yellow-300">String pais = "uruguay"</code>, verificar con <code class="text-yellow-300">equalsIgnoreCase</code> si coincide con "Uruguay" e imprimir:<br>  <code class="text-yellow-300">País verificado: true</code></div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">País verificado: true</code></div>`,    starterCode: `public class Main {
\n    public static void main(String[] args) {
\n        String pais = "uruguay";
\n        boolean coincide = pais.equalsIgnoreCase("Uruguay");
\n        System.out.println("País verificado: " + coincide);
\n    }
\n}`,    hint: 'El código ya está completo. equalsIgnoreCase ignora si "uruguay" o "Uruguay" están en distintas capitalización.',  }
,  // ══ TEMA 26: Métodos de String ════════════════════════════════════════════════
  {
 id: 51, title: "length, charAt, substring", subtitle: "Manipular texto",    explanation: `<h2 class="text-base font-bold mb-3">Métodos básicos de String</h2><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-green-300">String</span> s = <span class="text-orange-300">"Montevideo"</span>;
<br><br>s.<span class="text-blue-300">length</span>()        <span class="text-slate-500">// 10 — cantidad de caracteres</span><br>s.<span class="text-blue-300">charAt</span>(<span class="text-orange-300">0</span>)       <span class="text-slate-500">// 'M' — carácter en posición 0</span><br>s.<span class="text-blue-300">substring</span>(<span class="text-orange-300">0</span>, <span class="text-orange-300">5</span>) <span class="text-slate-500">// "Monte" — posiciones 0 a 4</span><br>s.<span class="text-blue-300">indexOf</span>(<span class="text-orange-300">"video"</span>) <span class="text-slate-500">// 5 — posición donde empieza</span></div><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> Con <code class="text-yellow-300">String ciudad = "Montevideo"</code>, imprimir:<br>  <code class="text-yellow-300">Largo: 10<br>Primera letra: M<br>Primeras 5 letras: Monte</code></div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">Largo: 10<br>Primera letra: M<br>Primeras 5 letras: Monte</code></div>`,    starterCode: `public class Main {
\n    public static void main(String[] args) {
\n        String ciudad = "Montevideo";
\n        // Usar length(), charAt(0) y substring(0, 5)\n        System.out.println("Largo: " + ciudad.length());
\n        System.out.println("Primera letra: " + ciudad.charAt(0));
\n        System.out.println("Primeras 5 letras: " + ciudad.substring(0, 5));
\n    }
\n}`,    hint: 'El código ya está completo. Ejecutar para ver cómo length(), charAt() y substring() trabajan sobre el String.',  }
,  {
 id: 52, title: "toUpperCase, contains, replace", subtitle: "Transformar texto",    explanation: `<h2 class="text-base font-bold mb-3">Más métodos de String</h2><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-green-300">String</span> s = <span class="text-orange-300">"hola mundo"</span>;
<br><br>s.<span class="text-blue-300">toUpperCase</span>()           <span class="text-slate-500">// "HOLA MUNDO"</span><br>s.<span class="text-blue-300">toLowerCase</span>()           <span class="text-slate-500">// "hola mundo" (ya en minúsculas)</span><br>s.<span class="text-blue-300">contains</span>(<span class="text-orange-300">"mundo"</span>)       <span class="text-slate-500">// true</span><br>s.<span class="text-blue-300">replace</span>(<span class="text-orange-300">"mundo"</span>, <span class="text-orange-300">"Java"</span>) <span class="text-slate-500">// "hola Java"</span><br>s.<span class="text-blue-300">trim</span>()                   <span class="text-slate-500">// elimina espacios al inicio y fin</span></div><div class="bg-amber-900/30 border border-amber-700/40 rounded-lg p-3 text-sm text-amber-200 mb-3">  💡 Los Strings son <strong>inmutables</strong>: estos métodos devuelven un nuevo String, no modifican el original.</div><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> Con <code class="text-yellow-300">String frase = "java es genial"</code>, imprimir la frase en mayúsculas y luego reemplazar "genial" por "poderoso":<br>  <code class="text-yellow-300">JAVA ES GENIAL<br>java es poderoso</code></div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">JAVA ES GENIAL<br>java es poderoso</code></div>`,    starterCode: `public class Main {
\n    public static void main(String[] args) {
\n        String frase = "java es genial";
\n        // Imprimir en mayúsculas\n        System.out.println(frase.toUpperCase());
\n        // Reemplazar "genial" por "poderoso" e imprimir\n        System.out.println(frase.replace("genial", "poderoso"));
\n    }
\n}`,    hint: 'El código ya está completo. Observar que frase.toUpperCase() y frase.replace() devuelven nuevos Strings sin modificar la variable frase.',  }
,  // ══ TEMA 27: Break y Continue ═════════════════════════════════════════════════
  {
 id: 53, title: "Sentencia break", subtitle: "Salir de un bucle",    explanation: `<h2 class="text-base font-bold mb-3">La sentencia break</h2><p class="text-slate-300 text-sm mb-4"><code class="text-indigo-400">break</code> termina inmediatamente el bucle en el que se encuentra. La ejecución continúa con el código que está después del cierre del bucle.</p><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-purple-400">for</span> (<span class="text-purple-400">int</span> i = <span class="text-orange-300">1</span>;
 i <= <span class="text-orange-300">10</span>;
 i++) {
<br>&nbsp;
&nbsp;
<span class="text-purple-400">if</span> (i == <span class="text-orange-300">5</span>) <span class="text-purple-400">break</span>;
 <span class="text-slate-500">// sale al llegar a 5</span><br>&nbsp;
&nbsp;
<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(i);
<br>}
<br><span class="text-slate-500">// Imprime: 1 2 3 4</span></div><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> Buscar el primer número divisible por 7 entre 1 y 50 e imprimir cuál es:<br>  <code class="text-yellow-300">Primer múltiplo de 7: 7</code></div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">Primer múltiplo de 7: 7</code></div>`,    starterCode: `public class Main {
\n    public static void main(String[] args) {
\n        for (int i = 1;
 i <= 50;
 i++) {
\n            if (i % 7 == 0) {
\n                System.out.println("Primer múltiplo de 7: " + i);
\n                break;
 // Salir después de encontrarlo\n            }
\n        }
\n    }
\n}`,    hint: 'El código ya está completo. break sale del bucle en cuanto encuentra el primer múltiplo de 7.',  }
,  {
 id: 54, title: "Sentencia continue", subtitle: "Saltar una iteración",    explanation: `<h2 class="text-base font-bold mb-3">La sentencia continue</h2><p class="text-slate-300 text-sm mb-4"><code class="text-indigo-400">continue</code> salta el resto del cuerpo de la iteración actual y pasa directamente a la siguiente. No termina el bucle, solo omite una vuelta.</p><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-purple-400">for</span> (<span class="text-purple-400">int</span> i = <span class="text-orange-300">1</span>;
 i <= <span class="text-orange-300">5</span>;
 i++) {
<br>&nbsp;
&nbsp;
<span class="text-purple-400">if</span> (i == <span class="text-orange-300">3</span>) <span class="text-purple-400">continue</span>;
 <span class="text-slate-500">// salta el 3</span><br>&nbsp;
&nbsp;
<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(i);
<br>}
<br><span class="text-slate-500">// Imprime: 1 2 4 5</span></div><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> Imprimir los números del 1 al 10 en una sola línea, saltando los múltiplos de 3 con continue.</div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">1 2 4 5 7 8 10</code></div>`,    starterCode: `public class Main {
\n    public static void main(String[] args) {
\n        for (int i = 1;
 i <= 10;
 i++) {
\n            // Si i es múltiplo de 3, saltar con continue\n\n            System.out.print(i + " ");
\n        }
\n    }
\n}`,    hint: 'Agregar if (i % 3 == 0) continue; antes del println. Eso saltará la impresión cuando i sea 3, 6 o 9.',  }
,  // ══ TEMA 28: Bucles anidados ══════════════════════════════════════════════════
  {
 id: 55, title: "Bucles anidados", subtitle: "for dentro de for",    explanation: `<h2 class="text-base font-bold mb-3">Bucles anidados</h2><p class="text-slate-300 text-sm mb-4">Un bucle anidado es un bucle dentro de otro. El bucle <strong>interno</strong> se ejecuta completamente por cada iteración del bucle <strong>externo</strong>.</p><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-purple-400">for</span> (<span class="text-purple-400">int</span> fila = <span class="text-orange-300">1</span>;
 fila <= <span class="text-orange-300">3</span>;
 fila++) {
<br>&nbsp;
&nbsp;
<span class="text-purple-400">for</span> (<span class="text-purple-400">int</span> col = <span class="text-orange-300">1</span>;
 col <= <span class="text-orange-300">3</span>;
 col++) {
<br>&nbsp;
&nbsp;
&nbsp;
&nbsp;
<span class="text-green-300">System</span>.out.<span class="text-blue-300">print</span>(fila + <span class="text-orange-300">","</span> + col + <span class="text-orange-300">" "</span>);
<br>&nbsp;
&nbsp;
}
<br>&nbsp;
&nbsp;
<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>();
<br>}
<span class="text-slate-500"> // 1,1 1,2 1,3 / 2,1 2,2 2,3 / 3,1 3,2 3,3</span></div><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> El código ya está completo.<br>Ejecutar y verificar que imprime las tablas de multiplicar del 2 y del 3 (del ×1 al ×5).</div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">2 x 1 = 2<br>2 x 2 = 4<br>2 x 3 = 6<br>2 x 4 = 8<br>2 x 5 = 10<br>3 x 1 = 3<br>3 x 2 = 6<br>3 x 3 = 9<br>3 x 4 = 12<br>3 x 5 = 15</code></div>`,    starterCode: `public class Main {
\n    public static void main(String[] args) {
\n        // Bucle externo: tabla (2 y 3)\n        for (int tabla = 2;
 tabla <= 3;
 tabla++) {
\n            // Bucle interno: multiplicadores del 1 al 5\n            for (int i = 1;
 i <= 5;
 i++) {
\n                System.out.println(tabla + " x " + i + " = " + (tabla * i));
\n            }
\n        }
\n    }
\n}`,    hint: 'El código ya está completo. El bucle externo recorre las tablas (2 y 3) y el interno los multiplicadores (1 a 5).',  }
,  {
 id: 56, title: "Patrón de asteriscos", subtitle: "Triángulo con bucles anidados",    explanation: `<h2 class="text-base font-bold mb-3">Patrones con bucles anidados</h2><p class="text-slate-300 text-sm mb-4">Los bucles anidados son la herramienta estándar para imprimir patrones de filas y columnas. El bucle externo controla las filas y el interno la cantidad de caracteres en cada fila.</p><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-purple-400">for</span> (<span class="text-purple-400">int</span> i = <span class="text-orange-300">1</span>;
 i <= <span class="text-orange-300">4</span>;
 i++) {
<br>&nbsp;
&nbsp;
<span class="text-purple-400">for</span> (<span class="text-purple-400">int</span> j = <span class="text-orange-300">1</span>;
 j <= i;
 j++) {
<br>&nbsp;
&nbsp;
&nbsp;
&nbsp;
<span class="text-green-300">System</span>.out.<span class="text-blue-300">print</span>(<span class="text-orange-300">"* "</span>);
<br>&nbsp;
&nbsp;
}
<br>&nbsp;
&nbsp;
<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>();
<br>}
<br><span class="text-slate-500">// *<br>// * *<br>// * * *<br>// * * * *</span></div><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> Imprimir un triángulo de asteriscos de 5 filas: la fila 1 tiene 1 asterisco, la fila 2 tiene 2, y así sucesivamente hasta la fila 5.<br>Cada asterisco separado por un espacio.</div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">*<br>* *<br>* * *<br>* * * *<br>* * * * *</code></div>`,    starterCode: `public class Main {
\n    public static void main(String[] args) {
\n        // Bucle externo: 5 filas\n        for (int i = 1;
 i <= 5;
 i++) {
\n            // Bucle interno: i asteriscos por fila\n\n            System.out.println();
 // salto de línea al terminar cada fila\n        }
\n    }
\n}`,    hint: 'El bucle interno va de j=1 hasta j<=i: en la fila 1 imprime 1 *, en la fila 2 imprime 2 *, etc. Usar print("* ") dentro del bucle interno.',  }
,  // ══ TEMA 29: Sobrecarga de métodos ═══════════════════════════════════════════
  {
 id: 57, title: "Sobrecarga de métodos", subtitle: "Mismo nombre, distintos parámetros",    explanation: `<h2 class="text-base font-bold mb-3">Sobrecarga de métodos</h2><p class="text-slate-300 text-sm mb-4">La <strong>sobrecarga</strong> permite tener varios métodos con el <strong>mismo nombre</strong> siempre que difieran en el número o tipo de sus parámetros. Java decide cuál usar según los argumentos de la llamada.</p><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-purple-400">static int</span> <span class="text-blue-300">sumar</span>(<span class="text-purple-400">int</span> a, <span class="text-purple-400">int</span> b) {
<br>&nbsp;
&nbsp;
<span class="text-purple-400">return</span> a + b;
<br>}
<br><span class="text-purple-400">static double</span> <span class="text-blue-300">sumar</span>(<span class="text-purple-400">double</span> a, <span class="text-purple-400">double</span> b) {
<br>&nbsp;
&nbsp;
<span class="text-purple-400">return</span> a + b;
<br>}
<br><span class="text-slate-500">// sumar(3, 4)      → usa la versión int → 7</span><br><span class="text-slate-500">// sumar(3.5, 2.1)  → usa la versión double → 5.6</span></div><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> El código ya tiene dos versiones de <code class="text-yellow-300">describir</code>.<br>Ejecutar y ver cómo Java elige cuál usar:<br>  <code class="text-yellow-300">Número: 42<br>Texto: Hola</code></div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">Número: 42<br>Texto: Hola</code></div>`,    starterCode: `public class Main {
\n\n    static void describir(int n) {
\n        System.out.println("Número: " + n);
\n    }
\n\n    static void describir(String s) {
\n        System.out.println("Texto: " + s);
\n    }
\n\n    public static void main(String[] args) {
\n        describir(42);
     // llama a la versión int\n        describir("Hola");
 // llama a la versión String\n    }
\n}`,    hint: 'El código ya está completo. Ejecutar y observar cómo Java selecciona automáticamente la versión correcta según el tipo del argumento.',  }
,  {
 id: 58, title: "Sobrecarga con distintos parámetros", subtitle: "Flexibilidad en métodos",    explanation: `<h2 class="text-base font-bold mb-3">Sobrecarga con distinta cantidad de parámetros</h2><p class="text-slate-300 text-sm mb-4">También se puede sobrecargar cambiando la <strong>cantidad</strong> de parámetros. Esto es útil para métodos que pueden funcionar con más o menos datos.</p><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-purple-400">static double</span> <span class="text-blue-300">promedio</span>(<span class="text-purple-400">double</span> a, <span class="text-purple-400">double</span> b) {
<br>&nbsp;
&nbsp;
<span class="text-purple-400">return</span> (a + b) / <span class="text-orange-300">2</span>;
<br>}
<br><span class="text-purple-400">static double</span> <span class="text-blue-300">promedio</span>(<span class="text-purple-400">double</span> a, <span class="text-purple-400">double</span> b, <span class="text-purple-400">double</span> c) {
<br>&nbsp;
&nbsp;
<span class="text-purple-400">return</span> (a + b + c) / <span class="text-orange-300">3</span>;
<br>}
</div><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> Calcular el promedio de 2 notas y de 3 notas usando el mismo nombre de método e imprimir:<br>  <code class="text-yellow-300">Promedio de 2: 7.5<br>Promedio de 3: 8.0</code></div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">Promedio de 2: 7.5<br>Promedio de 3: 8.0</code></div>`,    starterCode: `public class Main {
\n\n    static double promedio(double a, double b) {
\n        return (a + b) / 2;
\n    }
\n\n    static double promedio(double a, double b, double c) {
\n        return (a + b + c) / 3;
\n    }
\n\n    public static void main(String[] args) {
\n        System.out.println("Promedio de 2: " + promedio(6, 9));
\n        System.out.println("Promedio de 3: " + promedio(7, 8, 9));
\n    }
\n}`,    hint: 'El código ya está completo. Ejecutar y observar cómo se llama al mismo nombre promedio con 2 o 3 argumentos y Java elige la versión correcta.',  }
,  // ══ TEMA 30: Proyecto Calculadora ════════════════════════════════════════════
  {
 id: 59, title: "Calculadora básica", subtitle: "Scanner + operaciones",    explanation: `<h2 class="text-base font-bold mb-3">Proyecto: Calculadora básica</h2><p class="text-slate-300 text-sm mb-4">Integrar Scanner, variables, operaciones aritméticas y salida formateada para construir una calculadora simple de dos números.</p><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-slate-500">// Flujo del programa:</span><br><span class="text-slate-500">// 1. Leer dos números</span><br><span class="text-slate-500">// 2. Calcular suma, resta, producto, cociente</span><br><span class="text-slate-500">// 3. Imprimir resultados formateados</span></div><div class="bg-slate-700/40 rounded-lg p-3 text-sm text-slate-300 mb-3">  💡 En la pestaña <strong>I/O</strong> de OneCompiler ingresar dos números, uno por línea: <code>10</code> y <code>4</code>.</div><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> Completar el programa para que imprima con los datos 10 y 4:<br>  <code class="text-yellow-300">Suma: 14<br>Resta: 6<br>Producto: 40<br>Cociente: 2.50</code></div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">Suma: 14<br>Resta: 6<br>Producto: 40<br>Cociente: 2.50</code></div>`,    starterCode: `import java.util.Scanner;
\n\npublic class Main {
\n    public static void main(String[] args) {
\n        Scanner sc = new Scanner(System.in);
\n        double a = sc.nextDouble();
\n        double b = sc.nextDouble();
\n        System.out.println("Suma: " + (int)(a + b));
\n        System.out.println("Resta: " + (int)(a - b));
\n        System.out.println("Producto: " + (int)(a * b));
\n        System.out.printf("Cociente: %.2f%n", a / b);
\n    }
\n}`,    hint: 'El código ya está casi completo. Ingresar 10 y 4 en la pestaña I/O. El cociente usa printf con %.2f para mostrar 2 decimales.',  }
,  {
 id: 60, title: "Calculadora con switch", subtitle: "Elegir operación",    explanation: `<h2 class="text-base font-bold mb-3">Calculadora con menú de operación</h2><p class="text-slate-300 text-sm mb-4">Una calculadora más completa permite al usuario elegir la operación. Se leen dos números y un operador, y se usa <code class="text-indigo-400">switch</code> para ejecutar la operación correspondiente.</p><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-slate-500">// Entrada (pestaña I/O):</span><br><span class="text-slate-500">// 15</span><br><span class="text-slate-500">// 4</span><br><span class="text-slate-500">// *</span><br><br><span class="text-slate-500">// Salida esperada: 15.0 * 4.0 = 60.00</span></div><div class="bg-slate-700/40 rounded-lg p-3 text-sm text-slate-300 mb-3">  💡 En la pestaña <strong>I/O</strong> ingresar: primer número, segundo número, operador (cada uno en una línea).</div><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> El código ya está completo.<br>Ejecutar y probar distintas combinaciones (por ejemplo <code class="text-yellow-300">10 4 +</code>, <code class="text-yellow-300">15 4 *</code>, <code class="text-yellow-300">7 0 /</code> para ver el mensaje de error de división por cero).</div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">15.0 * 4.0 = 60.00</code> <span class="text-emerald-300/70 text-xs">(ejemplo — el valor exacto depende de la entrada o del azar)</span></div>`,    starterCode: `import java.util.Scanner;
\n\npublic class Main {
\n    public static void main(String[] args) {
\n        Scanner sc = new Scanner(System.in);
\n        double a = sc.nextDouble();
\n        double b = sc.nextDouble();
\n        String op = sc.next();
\n        double resultado = 0;
\n        switch (op) {
\n            case "+": resultado = a + b;
 break;
\n            case "-": resultado = a - b;
 break;
\n            case "*": resultado = a * b;
 break;
 // completado\n            case "/":\n                if (b != 0) resultado = a / b;
\n                else {
 System.out.println("Error: división por cero");
 return;
 }
\n                break;
\n            default: System.out.println("Operador no válido");
 return;
\n        }
\n        System.out.printf("%.1f %s %.1f = %.2f%n", a, op, b, resultado);
\n    }
\n}`,    hint: 'El código ya está completo. Probar con distintas combinaciones: 10 4 + / 15 3 * / 7 0 / (para ver el error de división por cero).',  }
,  // ══ TEMA 31: Desafíos Finales ═════════════════════════════════════════════════
  {
 id: 61, title: "Patrón de números", subtitle: "Triángulo numérico",    explanation: `<h2 class="text-base font-bold mb-3">Desafío: Patrón de números</h2><p class="text-slate-300 text-sm mb-4">Usar bucles anidados para imprimir un triángulo donde cada fila muestra los números del 1 hasta el número de la fila.</p><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-slate-500">// Salida esperada:</span><br><span class="text-orange-300">1</span><br><span class="text-orange-300">1 2</span><br><span class="text-orange-300">1 2 3</span><br><span class="text-orange-300">1 2 3 4</span><br><span class="text-orange-300">1 2 3 4 5</span></div><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> El código ya está completo.<br>Ejecutar y verificar que imprime el triángulo numérico de 5 filas (cada fila del 1 hasta el número de fila).</div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">1<br>1 2<br>1 2 3<br>1 2 3 4<br>1 2 3 4 5</code></div>`,    starterCode: `public class Main {
\n    public static void main(String[] args) {
\n        // Bucle externo: filas del 1 al 5\n        for (int fila = 1;
 fila <= 5;
 fila++) {
\n            // Bucle interno: números del 1 al número de fila\n            for (int j = 1;
 j <= fila;
 j++) {
\n                System.out.print(j + " ");
\n            }
\n            System.out.println();
\n        }
\n    }
\n}`,    hint: 'El código ya está completo. El bucle interno va de j=1 hasta j<=fila, imprimiendo el valor de j en cada iteración.',  }
,  {
 id: 62, title: "Calculadora de notas", subtitle: "Promedio y clasificación",    explanation: `<h2 class="text-base font-bold mb-3">Desafío: Calculadora de notas</h2><p class="text-slate-300 text-sm mb-4">Integrar arrays, bucles, cálculo de promedio y clasificación con if/else para construir un sistema de evaluación simple.</p><div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7"><div class="text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-semibold not-italic">Ejemplo</div><span class="text-slate-500">// Dados 5 notas, calcular el promedio</span><br><span class="text-slate-500">// y clasificar: Destacado / Logrado / En proceso</span><br><br><span class="text-purple-400">int</span>[] notas = {
<span class="text-orange-300">85</span>, <span class="text-orange-300">92</span>, <span class="text-orange-300">78</span>, <span class="text-orange-300">90</span>, <span class="text-orange-300">88</span>}
;
<br><span class="text-slate-500">// Promedio: 86.6 → Destacado</span></div><div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">  <span class="font-bold">🎯 Tarea:</span> El código ya está completo.<br>Ejecutar y verificar que calcula correctamente el promedio de las 5 notas y la clasificación correspondiente.</div><div class="bg-emerald-900/30 border border-emerald-700/40 rounded-lg p-3 text-sm text-emerald-200 mt-3">  <span class="font-bold">📤 Salida esperada:</span><br>  <code class="text-emerald-100">Promedio: 86.60<br>Clasificación: Logrado</code></div>`,    starterCode: `public class Main {
\n    public static void main(String[] args) {
\n        int[] notas = {
85, 92, 78, 90, 88}
;
\n        int suma = 0;
\n        // Sumar todas las notas con for-each\n        for (int n : notas) {
\n            suma += n;
\n        }
\n        double promedio = (double) suma / notas.length;
\n        System.out.printf("Promedio: %.2f%n", promedio);
\n        // Clasificar según el promedio\n        String clasificacion;
\n        if (promedio >= 90) clasificacion = "Destacado";
\n        else if (promedio >= 70) clasificacion = "Logrado";
\n        else clasificacion = "En proceso";
\n        System.out.println("Clasificación: " + clasificacion);
\n    }
\n}`,    hint: 'El código ya está completo. El cast (double) antes de suma fuerza la división decimal. Probar cambiando las notas para ver cómo cambia la clasificación.',  }
,];
// ─── LESSONS CON VERIFICACIÓN (IDs que tienen output esperado en el servidor) ─
const VERIFIABLE_LESSONS = new Set([  1,2,3,4,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,  27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,  47,48,49,50,51,52,53,54,55,56,57,58,61,62]);
// ─── AUTH ─────────────────────────────────────────────────────────────────────
let studentToken = localStorage.getItem('jj-student-token');
let currentStudent = JSON.parse(localStorage.getItem('jj-student-info') || 'null');
let teacherToken = null;
// ─── STATE ────────────────────────────────────────────────────────────────────
let currentLesson = null;
let lastOutput = '';
let codeEditor = null;
// quiz state
let currentQuiz = null;
let currentQIndex = 0;
let quizScore = 0;
let quizAnswered = false;
let quizSessionAnswers = [];
let allowQuizPdf = false;
const quizDone = new Set();
const completedLessons = new Set();
// accordion state (persisted locally);
// enabledTopics se carga desde API
const expandedTopics = new Set(JSON.parse(localStorage.getItem('jj-expanded') || '[]'));
const enabledTopics  = new Set();
function saveAccordionState() {
  localStorage.setItem('jj-expanded', JSON.stringify([...expandedTopics]));
}
async function apiPost(url, body, token) {
  const res = await fetch(url, {
    method: 'POST',    headers: {
 'Content-Type': 'application/json', ...(token ? {
 'Authorization': 'Bearer ' + token }
 : {
}
) }
,    body: JSON.stringify(body)  }
);
  return res;
}
async function apiGet(url, token) {
  const res = await fetch(url, {
    headers: token ? {
 'Authorization': 'Bearer ' + token }
 : {
}
  }
);
  return res;
}
async function apiPut(url, body, token) {
  const res = await fetch(url, {
    method: 'PUT',    headers: {
 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token }
,    body: JSON.stringify(body)  }
);
  return res;
}
function isTopicCompleted(topicId) {
  const topic = TOPICS.find(t => t.id === topicId);
  if (!topic) return false;
  const lessonsOk = topic.lessons.every(lid =>    completedLessons.has(lid) || !VERIFIABLE_LESSONS.has(lid)  );
  const quizOk = quizDone.has(topicId) || !QUIZZES_CLIENT.find(q => q.topicId === topicId);
  return lessonsOk && quizOk;
}
function isTopicAccessible(topicId) {
  if (!enabledTopics.has(topicId)) return false;
  const enabledList = TOPICS.filter(t => enabledTopics.has(t.id));
  for (const t of enabledList) {
    if (t.id === topicId) return true;
    if (!isTopicCompleted(t.id)) return false;
  }
  return true;
}
// ─── TEMA (claro / oscuro) ──────────────────────────────────────────────────
function applyTheme(theme) {
  if (theme === 'light') document.documentElement.setAttribute('data-theme', 'light');
  else document.documentElement.removeAttribute('data-theme');
  const btn = document.getElementById('theme-switch');
  if (!btn) return;
  btn.setAttribute('aria-pressed', theme === 'light' ? 'true' : 'false');
  btn.title = theme === 'light' ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro';
  const knob = btn.querySelector('.knob');
  if (knob) knob.textContent = theme === 'light' ? '🌙' : '☀️';
}
function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  const next = current === 'light' ? 'dark' : 'light';
  try { localStorage.setItem('jj-theme', next); } catch (e) {}
  applyTheme(next);
}
// ─── PANELES REDIMENSIONABLES ───────────────────────────────────────────────
function startPanelDrag(handle, onMove, cursorClass) {
  if (!handle) return;
  handle.addEventListener('mousedown', (e) => {
    e.preventDefault();
    handle.classList.add('dragging');
    document.body.classList.add(cursorClass);
    const move = (ev) => onMove(ev);
    const up = () => {
      handle.classList.remove('dragging');
      document.body.classList.remove(cursorClass);
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseup', up);
    };
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', up);
  });
}
function setupResizablePanels() {
  const explanationPanel = document.getElementById('explanation-panel');
  const panelResizeH = document.getElementById('panel-resize-h');
  const outputPanel = document.getElementById('output-panel');
  const dragHandle = document.getElementById('drag-handle');
  if (!explanationPanel || !outputPanel) return;

  const savedWidth = parseInt(localStorage.getItem('jj-explanation-width'), 10);
  if (savedWidth) explanationPanel.style.width = savedWidth + 'px';
  const savedHeight = parseInt(localStorage.getItem('jj-output-height'), 10);
  if (savedHeight) outputPanel.style.height = savedHeight + 'px';

  startPanelDrag(panelResizeH, (e) => {
    const rect = explanationPanel.parentElement.getBoundingClientRect();
    let w = e.clientX - rect.left;
    w = Math.max(220, Math.min(w, rect.width - 320));
    explanationPanel.style.width = w + 'px';
    localStorage.setItem('jj-explanation-width', w);
    if (codeEditor) codeEditor.refresh();
  }, 'resizing-h');

  startPanelDrag(dragHandle, (e) => {
    const rect = outputPanel.parentElement.getBoundingClientRect();
    let h = rect.bottom - e.clientY;
    h = Math.max(60, Math.min(h, rect.height - 150));
    outputPanel.style.height = h + 'px';
    localStorage.setItem('jj-output-height', h);
    if (codeEditor) codeEditor.refresh();
  }, 'resizing-v');
}
// ─── INIT ─────────────────────────────────────────────────────────────────────
async function init() {
  applyTheme(document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark');
  setupResizablePanels();
  codeEditor = CodeMirror(document.getElementById('editor-wrapper'), {
    mode: 'text/x-java',
    theme: 'dracula',
    lineNumbers: true,
    indentUnit: 4,
    tabSize: 4,
    indentWithTabs: false,
    autoCloseBrackets: true,
    matchBrackets: true,
    lineWrapping: false,
    extraKeys: { Tab: cm => cm.execCommand('insertSoftTab') }
  });
  codeEditor.on('change', saveCurrentCode);

  if (!studentToken) {
    showStudentLogin();
    return;
  }
  await loadAppData();
}
async function loadAppData() {
  try {
    const [configRes, progressRes] = await Promise.all([      apiGet('/api/config'),      apiGet('/api/student/progress', studentToken)    ]);
    if (progressRes.status === 401) {
      // Token expirado      logoutStudent();
      return;
    }
    const config = await configRes.json();
    const progress = await progressRes.json();
    config.enabledTopics.forEach(id => enabledTopics.add(id));
    allowQuizPdf = config.allowQuizPdf || false;
    progress.completedLessons.forEach(id => completedLessons.add(id));
    progress.completedQuizzes.forEach(q => quizDone.add(q.topicId));
    updateStudentBadge();
    renderSidebar();
    selectLesson(LESSONS[0].id);
  }
 catch (err) {
    console.error('Error cargando datos:', err);
  }
}
function updateStudentBadge() {
  if (!currentStudent) return;
  const badge = document.getElementById('student-badge');
  if (badge) badge.textContent = `${
currentStudent.nombre}
 ${
currentStudent.apellido}`;
}
// ─── SIDEBAR ──────────────────────────────────────────────────────────────────
function toggleExpand(topicId) {
  if (expandedTopics.has(topicId)) expandedTopics.delete(topicId);
  else expandedTopics.add(topicId);
  saveAccordionState();
  renderSidebar();
}
// ─── STUDENT LOGIN ────────────────────────────────────────────────────────────
function showStudentLogin() {
  document.getElementById('student-login').style.display = 'flex';
  setTimeout(() => document.getElementById('sl-nombre').focus(), 50);
}
async function submitStudentLogin() {
  const nombre   = document.getElementById('sl-nombre').value.trim();
  const apellido = document.getElementById('sl-apellido').value.trim();
  const password = document.getElementById('sl-password').value;
  const errEl    = document.getElementById('sl-error');
  errEl.style.display = 'none';
  if (!nombre || !apellido || !password) {
    errEl.textContent = 'Completar todos los campos.';
    errEl.style.display = 'block';
    return;
  }
  try {
    const res = await apiPost('/api/auth/student', {
 nombre, apellido, password }
);
    const data = await res.json();
    if (!res.ok) {
      errEl.textContent = data.error || 'Error al iniciar sesión.';
      errEl.style.display = 'block';
      return;
    }
    studentToken = data.token;
    currentStudent = data.student;
    localStorage.setItem('jj-student-token', studentToken);
    localStorage.setItem('jj-student-info', JSON.stringify(currentStudent));
    document.getElementById('student-login').style.display = 'none';
    await loadAppData();
  }
 catch {
    errEl.textContent = 'Error de conexión. Intentar nuevamente.';
    errEl.style.display = 'block';
  }
}
function logoutStudent() {
  localStorage.removeItem('jj-student-token');
  localStorage.removeItem('jj-student-info');
  studentToken = null;
  currentStudent = null;
  completedLessons.clear();
  quizDone.clear();
  enabledTopics.clear();
  showStudentLogin();
}
// ─── TEACHER PANEL ────────────────────────────────────────────────────────────
function openTeacherLogin() {
  document.getElementById('teacher-login').style.display = 'flex';
  document.getElementById('teacher-pw-error').style.display = 'none';
  document.getElementById('teacher-pw-input').value = '';
  document.getElementById('teacher-nombre-input').value = '';
  document.getElementById('teacher-apellido-input').value = '';
  setTimeout(() => document.getElementById('teacher-nombre-input').focus(), 50);
}
async function submitTeacherLogin() {
  const nombre = document.getElementById('teacher-nombre-input').value.trim();
  const apellido = document.getElementById('teacher-apellido-input').value.trim();
  const pw = document.getElementById('teacher-pw-input').value;
  try {
    const res = await apiPost('/api/auth/teacher', { nombre, apellido, password: pw });
    const data = await res.json();
    if (!res.ok) {
      document.getElementById('teacher-pw-error').style.display = 'block';
      return;
    }
    teacherToken = data.token;
    document.getElementById('teacher-login').style.display = 'none';
    openTeacherPanel();
  }
 catch {
    document.getElementById('teacher-pw-error').style.display = 'block';
  }
}
let _allStudents = [];
function openTeacherPanel() {
  document.getElementById('student-login').style.display = 'none';
  document.getElementById('teacher-login').style.display = 'none';
  renderTeacherPanel();
  switchTab('temas');
  renderPdfToggle();
  loadStudents();
  document.getElementById('teacher-panel').style.display = 'flex';
}
function switchTab(tab) {
  ['temas','estudiantes','progreso'].forEach(t => {
    document.getElementById(`tp-tab-${
t}`).style.display = t === tab ? 'block' : 'none';
    const btn = document.getElementById(`tab-${
t}`);
    btn.style.borderBottomColor = t === tab ? 'var(--accent)' : 'transparent';
    btn.style.color = t === tab ? 'var(--accent-soft)' : 'var(--text-faintest)';
  }
);
  if (tab === 'progreso' || tab === 'estudiantes') loadStudents();
}
function renderTeacherPanel() {
  const list = document.getElementById('tp-topic-list');
  list.innerHTML = '';
  TOPICS.forEach((topic, topicIdx) => {
    const enabled = enabledTopics.has(topic.id);
    const row = document.createElement('div');
    row.style.cssText = 'display:flex;align-items:center;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--border);';
    row.innerHTML = `      <span style="font-size:13px;
color:${
enabled ? 'var(--text)' : 'var(--text-faintest)'}
;
">${
topicIdx + 1}
. ${
topic.label}
</span>      <button onclick="toggleTopicFromPanel(${
topic.id}
)" style="        width:42px;
height:24px;
border-radius:12px;
border:none;
cursor:pointer;
        background:${
enabled ? 'var(--accent)' : 'var(--toggle-off-bg)'}
;
position:relative;
transition:background .2s;
flex-shrink:0;
">        <span style="position:absolute;
top:4px;
${
enabled ? 'right:4px' : 'left:4px'}
;
          width:16px;
height:16px;
background:var(--toggle-knob);
border-radius:50%;
transition:all .2s;
"></span>      </button>`;
    list.appendChild(row);
  }
);
}
async function saveEnabledTopics() {
  await apiPut('/api/teacher/topics', {
 enabledTopics: [...enabledTopics] }
, teacherToken);
}
async function toggleTopicFromPanel(topicId) {
  if (enabledTopics.has(topicId)) enabledTopics.delete(topicId);
  else enabledTopics.add(topicId);
  await saveEnabledTopics();
  renderTeacherPanel();
  renderSidebar();
}
async function enableAllTopics() {
  TOPICS.forEach(t => enabledTopics.add(t.id));
  await saveEnabledTopics();
  renderTeacherPanel();
  renderSidebar();
}
async function disableAllTopics() {
  enabledTopics.clear();
  await saveEnabledTopics();
  renderTeacherPanel();
  renderSidebar();
}
function closeTeacherPanel() {
  document.getElementById('teacher-panel').style.display = 'none';
}
// ─── GESTIÓN DE ESTUDIANTES ───────────────────────────────────────────────────
let _resetStudentId = null;
async function loadStudents() {
  try {
    const res = await apiGet('/api/teacher/students', teacherToken);
    if (!res.ok) { console.error('loadStudents error', res.status); return; }
    _allStudents = await res.json();
    renderStudentList();
    renderProgressTable();
  } catch (e) { console.error('loadStudents exception', e); }
}
function renderStudentList() {
  const list = document.getElementById('tp-student-list');
  if (!list) return;
  list.innerHTML = '';
  if (!_allStudents.length) {
    list.innerHTML = '<div style="font-size:12px; color:var(--text-faintest); text-align:center; padding:12px; ">Sin estudiantes registrados</div>';
    return;
  }
  _allStudents.forEach(s => {
    const row = document.createElement('div');
    row.style.cssText = 'display:flex; align-items:center; justify-content:space-between; padding:9px 12px; background:var(--bg); border:1px solid var(--border); border-radius:8px; gap:8px; ';
    row.innerHTML = `      <div style="flex:1;
min-width:0;
">        <div style="font-size:13px;
color:var(--text);
font-weight:500;
">${
s.nombre}
 ${
s.apellido}
</div>        <div style="font-size:11px;
color:var(--text-faintest);
">${
s.grupo}
 · ${
s.lessons_completed}
 lecciones · ${
s.quizzes_completed}
 quizzes</div>      </div>      <button onclick="openResetModal(${
s.id}
,'${ s.nombre} ${ s.apellido} ')" title="Resetear contraseña"        style="background:none;
border:1px solid var(--border-2);
border-radius:6px;
color:var(--text-muted);
cursor:pointer;
font-size:12px;
padding:5px 8px;
">🔑</button>      <button onclick="deleteStudent(${
s.id}
,'${ s.nombre} ${ s.apellido} ')" title="Eliminar"        style="background:none;
border:1px solid var(--border-2);
border-radius:6px;
color:var(--danger);
cursor:pointer;
font-size:12px;
padding:5px 8px;
">✕</button>`;
    list.appendChild(row);
  }
);
}
function renderProgressTable() {
  const filterEl = document.getElementById('tp-filter-grupo');
  const tbody    = document.getElementById('tp-progress-body');
  const empty    = document.getElementById('tp-progress-empty');
  if (!filterEl || !tbody) return;
  // Actualizar opciones del filtro
  const grupos = [...new Set(_allStudents.map(s => s.grupo))].sort();
  const current = filterEl.value;
  filterEl.innerHTML = '<option value="">Todos</option>' + grupos.map(g => `<option value="${g}"${g === current ? ' selected' : ''}>${g}</option>`).join('');
  const filtered = current ? _allStudents.filter(s => s.grupo === current) : _allStudents;
  tbody.innerHTML = '';
  if (!filtered.length) {
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';
  const totalLessons = VERIFIABLE_LESSONS.size;
  const totalQuizzes = QUIZZES_CLIENT.length;
  filtered.forEach(s => {
    const lastAccess = s.last_access      ? new Date(s.last_access).toLocaleDateString('es-UY', {
 day:'2-digit', month:'2-digit', year:'2-digit' }
)      : '—';
    const lessPct = Math.round(s.lessons_completed / totalLessons * 100);
    const tr = document.createElement('tr');
    tr.style.cssText = 'border-bottom:1px solid var(--border); ';
    tr.innerHTML = `      <td style="padding:9px 10px;
color:var(--text);
">${
s.nombre}
 ${
s.apellido}
</td>      <td style="padding:9px 10px;
color:var(--text-faint);
">${
s.grupo}
</td>      <td style="padding:9px 10px;
text-align:center;
">        <span style="color:${
lessPct >= 80 ? 'var(--success)' : lessPct >= 40 ? 'var(--warning)' : 'var(--text)'}
;
">${
s.lessons_completed}
</span>        <span style="color:var(--text-faintest);
font-size:11px;
"> / ${
totalLessons}
</span>      </td>      <td style="padding:9px 10px;text-align:center;">
        <span onclick='showQuizDetail(${JSON.stringify(s)})' style="color:var(--accent-soft);cursor:pointer;text-decoration:underline;text-underline-offset:2px;">${s.quizzes_completed}</span>
        <span style="color:var(--text-faintest);font-size:11px;"> / ${totalQuizzes}</span>
      </td>      <td style="padding:9px 10px;
text-align:center;
">        ${
s.quiz_avg_score != null          ? `<span style="color:${
s.quiz_avg_score>=80?'var(--success)':s.quiz_avg_score>=60?'var(--warning)':'var(--danger)'}
;
">${
s.quiz_avg_score}
%</span>`          : '<span style="color:var(--text-faintest); ">—</span>'}
      </td>      <td style="padding:9px 10px;
color:var(--text-faint);
">${
lastAccess}
</td>`;
    tbody.appendChild(tr);
  }
);
}
function showQuizDetail(s) {
  const details = s.quiz_details || [];
  const modal = document.getElementById('quiz-detail-modal');
  document.getElementById('qd-title').textContent = `${s.nombre} ${s.apellido} — Quizzes`;
  const list = document.getElementById('qd-list');
  if (!details.length) {
    list.innerHTML = '<p style="color:var(--text-faint);font-size:13px;">Sin quizzes completados.</p>';
  } else {
    list.innerHTML = details.map(d => {
      const topic = QUIZZES_CLIENT.find(q => q.topicId === d.topicId);
      const title = topic ? topic.title : `Tema ${d.topicId}`;
      const color = d.score >= 80 ? 'var(--success)' : d.score >= 60 ? 'var(--warning)' : 'var(--danger)';
      return `<div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);">
        <span style="font-size:13px;color:var(--text);">${title}</span>
        <span style="font-size:13px;font-weight:bold;color:${color};">${d.score}%</span>
      </div>`;
    }).join('');
  }
  modal.style.display = 'flex';
}
async function createStudent() {
  const nombre   = document.getElementById('tp-st-nombre').value.trim();
  const apellido = document.getElementById('tp-st-apellido').value.trim();
  const grupo    = document.getElementById('tp-st-grupo').value.trim();
  const password = document.getElementById('tp-st-pw').value;
  const errEl    = document.getElementById('tp-st-error');
  errEl.style.display = 'none';
  if (!nombre || !apellido || !grupo || !password) {
    errEl.textContent = 'Completar todos los campos.';
 errEl.style.display = 'block';
 return;
  }
  const res = await apiPost('/api/teacher/students', {
 nombre, apellido, grupo, password }
, teacherToken);
  const data = await res.json();
  if (!res.ok) {
    errEl.textContent = data.error || 'Error al crear estudiante.';
 errEl.style.display = 'block';
 return;
  }
  document.getElementById('tp-st-nombre').value = '';
  document.getElementById('tp-st-apellido').value = '';
  document.getElementById('tp-st-grupo').value = '';
  document.getElementById('tp-st-pw').value = '';
  loadStudents();
}
async function deleteStudent(id, nombre) {
  if (!confirm(`¿Eliminar a ${
nombre}
? Se borrará todo su progreso.`)) return;
  await fetch(`/api/teacher/students/${id}`, {
    method: 'DELETE', headers: { 'Authorization': 'Bearer ' + teacherToken }
  });
  if (currentStudent && currentStudent.id === id) {
    logoutStudent();
    location.reload();
  } else {
    loadStudents();
  }
}
function openResetModal(id, nombre) {
  _resetStudentId = id;
  document.getElementById('tp-reset-name').textContent = nombre;
  document.getElementById('tp-reset-pw').value = '';
  document.getElementById('tp-reset-modal').style.display = 'block';
}
async function confirmResetPassword() {
  const pw = document.getElementById('tp-reset-pw').value;
  if (!pw) return;
  await apiPut(`/api/teacher/students/${
_resetStudentId}`, {
 password: pw }
, teacherToken);
  document.getElementById('tp-reset-modal').style.display = 'none';
  _resetStudentId = null;
}
// Triple clic en cualquier ☕ abre el panel docente
let _logoClicks = 0, _logoTimer = null;
function _handleLogoClic() {
  _logoClicks++;
  clearTimeout(_logoTimer);
  _logoTimer = setTimeout(() => { _logoClicks = 0; }, 600);
  if (_logoClicks >= 3) { _logoClicks = 0; openTeacherLogin(); }
}
document.getElementById('logo-icon').addEventListener('click', _handleLogoClic);
document.getElementById('login-logo').addEventListener('click', _handleLogoClic);
function renderSidebar() {
  const nav = document.getElementById('lesson-list');
  nav.innerHTML = '';
  TOPICS.forEach((topic, topicIdx) => {
    const isEnabled    = enabledTopics.has(topic.id);
    const isAccessible = isTopicAccessible(topic.id);
    if (!isAccessible) expandedTopics.delete(topic.id);
    const isOpen       = expandedTopics.has(topic.id);
    const isDone       = isTopicCompleted(topic.id);
    // ── Topic header ──────────────────────────────────────────
    const header = document.createElement('div');
    header.className = `topic-header${
isAccessible ? '' : ' disabled'}`;
    const lockIcon = !isEnabled      ? '<span style="font-size:11px; color:var(--text-faintest); margin-left:auto; ">🔒</span>'      : (!isAccessible        ? '<span style="font-size:11px; color:var(--text-faintest); margin-left:auto; " title="Completar el tema anterior primero">🔒</span>'        : (isDone ? '<span style="font-size:11px; color:var(--success); margin-left:auto; ">✅</span>' : ''));
    header.innerHTML = `      <span class="topic-arrow${
isOpen ? ' open' : ''}
">▶</span>      <span class="topic-label">${
topicIdx + 1}
. ${
topic.label}
</span>      ${
lockIcon}`;
    header.onclick = () => {
 if (isAccessible) toggleExpand(topic.id);
 }
;
    nav.appendChild(header);
    // ── Collapsible content ───────────────────────────────────
    const content = document.createElement('div');
    content.className = `topic-content${
isOpen ? '' : ' closed'}`;
    // measure height after insert
    if (isOpen) content.style.maxHeight = '9999px';
    // Lessons
    topic.lessons.forEach((lid, lessonIdx) => {
      const l = LESSONS.find(x => x.id === lid);
      if (!l) return;
      const isActive = currentLesson === l.id;
      const locked   = !isAccessible;
      const lessonDone = completedLessons.has(l.id);
      const div = document.createElement('div');
      div.className = `lesson-item${
isActive ? ' active' : ''}
${
locked ? ' locked' : ''}`;
      div.style.paddingLeft = '28px';
      div.innerHTML = `        <div class="lesson-num">${
lessonDone ? '✅' : (lessonIdx + 1)}
</div>        <div class="flex-1 min-w-0">          <div class="text-sm font-medium truncate">${
l.title}
</div>          <div class="text-xs text-slate-500 truncate">${
l.subtitle}
</div>        </div>`;
      if (!locked) div.onclick = () => selectLesson(l.id);
      content.appendChild(div);
    }
);
    // Quiz
    const quiz = QUIZZES_CLIENT.find(q => q.topicId === topic.id);
    if (quiz) {
      const done   = quizDone.has(topic.id);
      const locked = !isAccessible;
      const qDiv   = document.createElement('div');
      qDiv.className = `quiz-item${
done ? ' done' : ''}
${
locked ? ' locked' : ''}`;
      qDiv.innerHTML = `        <div class="quiz-icon">${
done ? '✅' : '📝'}
</div>        <div class="flex-1 min-w-0">          <div class="text-sm font-medium text-emerald-400 truncate">Quiz del tema</div>          <div class="text-xs text-slate-500 truncate">${
quiz.questionCount ?? '?'}
 preguntas</div>        </div>`;
      if (!locked) qDiv.onclick = () => openQuiz(topic.id);
      content.appendChild(qDiv);
    }
    nav.appendChild(content);
  }
);
  const enabled = TOPICS.filter(t => enabledTopics.has(t.id)).length;
  document.getElementById('lessons-label').textContent =    `${
enabled}
 / ${
TOPICS.length}
 temas habilitados`;
}
// ─── SELECT LESSON ────────────────────────────────────────────────────────────
function selectLesson(id) {
  const lesson = LESSONS.find(l => l.id === id);
  if (!lesson) return;
  currentLesson = id;
  document.getElementById('explanation-panel').innerHTML = lesson.explanation;
  renderSidebar();

  // Cargar código: desde localStorage si existe, o el starter
  const saved = localStorage.getItem('jj_code_' + id);
  if (codeEditor) {
    codeEditor.setValue(saved !== null ? saved : (lesson.starterCode || ''));
    updateStdinPanel();
  }
  document.getElementById('stdin-input').value = '';

  // Limpiar output
  const outputDisplay = document.getElementById('output-display');
  outputDisplay.textContent = 'Presionar ▶ Ejecutar para ver la salida…';
  outputDisplay.style.color = 'var(--text-muted)';
  lastOutput = '';
  const verifyResult = document.getElementById('verify-result');
  verifyResult.style.display = 'none';
  document.getElementById('verify-bar').style.display = 'none';
}
// ─── EDITOR HELPERS ───────────────────────────────────────────────────────────
function saveCurrentCode() {
  if (currentLesson === null || !codeEditor) return;
  localStorage.setItem('jj_code_' + currentLesson, codeEditor.getValue());
  updateStdinPanel();
}

function updateStdinPanel() {
  const code = codeEditor ? codeEditor.getValue() : '';
  const panel = document.getElementById('stdin-panel');
  panel.style.display = code.includes('Scanner') ? 'block' : 'none';
}

function resetCode() {
  const lesson = LESSONS.find(l => l.id === currentLesson);
  if (!lesson || !codeEditor) return;
  codeEditor.setValue(lesson.starterCode || '');
  localStorage.removeItem('jj_code_' + currentLesson);
}

// ─── PROGRESO: EXPORTAR / IMPORTAR ───────────────────────────────────────────
function showProgressModal() {
  document.getElementById('import-result').style.display = 'none';
  document.getElementById('progress-modal').style.display = 'flex';
}

function exportProgress() {
  const data = { version: 1, student: currentStudent ? `${currentStudent.nombre} ${currentStudent.apellido}` : 'desconocido', exportedAt: new Date().toISOString(), code: {} };
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith('jj_code_')) {
      const lessonId = key.replace('jj_code_', '');
      data.code[lessonId] = localStorage.getItem(key);
    }
  }
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `java-journey-progreso-${(currentStudent?.apellido || 'alumno').toLowerCase()}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function importProgress(event) {
  const file = event.target.files[0];
  if (!file) return;
  const result = document.getElementById('import-result');
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if (!data.code || typeof data.code !== 'object') throw new Error('Formato inválido');
      let count = 0;
      for (const [lessonId, code] of Object.entries(data.code)) {
        localStorage.setItem('jj_code_' + lessonId, code);
        count++;
      }
      // Recargar lección actual si tiene código importado
      if (currentLesson && data.code[currentLesson] && codeEditor) {
        codeEditor.setValue(data.code[currentLesson]);
      }
      result.style.display = 'block';
      result.style.cssText = 'display:block;margin-top:10px;font-size:12px;border-radius:6px;padding:6px 10px;background:var(--tint-success-bg);border:1px solid var(--tint-success-border);color:var(--quiz-correct-text);';
      result.textContent = `✅ Importado correctamente — ${count} lección${count !== 1 ? 'es' : ''} restaurada${count !== 1 ? 's' : ''}.`;
    } catch {
      result.style.display = 'block';
      result.style.cssText = 'display:block;margin-top:10px;font-size:12px;border-radius:6px;padding:6px 10px;background:var(--tint-danger-bg);border:1px solid var(--tint-danger-border);color:var(--quiz-wrong-text);';
      result.textContent = '❌ Archivo inválido. Verificar que sea un archivo de progreso de Java Journey.';
    }
    event.target.value = '';
  };
  reader.readAsText(file);
}

// ─── EJECUTAR CON PISTON API ──────────────────────────────────────────────────
async function runCode() {
  const code = codeEditor ? codeEditor.getValue() : '';
  if (!code.trim()) return;
  const stdin = document.getElementById('stdin-input').value;
  const btn = document.getElementById('run-btn');
  const spinner = document.getElementById('run-spinner');
  const outputDisplay = document.getElementById('output-display');

  btn.disabled = true;
  spinner.style.display = 'inline';
  outputDisplay.textContent = 'Compilando…';
  outputDisplay.style.color = 'var(--text-faint)';
  document.getElementById('verify-result').style.display = 'none';
  document.getElementById('verify-bar').style.display = 'none';

  try {
    const res = await fetch('/api/verify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code, stdin: stdin || '' })
    });
    const data = await res.json();

    if (!res.ok) {
      outputDisplay.style.color = 'var(--danger)';
      outputDisplay.textContent = data.error || 'Error del servidor. Intentar de nuevo.';
      lastOutput = '';
      return;
    }

    const compileErr = (data.compileErr || '').trim();
    const stdout = (data.stdout || '').trim();
    const stderr = (data.stderr || '').trim();

    if (compileErr) {
      outputDisplay.style.color = 'var(--danger)';
      outputDisplay.textContent = compileErr;
      lastOutput = '';
    } else if (stderr && !stdout) {
      outputDisplay.style.color = 'var(--danger)';
      outputDisplay.textContent = stderr;
      lastOutput = '';
    } else {
      outputDisplay.style.color = 'var(--text)';
      outputDisplay.textContent = stdout || '(sin salida)';
      lastOutput = stdout;
      if (VERIFIABLE_LESSONS.has(currentLesson)) {
        document.getElementById('verify-bar').style.display = 'flex';
      }
    }
  } catch (e) {
    outputDisplay.style.color = 'var(--danger)';
    outputDisplay.textContent = data?.error || 'Error de conexión. Intentar de nuevo.';
    lastOutput = '';
  } finally {
    btn.disabled = false;
    spinner.style.display = 'none';
  }
}
// ─── SHARE ────────────────────────────────────────────────────────────────────
function showShare() {
  const lesson = LESSONS.find(l => l.id === currentLesson);
  if (!lesson) return;
  document.getElementById('share-oc-input').value = '';
  updateShareMessage();
  document.getElementById('share-modal').style.display = 'flex';
}
function extractTaskText(html) {
  const div = document.createElement('div');
  div.innerHTML = html;
  const taskDiv = div.querySelector('.bg-indigo-900\\/30');
  return taskDiv ? taskDiv.textContent.trim() : '';
}
function updateShareMessage() {
  const lesson = LESSONS.find(l => l.id === currentLesson);
  if (!lesson) return;
  const titulo = `Lección ${
lesson.id}
 — ${
lesson.title}`;
  const tarea = extractTaskText(lesson.explanation).replace(/^🎯\s*Tarea:\s*/i, '');
  const salida = lastOutput.trim();
  const link = (document.getElementById('share-oc-input')?.value || '').trim();
  let msg = `📚 ${
titulo}
\n\n🎯 Tarea: ${
tarea}`;
  if (salida) msg += `\n\n📤 Salida del programa:\n${
salida}`;
  if (link)   msg += `\n\n🔗 Código: ${
link}`;
  document.getElementById('share-message').value = msg;
}
function copyShareMessage() {
  const text = document.getElementById('share-message').value;
  const btn = document.getElementById('share-copy-btn');
  const ok = () => {
    btn.textContent = '✓ Copiado';
    btn.style.background = 'var(--success)';
    setTimeout(() => {
 btn.textContent = 'Copiar mensaje';
 btn.style.background = '';
 }
, 1800);
  }
;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(ok).catch(() => fallbackCopy(text, ok));
  }
 else {
    fallbackCopy(text, ok);
  }
}
function fallbackCopy(text, cb) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.cssText = 'position:fixed; top:-9999px; left:-9999px; opacity:0; ';
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  document.execCommand('copy');
  document.body.removeChild(ta);
  if (cb) cb();
}
// ─── HINT / SOLUTION ──────────────────────────────────────────────────────────
function showHint() {
  const lesson = LESSONS.find(l => l.id === currentLesson);
  if (!lesson) return;
  openModal('💡', 'Pista', lesson.hint);
}
function showSolution() {
  const lesson = LESSONS.find(l => l.id === currentLesson);
  if (!lesson || !lesson.solution) return;
  if (codeEditor) codeEditor.setValue(lesson.solution);
  saveCurrentCode();
}
// ─── VERIFICACIÓN DE SALIDA ──────────────────────────────────────────────────
async function verifyOutput() {
  if (!VERIFIABLE_LESSONS.has(currentLesson)) return;
  const output = lastOutput.replace(/\r\n/g, '\n');
  const result = document.getElementById('verify-result');
  result.style.display = 'block';
  result.style.cssText = 'display:block;font-size:12px;border-radius:6px;padding:3px 10px;background:var(--border);color:var(--text-muted);';
  result.textContent = 'Verificando…';
  try {
    const res = await apiPost('/api/verify', { lessonId: currentLesson, output }, studentToken);
    const data = await res.json();
    if (data.correct) {
      result.style.cssText = 'display:block;font-size:12px;border-radius:6px;padding:3px 10px;background:var(--tint-success-bg);border:1px solid var(--tint-success-border);color:var(--quiz-correct-text);';
      result.innerHTML = '✅ <strong>¡Correcto!</strong>';
      completedLessons.add(currentLesson);
      renderSidebar();
    } else {
      result.style.cssText = 'display:block;font-size:12px;border-radius:6px;padding:4px 10px;background:var(--tint-danger-bg);border:1px solid var(--tint-danger-border);color:var(--quiz-wrong-text);';
      const obtenido = lastOutput.replace(/\n/g, '↵\n');
      result.innerHTML = `❌ <strong>No coincide.</strong><br><span style="color:var(--text-muted);font-family:monospace;font-size:11px;">Obtenido: <span style="color:var(--quiz-wrong-text);">${obtenido.replace(/</g,'&lt;')}</span><br>Revisar la "📤 Salida esperada" de la consigna y volver a intentar.</span>`;
    }
  } catch {
    result.style.cssText = 'display:block;font-size:12px;border-radius:6px;padding:3px 10px;background:var(--tint-warning-bg);color:var(--warning);';
    result.textContent = 'Error de conexión.';
  }
}
function openModal(icon, title, body) {
  document.getElementById('modal-icon').textContent = icon;
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-body').textContent = body;
  document.getElementById('modal').style.display = 'flex';
}
function closeModal() {
  document.getElementById('modal').style.display = 'none';
}
// ─── QUIZ ────────────────────────────────────────────────────────────────────
async function openQuiz(topicId) {
  try {
    const res = await apiGet(`/api/quiz/questions?topicId=${
topicId}`, studentToken);
    if (!res.ok) return;
    currentQuiz = await res.json();
  }
 catch {
 return;
 }
  currentQIndex = 0;
  quizScore = 0;
  quizAnswered = false;
  quizSessionAnswers = [];
  document.getElementById('qz-topic').textContent = currentQuiz.title;
  document.getElementById('qz-score').style.display = 'none';
  document.getElementById('quiz-modal').style.display = 'flex';
  showQuestion();
}
function showQuestion() {
  const q = currentQuiz.questions[currentQIndex];
  const total = currentQuiz.questions.length;
  document.getElementById('qz-counter').textContent = `${
currentQIndex + 1}
 / ${
total}`;
  document.getElementById('qz-progress').style.width = `${
(currentQIndex / total) * 100}
%`;
  document.getElementById('qz-question').textContent = q.q;
  const codeEl = document.getElementById('qz-code');
  if (q.code) {
 codeEl.textContent = q.code;
 codeEl.style.display = 'block';
 }
  else {
 codeEl.style.display = 'none';
 }
  document.getElementById('qz-feedback').style.display = 'none';
  document.getElementById('qz-next').style.display = 'none';
  quizAnswered = false;
  // render options
  const container = document.getElementById('qz-options');
  container.innerHTML = '';
  q.opts.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.style.cssText = 'text-align:left; padding:10px 14px; border-radius:8px; border:1px solid var(--option-border); background:var(--option-bg); color:var(--option-text); font-size:13px; cursor:pointer; transition:all .15s; ';
    btn.onmouseover = () => {
 if (!quizAnswered) btn.style.borderColor = 'var(--accent)';
 }
;
    btn.onmouseout  = () => {
 if (!quizAnswered) btn.style.borderColor = 'var(--option-border)';
 }
;
    btn.onclick = () => selectAnswer(i);
    container.appendChild(btn);
  }
);
}
async function selectAnswer(idx) {
  if (quizAnswered) return;
  quizAnswered = true;
  const btns = document.getElementById('qz-options').children;
  for (let i = 0;
 i < btns.length;
 i++) btns[i].style.cursor = 'default';
  let correct = false, explanation = '', correctIndex = -1;
  try {
    const res = await apiPost('/api/quiz/answer',      {
 topicId: currentQuiz.topicId, questionIndex: currentQIndex, answer: idx }
,      studentToken);
    const data = await res.json();
    correct = data.correct;
    explanation = data.explanation;
    correctIndex = data.correctIndex;
  }
 catch {
 quizAnswered = false;
 return;
 }
  const q = currentQuiz.questions[currentQIndex];
  quizSessionAnswers.push({
    q: q.q,
    opts: q.opts,
    code: q.code || null,
    chosen: idx,
    correctIndex,
    correct,
  });
  for (let i = 0;
 i < btns.length;
 i++) {
    if (i === correctIndex) {
      btns[i].style.background = 'var(--quiz-correct-bg)';
      btns[i].style.borderColor = 'var(--quiz-correct-border)';
      btns[i].style.color = 'var(--quiz-correct-text)';
    }
 else if (!correct && i === idx) {
      btns[i].style.background = 'var(--quiz-wrong-bg)';
      btns[i].style.borderColor = 'var(--quiz-wrong-border)';
      btns[i].style.color = 'var(--quiz-wrong-text)';
    }
  }
  if (correct) quizScore++;
  const fb = document.getElementById('qz-feedback');
  fb.style.display = 'block';
  fb.style.background = correct ? 'var(--quiz-correct-fb-bg)' : 'var(--quiz-wrong-fb-bg)';
  fb.style.border = `1px solid ${
correct ? 'var(--quiz-correct-fb-border)' : 'var(--quiz-wrong-fb-border)'}`;
  fb.style.color = correct ? 'var(--quiz-correct-text)' : 'var(--quiz-wrong-text)';
  fb.textContent = (correct ? '✓ Correcto. ' : '✗ Incorrecto. ') + explanation;
  const nextBtn = document.getElementById('qz-next');
  const isLast = currentQIndex === currentQuiz.questions.length - 1;
  nextBtn.textContent = isLast ? 'Ver resultado' : 'Siguiente →';
  nextBtn.style.display = 'inline-block';
}
function nextQuestion() {
  const isLast = currentQIndex === currentQuiz.questions.length - 1;
  if (isLast) {
    showScore();
  }
 else {
    currentQIndex++;
    showQuestion();
  }
}
function showScore() {
  const total = currentQuiz.questions.length;
  const pct = Math.round((quizScore / total) * 100);
  document.getElementById('qz-options').innerHTML = '';
  document.getElementById('qz-question').textContent = '';
  document.getElementById('qz-code').style.display = 'none';
  document.getElementById('qz-feedback').style.display = 'none';
  document.getElementById('qz-next').style.display = 'none';
  document.getElementById('qz-progress').style.width = '100%';
  document.getElementById('qz-counter').textContent = `${
total}
 / ${
total}`;
  const emoji = pct >= 80 ? '🏆' : pct >= 60 ? '👍' : '📚';
  const msg   = pct >= 80 ? '¡Excelente!' : pct >= 60 ? 'Bien hecho' : 'Seguir practicando';
  document.getElementById('qz-score-emoji').textContent = emoji;
  document.getElementById('qz-score-text').textContent = `${
msg}
 — ${
quizScore}
 / ${
total}
 correctas`;
  document.getElementById('qz-score-sub').textContent = `${
pct}
% de respuestas correctas`;
  document.getElementById('qz-score').style.display = 'block';
  quizDone.add(currentQuiz.topicId);
  const pdfBtn = document.getElementById('qz-pdf-btn');
  pdfBtn.style.display = allowQuizPdf ? 'inline-block' : 'none';
  const minimalAnswers = quizSessionAnswers.map(a => ({
    chosen: a.chosen, correct: a.correct, correctIndex: a.correctIndex
  }));
  apiPost('/api/quiz/complete', {
    topicId: currentQuiz.topicId, score: pct, answers: minimalAnswers
  }, studentToken).catch(e => console.error('quiz/complete failed:', e));
  renderSidebar();
}
function restartQuiz() {
  document.getElementById('qz-score').style.display = 'none';
  currentQIndex = 0;
  quizScore = 0;
  quizAnswered = false;
  showQuestion();
}
function closeQuiz() {
  document.getElementById('quiz-modal').style.display = 'none';
}
function downloadQuizPdf() {
  if (!window.jspdf) return;
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });
  const margin = 18;
  const contentW = 210 - margin * 2;
  let y = 22;

  const line = (text, { size = 10, bold = false, color = [20, 20, 20] } = {}) => {
    doc.setFontSize(size);
    doc.setFont('helvetica', bold ? 'bold' : 'normal');
    doc.setTextColor(...color);
    const lines = doc.splitTextToSize(String(text), contentW);
    if (y + lines.length * size * 0.42 > 278) { doc.addPage(); y = 22; }
    doc.text(lines, margin, y);
    y += lines.length * size * 0.42 + 1.5;
  };

  const total = quizSessionAnswers.length;
  const correctCount = quizSessionAnswers.filter(a => a.correct).length;
  const pct = Math.round((correctCount / total) * 100);

  line('Java Journey — Resultados del Quiz', { size: 15, bold: true, color: [79, 110, 247] });
  line(currentQuiz.title, { size: 12, bold: true });
  line(`Estudiante: ${currentStudent.nombre} ${currentStudent.apellido}`, { size: 10, color: [30, 30, 30] });
  line(`Fecha: ${new Date().toLocaleDateString('es-UY')}`, { size: 10, color: [30, 30, 30] });
  y += 2;
  line(`Resultado: ${correctCount} / ${total} correctas (${pct}%)`, { size: 11, bold: true, color: pct >= 60 ? [34, 197, 94] : [239, 68, 68] });
  y += 3;
  doc.setDrawColor(45, 55, 72);
  doc.line(margin, y, 210 - margin, y);
  y += 5;

  quizSessionAnswers.forEach((ans, i) => {
    line(`${i + 1}. ${ans.q}`, { size: 10, bold: true });
    if (ans.code) {
      line(ans.code, { size: 8, color: [30, 30, 30] });
    }
    ans.opts.forEach((opt, oi) => {
      const isCorrect = oi === ans.correctIndex;
      const isWrong = !ans.correct && oi === ans.chosen;
      const prefix = isCorrect ? '[OK] ' : isWrong ? '[X]  ' : '      ';
      const color = isCorrect ? [34, 197, 94] : isWrong ? [239, 68, 68] : [30, 30, 30];
      line(prefix + opt, { size: 9.5, color });
    });
    line(`Explicacion: ${ans.opts[ans.correctIndex]} — seleccionaste: ${ans.opts[ans.chosen]}`, { size: 8.5, color: [30, 30, 30] });
    y += 2;
    doc.setDrawColor(30, 37, 53);
    if (y < 270) { doc.line(margin, y, 210 - margin, y); y += 4; }
  });

  const fname = `quiz-${currentQuiz.title.replace(/\s+/g, '-')}-${currentStudent.apellido}.pdf`;
  doc.save(fname);
}
// ─── PDF DE EJERCICIOS ────────────────────────────────────────────────────────
function _buildExercisePdf(lessons) {
  if (!window.jspdf) { alert('jsPDF no cargó. Revisar conexión.'); return null; }
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });
  const margin = 18;
  const contentW = 210 - margin * 2;
  let y = 22;
  let firstPage = true;

  const addPage = () => { doc.addPage(); y = 22; };

  const checkY = (need = 6) => { if (y + need > 276) addPage(); };

  const line = (text, { size = 10, bold = false, color = [20, 20, 20], mono = false } = {}) => {
    doc.setFontSize(size);
    doc.setFont(mono ? 'courier' : 'helvetica', bold ? 'bold' : 'normal');
    doc.setTextColor(...color);
    const lines = doc.splitTextToSize(String(text), contentW);
    checkY(lines.length * size * 0.42 + 1.5);
    doc.text(lines, margin, y);
    y += lines.length * size * 0.42 + 1.5;
  };

  const getTextFrom = (el) => {
    if (!el) return '';
    // reemplazar <br> con espacio antes de leer el texto
    el.querySelectorAll('br').forEach(br => br.replaceWith(' '));
    return (el.innerText || el.textContent || '').replace(/\s+/g, ' ').trim();
  };

  const clean = s => s
    .replace(/[\u{1F300}-\u{1FFFF}]/gu, '')
    .replace(/[☀-➿]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  const extractLesson = (html) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    // Párrafos de explicación (excluir bloques de código slate-800)
    const parts = [];
    tmp.querySelectorAll('p').forEach(p => {
      // excluir párrafos dentro de bloques de código
      if (p.closest('[class*="slate-800"]')) return;
      const t = getTextFrom(p.cloneNode(true));
      if (t) parts.push(t);
    });
    // Bloque de tarea — buscar por class que contenga "indigo"
    let tareaDiv = null;
    tmp.querySelectorAll('div').forEach(d => {
      if (!tareaDiv && d.className && d.className.includes('indigo')) tareaDiv = d;
    });
    const tarea = tareaDiv ? clean(getTextFrom(tareaDiv.cloneNode(true))) : '';
    return { desc: clean(parts.join(' ')), tarea: tarea.replace(/^\s*Tarea:\s*/i, 'Tarea: ') };
  };

  // Encabezado global
  line('Java Journey - Ejercicios de Programacion Java', { size: 15, bold: true, color: [79, 110, 247] });
  line(`Fecha: ${new Date().toLocaleDateString('es-UY')}`, { size: 9, color: [80, 80, 80] });
  y += 4;

  lessons.forEach((lesson) => {
    if (!firstPage) { y += 4; checkY(20); }
    firstPage = false;

    // Título de lección
    doc.setDrawColor(79, 110, 247);
    doc.setFillColor(15, 23, 42);
    doc.rect(margin, y - 5, contentW, 9, 'F');
    line(`Ejercicio ${lesson.id}: ${lesson.title} - ${lesson.subtitle}`, { size: 11, bold: true, color: [200, 210, 255] });
    y += 1;

    // Texto de la lección (sin bloques de código)
    const { desc, tarea } = extractLesson(lesson.explanation);
    if (desc) line(clean(desc), { size: 9.5, color: [30, 30, 30] });
    if (tarea) { y += 1; line(clean(tarea), { size: 9.5, bold: true, color: [30, 30, 30] }); }
    y += 3;

    // Código del estudiante con coloreo de sintaxis
    const studentCode = lessons.length === 1 && codeEditor ? codeEditor.getValue() : (localStorage.getItem('jj_code_' + lesson.id) || lesson.starterCode || '');
    if (studentCode && studentCode.trim()) {
      line('Codigo del estudiante:', { size: 9, bold: true, color: [34, 197, 94] });
      const KEYWORDS = new Set(['public','private','protected','class','static','void','int','double','float','long','char','boolean','String','new','return','if','else','for','while','do','break','continue','import','package','this','super','null','true','false','final','abstract','interface','extends','implements','throws','throw','try','catch','finally','Scanner','System']);
      const tokenize = src => {
        const toks = []; let i = 0;
        while (i < src.length) {
          if (src[i] === '/' && src[i+1] === '/') { toks.push({ t:'comment', v: src.slice(i) }); break; }
          if (src[i] === '"') {
            let j = i+1; while (j < src.length && src[j] !== '"') { if (src[j]==='\\') j++; j++; }
            toks.push({ t:'string', v: src.slice(i, j+1) }); i = j+1; continue;
          }
          if (/[a-zA-Z_]/.test(src[i])) {
            let j = i; while (j < src.length && /\w/.test(src[j])) j++;
            const w = src.slice(i, j); toks.push({ t: KEYWORDS.has(w) ? 'kw' : 'id', v: w }); i = j; continue;
          }
          if (/[0-9]/.test(src[i])) {
            let j = i; while (j < src.length && /[0-9.]/.test(src[j])) j++;
            toks.push({ t:'num', v: src.slice(i, j) }); i = j; continue;
          }
          const last = toks[toks.length-1];
          if (last && last.t === 'op') last.v += src[i]; else toks.push({ t:'op', v: src[i] });
          i++;
        }
        return toks;
      };
      const tokColors = { kw:[0,50,200], string:[180,20,20], comment:[110,110,110], num:[0,130,0], id:[0,0,0], op:[0,0,0] };
      const codeFS = 8;
      const codeLineH = codeFS * 0.42 + 1.2;
      const rightMargin = 210 - margin;
      const charW = doc.getStringUnitWidth('M') * codeFS * 0.352;
      studentCode.split('\n').forEach(rawLine => {
        checkY(codeLineH + 0.5);
        doc.setFontSize(codeFS);
        const expanded = rawLine.replace(/\t/g, '    ');
        const indent = expanded.match(/^(\s*)/)[1];
        let x = margin + indent.length * charW;
        const trimmed = expanded.trimStart();
        if (!trimmed) { y += codeLineH; return; }
        // si la línea completa no cabe, renderizarla como texto plano truncado
        const fullW = (indent.length + trimmed.length) * charW;
        if (fullW > contentW) {
          doc.setFont('courier', 'normal');
          doc.setTextColor(0, 0, 0);
          const maxChars = Math.floor(contentW / charW) - 1;
          doc.text(expanded.slice(0, maxChars), margin, y);
          y += codeLineH; return;
        }
        tokenize(trimmed).forEach(tok => {
          const [r,g,b] = tokColors[tok.t] || [0,0,0];
          doc.setTextColor(r,g,b);
          doc.setFont('courier', tok.t === 'kw' ? 'bold' : 'normal');
          const w = doc.getStringUnitWidth(tok.v) * codeFS * 0.352;
          if (x + w > rightMargin) { y += codeLineH; checkY(codeLineH); x = margin + 4; }
          doc.text(tok.v, x, y);
          x += w;
        });
        y += codeLineH;
      });
    }

    y += 2;
    doc.setDrawColor(45, 55, 72);
    checkY(3);
    doc.line(margin, y, 210 - margin, y);
    y += 4;
  });

  return doc;
}

function downloadLessonPdf() {
  const lesson = LESSONS.find(l => l.id === currentLesson);
  if (!lesson) return;
  const doc = _buildExercisePdf([lesson]);
  if (!doc) return;
  doc.save(`ejercicio-${lesson.id}-${lesson.title.replace(/\s+/g, '-')}.pdf`);
}

function downloadAllLessonsPdf() {
  const doc = _buildExercisePdf(LESSONS);
  if (!doc) return;
  doc.save('java-journey-todos-los-ejercicios.pdf');
}

// ─── TEACHER CONFIG ───────────────────────────────────────────────────────────
function renderPdfToggle() {
  const toggle = document.getElementById('tp-pdf-toggle');
  const knob = document.getElementById('tp-pdf-knob');
  if (!toggle) return;
  toggle.style.background = allowQuizPdf ? 'var(--accent)' : 'var(--toggle-off-bg)';
  knob.style.left = allowQuizPdf ? '23px' : '3px';
  knob.style.background = allowQuizPdf ? 'var(--toggle-knob)' : 'var(--text-faint)';
}
async function toggleAllowQuizPdf() {
  allowQuizPdf = !allowQuizPdf;
  renderPdfToggle();
  try {
    await apiPut('/api/teacher/config', { allowQuizPdf }, teacherToken);
  } catch {
    allowQuizPdf = !allowQuizPdf;
    renderPdfToggle();
  }
}
async function saveTeacherAccount() {
  const nombre = document.getElementById('tp-teacher-nombre').value.trim();
  const apellido = document.getElementById('tp-teacher-apellido').value.trim();
  const pw = document.getElementById('tp-teacher-pw').value;
  const msg = document.getElementById('tp-teacher-msg');
  if (!nombre || !apellido || !pw) {
    msg.style.display = 'block'; msg.style.color = 'var(--danger)'; msg.textContent = 'Completar todos los campos.'; return;
  }
  try {
    const res = await fetch('/api/auth/teacher', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + teacherToken },
      body: JSON.stringify({ nombre, apellido, newPassword: pw })
    });
    if (!res.ok) throw new Error();
    msg.style.display = 'block'; msg.style.color = 'var(--success)'; msg.textContent = 'Cuenta guardada. Usar estos datos la próxima vez.';
    document.getElementById('tp-teacher-pw').value = '';
  } catch {
    msg.style.display = 'block'; msg.style.color = 'var(--danger)'; msg.textContent = 'Error al guardar.';
  }
}
// ─── SECUENCIA SECRETA "doc" abre panel docente ────────────────────────────────
let _docSeq = '';
document.addEventListener('keydown', e => {
  const tag = document.activeElement ? document.activeElement.tagName : '';
  if (tag === 'INPUT' || tag === 'TEXTAREA') { _docSeq = ''; return; }
  _docSeq += e.key.toLowerCase();
  if (_docSeq.length > 3) _docSeq = _docSeq.slice(-3);
  if (_docSeq === 'doc') { _docSeq = ''; openTeacherLogin(); }
});
// ─── KEYBOARD ─────────────────────────────────────────────────────────────────
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
    closeQuiz();
    document.getElementById('teacher-login').style.display = 'none';
    document.getElementById('teacher-panel').style.display = 'none';
  }
}
);
// ─── START ────────────────────────────────────────────────────────────────────
window.addEventListener('load', init);
