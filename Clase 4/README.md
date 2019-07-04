## Ejercicios Clase 4 - Proyecto 1
### Teórica: https://mndy.pw/nodeclase4
##### 04/07/2018

---

Recomendamos utilizar las siguientes librerías para realizar este y los siguientes proyectos. Esto facilitará nuestro desarrollo de aplicativos en Node:
  - nodemon `npm install -g nodemon` o instalarlo al nivel del proyecto `npm install nodemon --save`
  - body-parser: `npm install body-parser --save`

Lo que realizaremos en este proyecto es loguear a un usuario para que acceda con usuario y contraseña por medio de un POST request a su cuenta y se le devuelvan los datos. La información recibida por el usuario debe pasar por distintos middlewares que verifican que se recibió correctamente la información (Parser), que el correo enviado está en formato correcto y bien escrito, que la contraseña tiene al menos 8 caracteres y en caso de que sea correcto redirigir al usuario a una página de su perfil. Utilizar el starter-login project en la carpeta para realizar el proyecto.

Recordar que para recibir un json y sus datos de manera simple se puede usar el middleware de body parser y su método .json() o usar el default de express > 4.16.0 ej: express.json()

Los siguientes comandos indican los errores que debe devolver el proyecto al correrse:
- `curl -d '{"usuario":"info@digitalhouse.com.ar", "clave":"probandoClave5"}' -H "Content-Type: application/json" -X POST http://localhost:3000/login` => Redirige al usuario a una ruta de `/perfil` donde devolvemos datos duros del perfil del usuario: Nombre, Correo, etc como respuesta en una string
- `curl -d '{"usuario":"info@digitalhouse", "clave":"probandoClave5"}' -H "Content-Type: application/json" -X POST http://localhost:3000/login` => Devuelve el error de que el formato del correo está mal escrito
- `curl -d '{"usuario":"info@digitalhouse.com.ar", "clave":"probandoclave"}' -H "Content-Type: application/json" -X POST http://localhost:3000/login` => Devuelve el error de que la contraseña es incorrecta
- `curl -d '{"usuario":"info@digitalhouse.com.ar", "clave":"proban"}' -H "Content-Type: application/json" -X POST http://localhost:3000/login` => Devuelve el error de que la contraseña es muy corta

## Ejercicios Clase 4 - Proyecto 2
### Teórica: https://mndy.pw/nodeclase4
##### 04/07/2018

---

En este segundo proyecto realizaremos un simple todo list recuperando información que guardamos en un archivo de nuestro todo list e ingresando información que subimos a este. Este debe responder para los siguientes requests ingresados a nuestro directorio raíz como un GET, PUT, POST, DELETE.
- Para un GET, debe responder los datos dentro de nuestra lista en formato JSON
- Para un GET a /:id debe responder los datos de nuestra lista y su respectivo ID
- Para un POST, {"nota":"Nueva Nota"} debe publicar la nota enviada en el parametro con la identificación. Responder la lista en formato JSON
- Para un PUT, {"id": "1", "nota":"Nueva Nota"} debe modificar la nota enviada en el parametro con la identificación. Responder la nota modificada en formato JSON
- Para un DELETE, {"id": "1"} debe borrar la nota enviada en el parametro con la identificación. Si esta no existe, responder este mismo error, de lo contrario responder la nota borrada

Recordar utilizar el módulo nativo `fs` para la lectura y escritura de archivos en node dentro de nuestro proyecto.
```js
var fs = require('fs');
 
fs.readFile("todo.txt", (err, data) => {
    if (!err) {
      console.log(data); // Buffer
      console.log(data.toString('utf8')); // String
    }
});

fs.writeFile("todo.txt", "Data a escribir", err => {
  if (!err) {
    console.log("Escrito");
  }
});

fs.appendFile("todo.txt", "Data a adjuntar", err => {
    if (!err) {
        console.log("Adjuntada");
    }
});

```