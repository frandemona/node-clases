## Ejercicios Clase 2 - Node
### Teórica: https://mndy.pw/nodeclase2
##### 13/06/2018

---

1. Suponiendo que ya ha instalado Node.js, cree un directorio  que contenga la aplicación y conviértalo en el directorio de trabajo utilizando el comando `npm init`, el proyecto utiliza `app.js` como archivo de entrada.

2. En app.js requerir otro archivo llamado calculadora.js Cuando llamamos a app.js, debemos mostrar en la consola lo siguiente: `La suma de 3 y 7 es: 10. La multiplicación de 3 y 7 es: 21`. app.js solo debe mostrar en la consola el resultado de llamar a las funciones suma y multiplicación. Estos métodos deben definirse (y exportarse) en calculator.js 

3. Cree un aplicativo de node que le indique la hora y fecha actuales. También el tiempo en días que falta para navidad.

4. Utilizando el módulo nativo 'http' instancie un servidor rapidamente que responda en texto plano 'Hola Mundo!' en el puerto 3000

5. Hacer un archivo que contenga algún contenido. Escriba un programa que pueda leer el archivo del directorio actual y enviarlo a la consola. Podemos acceder al sistema de archivos utilizando el módulo fs. Esto nos da métodos para leer y escribir en un archivo. 
```js
var fs = require('fs');
```

6. Utilizando el modulo fs. Escriba un aplicativo que cree un archivo.txt con el texto pasado como parámetro. Un ejemplo del comando al que debería de responder y realizar correctamente la tarea sería:
```js
node app.js "A wan, a tú, awántamelatú."
// Utilizar función process.argv para leer parametros
```

7. Mejorar el ejercicio sumando otro parametro el cual le da el nombre al archivo. Ejemplo:
```js
node app.js miTexto.txt "A wan, a tú, awántamelatú."
```

8. En el ejercicio anterior asumimos que el archivo existía. Extienda el aplicativo como para que detecte el caso que el archivo no existe y responda con un error 404.

9.  Escribir un aplicativo que busque información en un archivo archivo.txt y le devuelva la cantidad de coincidencias exactas que encuentra. Si busca la palabra "Digital", debería de devolver 1. Sugerencia: Se puede intentar guardar todos los datos en una matriz y compararlos con la búsqueda. El archivo debe contener el siguiente texto.
```
La Argentina, se suele decir, es tierra de talentos. Vanidad o no, en lo que respecta a la industria informática esa máxima está más cerca de cumplirse que de ser una falacia. Dado el potencial, la cuestión pasa entonces por no dormirse en los laureles y seguir desarrollándolo. Así lo entienden por lo menos quienes llevan las riendas de Digital House, el primer coding school de clase mundial del país que, a través de cursos de programación intensivos, está formando a las nuevas generaciones de profesionales digitales. Además, aspira a constituirse en un gran polo de conocimiento, en el cual los miembros de la comunidad puedan poner en marcha sus emprendimientos digitales.

"Nuestro país funciona como fuente de desarrolladores para todo el mundo. Ya sea en la industria nacional como en empresas del exterior. Por eso, tiene un camino importante ya armado que permite que tengamos incidencia en la creación de los productos que van cambiando nuestras vidas", dice Darío Susnisky, coordinador del curso de Desarrollo Web Full Stack.
```

10.  Crear un archivo config.js que tiene las configuraciones de nuestro aplicativo, como credenciales de la base de datos y puertos. Este archivo debería de usar diferentes credenciales dependiendo del entorno en el que se ejecuta la aplicación (producción o desarrollo). Luego exportar este archivo para que pueda ser llamado por app.js e imprimir el objeto de config en este archivo.
```js
// Se utiliza process.env.NODE_ENV para saber en que entorno se está corriendo el aplicativo
```