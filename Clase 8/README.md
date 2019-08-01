## Ejercicios Clase 8 - Revisión de Módulos y Proyecto Red Social Intro 
### Teórica: https://mndy.pw/nodeclase8
##### 01/08/2019

---

Continuamos con la etapa final del proyecto completo de un todo list. Revisamos Módulos y presentamos Proyecto de Red Social que queremos realizar.

Vamos a crear un proyecto que permita a los usuarios compartir sus películas favoritas y agregar contenido a su perfil de estas. La gente puede comentar y reaccionar a los reviews de los usuarios en las redes sociales (sólo de manera autenticada). También pueden seguir a sus
‘reviewers’ favoritos para llenar su feed de los reviews de personas que a cada uno le interese.

Los usuarios se crean una cuenta en MovieFeed a través de su cuenta de Google para verificar la existencia de estas personas, por lo que hay que utilizar las credenciales de un proyecto de Google (https://console.developers.google.com/)

Utilizamos MongoDB como base de datos para persistir la información.

Las funcionalidades extras que debe tener la aplicación son:
  - Permitir o no permitir comentarios en la publicación del reviewer (a discreción de este)
  - Al publicar un review el usuario le aplica un ranking y su comentario a la película que es buscada automáticamente del API de http://www.omdbapi.com/ y utilizamos la imagen devuelta, en caso que no, el usuario puede incluir la imagen de poster que deseé.