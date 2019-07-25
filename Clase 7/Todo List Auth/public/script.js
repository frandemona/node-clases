$(document).ready(function (){
  function crearTodoItem(e) {
    e.preventDefault();
    
    let itemInput = $('#item'),
        input = itemInput.val().trim(),
        item;

    if (input !== '') {
      item = {
        item: input
      };
      
      itemInput.val('');
      $.ajax({
        url: '/api/crear',
        type: 'POST',
        data: item,
        success: function (response){
          window.location.href = '/';  
        },
        error: function (err){
          console.log(err);
        }
      });
    } 
  }

  function editarTodoItem(e, id){
    e.preventDefault();
  
    let itemInput = $('#editarItem'),
        input = itemInput.val().trim(),
        item;
  
    if (input !== '') {
      item = {
        item: input,
        _id: id
      }
      
      itemInput.val('');
      $.ajax({
        url: '/api/actualizar',
        type: 'POST',
        data: item,
        success: function (response){
          window.location.href = '/';  
        },
        error: function (err){
          console.log(err);
        }
      });
    }
  }

  $('#crear').on('click', function(e){
    crearTodoItem(e);
  });

  // Sumamos item cuando el usuario presiona enter
  $('#item').keypress(function(e){
    if (e.key === 'Enter'){
      crearTodoItem(e);
    }
  });

  // Modifica el item a completado al hacerle click
  $('.completo').on('click', function (e){
    e.preventDefault();
    let id = $(this).data('id');
    $.ajax({
      url: 'api/item/'+id,
      method: 'PUT',
      success: function (result){
        location.reload();
      },
      error: function (err){
        console.log(err);
      }
    });
  });

  $('.borrar').on('click', function(e){
    let id = $(this).data('id');
    let remove = confirm('Seguro que querés borrarlo? Todavía está incompleto.');
    if (remove){
      $.ajax({
        url: 'api/item/'+id,
        type: 'DELETE',
        success: function (response){
          location.reload();
        },
        error: function (err){
          console.log(err);
        }
      });
    }
  });

  // Evento que borra las tareas completadas
  $('.borrar-completado').on('click', function(e){
    let id = $(this).data('id');
    $.ajax({
      url: 'api/item/'+id,
      type: 'DELETE',
      success: function (response){
        location.reload();
      },
      error: function (err){
        console.log(err);
      }
    });
  });

  // Carga la página para editar una tarea
  $('.editar').on('click', function(e){
    let id = $(this).data('id');
    window.location.href = '/api/item/'+ id;
  });

  // Evento para editar item
  $('#editar').on('click', function(e){
    let id = $(this).data('id');
    editarTodoItem(e, id);
  });

   // Enter para editar item
  $('#editarItem').keypress(function(e){
    let id = $('#editarItem').data('id');
    if (e.key === 'Enter'){
      editarTodoItem(e, id);
    }
  });

  $('#registrarse').on('click', function(e){
    e.preventDefault();
    $( ".alert" ).remove();
  
    let nameInput = $('#name'),
        name = nameInput.val().trim(),
        emailInput = $('#email'),
        email = emailInput.val().trim(),
        passwordInput = $('#password'),
        password = passwordInput.val(),
        password2Input = $('#password2'),
        password2 = password2Input.val(),
        user;

    if (password !== password2) {
      $('.form').prepend('<div class="alert alert-danger" role="alert">Las contraseñas son diferentes</div>');
      return;
    }

    if (password.length < 4) {
      $('.form').prepend('<div class="alert alert-danger" role="alert">La contraseña elegida es muy corta, debe tener como mínimo 4 caracteres</div>');
      return;
    }
  
    if (name !== '' && email !== '') {
      user = {
        name: name,
        email: email,
        password: password,
        password2: password2,
      };
      
      nameInput.val('');
      emailInput.val('');
      passwordInput.val('');
      password2Input.val('');
      $.ajax({
        url: '/api/crearUsuario',
        type: 'POST',
        data: user,
        success: function (response){
          if (response.error) {
            $('.form').prepend('<div class="alert alert-danger" role="alert">' + response.error + '</div>');
          } else {
            window.location.href = '/login';
          }
        },
        error: function (err) {
          console.log(err);
        }
      });
    } else {
      $('.form').prepend('<div class="alert alert-danger" role="alert">Verifique haber completado los campos</div>');
      return;
    }
  });
  
});