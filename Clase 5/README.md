## Ejercicios Clase 5 - Handlebars Express
### Teórica: https://mndy.pw/nodeclase5
##### 11/07/2018

---

Como correr los ejemplos de archivos Handlebars

```sh
$ cd Clase\ 5/basico/
$ npm install
$ npm start
```

1. Correr el ejemplo básico del proyecto de HandleBars, crear una ruta a `/nosotros` que devuelva el código html
```js
<h1>Ejemplo de Aplicación: Nosotros</h1>
```

2. Modificar el código del proyecto `básico` como para que la aplicación cargue el nombre de la página en la que se encuentra. Ejemplos en `/home` que devuelva
```html
<title>Home</title>
```

3. En un framework como WordPress, a cada página en la etiqueta `body` se le incluye una clase con el nombre de la página que se está editando. Sumar a nuestra plantilla la misma funcionalidad de poner la clase con el nombre de nuestra página que estamos cargando. Ejemplo para `/home`
```html
<body class="home"></body>
```

4. Dentro de nuestra plantilla de `home` mostrar el listado de las siguientes personas dentro de sus respectivos tags html (ul, li) y con un loop de handlebars 
```js
{
  personas: [
    {nombre: "Raul", apellido: "De Pablo"},
    {nombre: "Carlos", apellido: "Martinez"},
    {nombre: "Axel", apellido: "Rodriguez"}
  ]
}
```

5. Sumar a nuestra plantilla una vista parcial de un footer básico con información de copyright de nuestra web.
```html
<footer><p>Copyright © 2019. Hecho por Mondey</p></footer>
```

6. Dentro de nuestra aplicación querémos crear una ruta `/contador` que cada vez que se ejecute con una llamada POST modifique un archivo contador.txt y sume las veces que se ejecutó POST a esta ruta. De la misma manera a esta ruta queremos leer este archivo y devolver el número de veces que se ejecutó POST a esta ruta.

7. Dentro de nuestra aplicación querémos crear una ruta `/abc` que cada vez que se ejecute con una llamada PUT agregue la siguiente letra del abecedario que debería de ir en un archivo abc.txt. Ejemplo del archivo:
```js
abcdefghijklmnopqrstuvwxyzabcdefgh
```

8. Estamos buscando saber cual es la ruta al archivo server.js cuando cargamos la ruta `/server`. Hacer que un request GET la devuelva

9. Sabemos que nuestro archivo server.js se encuentra en cierta ruta, pero queremos saber si este es un sistema POSIX o Windows, escribir una ruta `/os` que con un request GET devuelva el tipo de sistema donde está alojado nuestro servidor utilizando el módulo `path` y alguna de sus funciones.

10.  Crear una ruta POST que nos permita subir una imagen de perfil que luego podemos visualizar al realizar un GET a la ruta `/perfil`