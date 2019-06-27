## Ejercicios Clase 1 - Javscript ES6
### Teórica: https://mndy.pw/nodeclase1
##### 06/06/2018

---

1. Escriba una expresión utilizando métodos de array de ES6 (por ejemplo, filter y reduce) para calcular el valor total de las máquinas en la lista de inventario.
```js
const inventario = [
  {tipo:   "maquina", valor: 5000},
  {tipo:   "maquina", valor:  650},
  {tipo:      "silla", valor:   10},
  {tipo: "sillon", valor: 1200},
  {tipo:   "maquina", valor:   77}
]

let valorTotalMaquina = TU_CÓDIGO_AQUÍ

console.log(valorTotalMaquina)
```

2. El código para este ejercicio implementa un wrapper para trabajar con arrays ordenados. Su constructor toma una función de comparación que compara dos elementos y devuelve un número, negativo si el primero es menor que el segundo, cero cuando son iguales, y positivo de lo contrario.
Reescriba el código para usar una clase ES6. Luego, reescriba el loop para usar el métodos de array de ES6 findIndex, que es como indexOf, pero toma una función en lugar de un elemento como argumento, y devuelve el índice del primer elemento para el cual esa función devuelve verdadero (o devuelve -1 si no hay) tal elemento fue encontrado). Por ejemplo, [1, 2, 3].findIndex (x => x > 1) produce 1. Use las arrow functions para todas las expresiones de función.

```js
function ArrayOrdenado(comparar) {
  this.comparar = comparar;
  this.contenido = [];
}
ArrayOrdenado.prototype.encontrarPos = function(elt) {
  for (var i = 0; i < this.contenido.length; i++) {
    if (this.comparar(elt, this.contenido[i]) < 0) break;
  }
  return i;
}
ArrayOrdenado.prototype.insertar = function(elt) {
  this.contenido.splice(this.encontrarPos(elt), 0, elt);
}

var ordenado = new ArrayOrdenado(function(a, b) { return a - b });
ordenado.insertar(5);
ordenado.insertar(1);
ordenado.insertar(2);
ordenado.insertar(4);
ordenado.insertar(3);
console.log("array:", ordenado.contenido);

```

3. Sería bueno poder llamar a nuestra función `ultimoIndiceDe` sin proporcionar el tercer argumento, y tenerlo por defecto para comenzar al final dela array. Sería aún mejor si pudiéramos expresar esto con un valor de argumento predeterminado de ES6. ¿Podemos?
¿En qué ámbito se evalúan los argumentos por defecto? (Experimente para averiguarlo).


```js
function ultimoIndiceDe(arr, elt, inicio) {
  for (let i = inicio - 1; i >= 0; i--)
    if (arr[i] === elt) return i
  return -1
}

console.log(ultimoIndiceDe([1, 2, 1, 2], 2))
```

4. La función `detectarColision` busca en un array de rectángulos y devuelve el primer rectángulo en el que se encuentra el punto dado.
Use la desestructuración y una función de orden superior para hacer que este código sea más limpio. Es posible que desee utilizar el método de array `find`, que toma una función como argumento y devuelve el primer elemento del array (el elemento, no su índice) para el que la función devuelve verdadero.

```js
function detectarColision(objetos, punto) {
  for (let i = 0; i < objetos.length; i++) {
    let objeto = objetos[i]
    if (punto.x >= objeto.x && punto.x <= objeto.x + objeto.width &&
        punto.y >= objeto.y && punto.y <= objeto.y + objeto.alto)
      return objeto
  }
}

const misObjetos = [
  {x:  10, y: 20, ancho: 30, alto: 30},
  {x: -40, y: 20, ancho: 30, alto: 30},
  {x:   0, y:  0, ancho: 10, alto:  5}
]

console.log(detectarColision(misObjetos, {x: 4, y: 2}))
```

5. Simplifique estas tres funciones utilizando la sintaxis de `spread`. El primero, `remplazar`, reemplaza parte de un array con elementos de otro array. El segundo, `copiarYRemplazar`, hace lo mismo, pero crea un nuevo array en lugar de modificar su argumento. El tercero se utiliza para registrar los avistamientos de un observador de aves. Primero toma una marca de tiempo (por ejemplo, una fecha) y luego cualquier número de cadenas que nombren pájaros. A continuación, almacena estos en el array `pajarosVistos`.

```js
function remplazar(array, desde, hasta, elementos) {
  array.splice.apply(array, [desde, hasta - desde].concat(elementos))
}

let testArray = [1, 2, 100, 100, 6]
remplazar(testArray, 2, 4, [3, 4, 5])
console.log(testArray)

function copiarYRemplazar(array, desde, hasta, elementos) {
  return array.slice(0, desde).concat(elementos).concat(array.slice(hasta))
}

console.log(copiarYRemplazar([1, 2, 100, 200, 6], 2, 4, [3, 4, 5]))

let pajarosVistos = []
function grabarPajaros(tiempo) {
  pajarosVistos.push({tiempo, pajaros: Array.prototype.slice.call(arguments, 1)})
}

grabarPajaros(new Date, "sparrow", "robin", "pterodactyl")
console.log(pajarosVistos)
```

6. Dados los datos en el código de inicio, use los templates strings para producir la siguiente cadena. Asegúrese de que los números, los nombres y el nombre del equipo realmente provengan de los datos.
 * Hay 4 personas en el equipo de herramientas.
 * Sus nombres son Sofía, Ricky, Martin, Gonzalo.
 * 2 de ellos tienen un papel de alto nivel.

```js
const nombreEquipo = "tooling"
const gente = [{nombre: "Sofía", rol: "senior"},
                {nombre: "Ricky", rol: "junior"},
                {nombre: "Martin", rol: "senior"},
                {nombre: "Gonzalo", rol: "junior"}]

let mensaje = TU_CODIGO_AQUI

console.log(mensaje)
```

7. Escriba una función html que se pueda usar como una etiqueta de cadena de plantilla y produzca una cadena en la que todas las piezas interpoladas se escapan como HTML. Utilice la función de escapeHTML provista para hacer el escape. Recuerde que una función de etiqueta (tag function) obtiene un array de strings intermedias como primer argumento y luego los valores interpolados como argumentos adicionales.
  * // TAG FUNCTION saludo\`Soy ${nombre}. Tengo ${edad} años.`
  * // FUNCIÓN EQUIVALENTE saludo(["Soy ", ". Tengo ", " años."], nombre, edad)
```js
function html(...) {
  // Tu código aquí
}

const debeEscaparse = '<>&"'
console.log(html`Deberías de escapar los caracteres ${debeEscaparse.length} “${debeEscaparse}” en HTML`)

function escaparHTML(string) {
  return String(string).replace(/"/g, "&quot;").replace(/</g, "&lt;")
  	.replace(/>/g, "&gt;").replace(/&/g, "&amp;")
}
```

8. En la página en el dominio https://digitalhouse.com/, esta contiene la palabra "Co-learning". Dada esta implementación de devolución de Promesa de una solicitud de obtención HTTP, escribir un "rastreador" simple basado en la promesa que primero obtenga la primera página. Escanear el contenido de esta página en busca de la palabra "Co-learning" y devolver la frase entera.
```js
function get(url) {
  return new Promise((succeed, fail) => {
    var req = new XMLHttpRequest()
    req.open("GET", url, true)
    req.addEventListener("load", () => {
      if (req.status < 400)
        succeed(req.responseText)
      else
        fail(new Error("Request failed: " + req.statusText))
    })
    req.addEventListener("error", () => {
      fail(new Error("Network error"))
    })
    req.send(null)
  })
}
```

9.  Escribe una clase llamada Punto, que representa un punto en el espacio bidimensional. Un punto tiene propiedades x e y, dados como argumentos a su constructor. También tiene un solo método más, que toma otro punto y devuelve la suma de los dos puntos, es decir, un nuevo punto cuya x es la suma de las propiedades x de los dos puntos originales, y cuya y es la suma de sus y propiedades.
```js
// Tu código acá

console.log(new Punto(1, 2).sumar(new Punto(2, 1)))
// → Punto{x: 3, y: 3}
```

10. Reescriba estos dos tipos de objetos para usar la palabra clave de clase, en lugar de la manipulación directa de prototipos. Orador es un tipo simple que expone un método de habla que, cuando se le llama, registra el texto dado junto con el nombre del orador. Gritador es un subtipo de Orador que grita su texto y lo convierte en mayúsculas.
```js
function Orador(nombre, verbo) {
  this.nombre = nombre
  this.verbo = verbo || "dice"
}
Orador.prototype.hablar = function(texto) {
  console.log(this.nombre + " " + this.verbo + " '" + texto + "'")
}

function Gritador(nombre) {
  Orador.llamar(this, nombre, "grita")
}
Gritador.prototype = Object.create(Orador.prototype)
Gritador.prototype.hablar = function(texto) {
  Orador.prototype.hablar.llamar(this, texto.toUpperCase())
}

new Gritador("Dr. Bocagrande").hablar("hola, que tal?")
```