## Ejercicios Clase 3 - Express.js
### Teórica: https://mndy.pw/nodeclase3
##### 27/06/2018

---

1. Instalar express.js al proyecto que va a utilizar para hacer estos ejercicios utilizando npm. Guardar la dependencia dentro del `package.json`. Luego instanciar una versión hello world en su proyecto sobre express.js

2. En el proyecto, crear una ruta `/todosLosRequests` que acepte todos los requests y responda en pantalla que tipo de requests recibió.<br />
**TIP:** Utilizar [Reqbin](https://reqbin.com/) para realizar tests de requests simples. También hay aplicaciones como [Postman](https://www.getpostman.com/) para requests más complejos

3. Crear una única ruta GET que acepte la llamada a la url `/ruta-1` por más que esta sea llamada sin un guión medio. Debe responder a ambas `/ruta1` y `/ruta-1` la misma vía de acceso.

4. Crear una ruta get a `/clase` que reciba como parametro el número de la clase. Que en base al parametro ingresado se devuelva el tópico de la clase.
```js
`/clase/1` Debe devolver 'ES6'
```

5. Crear varias rutas que respondan de las siguientes maneras.
```js
GET /suma/4/8 -> retorna la suma de 4+8
GET /sumaQuery?a=5&b=3 -> retorna la suma de a + b, ejemplo, 8
GET /verificarNumeroImpar/3 -> Devuelve respuesta error 400 en caso de ser erroneo
POST /contarCampos BODY {'alga':1,'plankton':2,'pescado':3}-> 3
POST /numero/1 y guarda en una lista los números que se van agregando -> retornamos el listado de números guardados
```

6. Crear una ruta get a `/digital-house` que reciba como parametro el título la cursada. En base al parametro ingresado se devuelva el título de esta en formato `JSON`.
```js
`/digital-house/marketing` Debe devolver {'cursada': 'marketing'}
```

7. Crear un indice de productos en un módulo que al cargar `/productos` debe responder el listado de productos como en el ejemplo, pero al cargar `/productos/1` debe devolver sólo el producto con la identificación por la que se pasó por parámetro. Este direccionamiento debe ser ejecutado desde otro módulo e importado dentro de nuestro archivo de entrada.
```js
[{
  'título': 'Apple Iphone 6s',
  'precio': 20000,
  'id': 1
},
{
  'título': 'Samsung Galaxy S9',
  'precio': 70000,
  'id': 2
},
{
  'título': 'Apple Iphone 8',
  'precio': 60000,
  'id': 3
}}
```

8. Crear una función middleware que guarde la fecha y hora en el cual se accedió a cualquier ruta. Este archivo llamarlo `access-log.txt` y debería de contener fecha, hora y ruta a la que se intentó acceder.

9. Instalar usando npm el paquete `express-lowercase-paths` y asegurese de utilizarlo y que sus rutas puedan ser cargadas en minúsculas, mayúsculas y captializadas. Todas estas deberían de ir a la misma que es la que la llama.

10. Crear un archivo estático html con el texto de abajo. Este mismo archivo colocarlo en una carpeta `public` que es donde irían los archivos estáticos de su aplicativo. Esta misma llamela como archivo estático para la ruta `/static` y vea que este archivo carga correctamente.
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Ejemplo</title>
</head>
<body>
<p>La Argentina, se suele decir, es tierra de talentos. Vanidad o no, en lo que respecta a la industria informática esa máxima está más cerca de cumplirse que de ser una falacia. Dado el potencial, la cuestión pasa entonces por no dormirse en los laureles y seguir desarrollándolo. Así lo entienden por lo menos quienes llevan las riendas de Digital House, el primer coding school de clase mundial del país que, a través de cursos de programación intensivos, está formando a las nuevas generaciones de profesionales digitales. Además, aspira a constituirse en un gran polo de conocimiento, en el cual los miembros de la comunidad puedan poner en marcha sus emprendimientos digitales.</p>
<p>"Nuestro país funciona como fuente de desarrolladores para todo el mundo. Ya sea en la industria nacional como en empresas del exterior. Por eso, tiene un camino importante ya armado que permite que tengamos incidencia en la creación de los productos que van cambiando nuestras vidas", dice Darío Susnisky, coordinador del curso de Desarrollo Web Full Stack.</p>  
</body>
</html>
```