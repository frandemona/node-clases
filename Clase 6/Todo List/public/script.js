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
  
});