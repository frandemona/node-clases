const Item = require('../models/Item');

module.exports = {
  todos: function (req,res){
    Item
    .find()
    .then(result => {
      res.render('index', {items: result});
    })
    .catch(err => res.json(err));
  },

  crear: function(req,res){
    Item
    .create(req.body)
    .then(result => {
      res.json(result);
    })
    .catch(err => res.json(err));
  },

  encontrarItem: function (req,res){
    Item
    .findOne({_id: req.params.id})
    .then(result => res.render('editar', result))
    .catch(err => res.json(err));
  },

  completar: function (req,res){
    Item
    .findOneAndUpdate({_id: req.params.id}, {completado: true})
    .then(result => res.json(result))
    .catch(err => res.json(err));
  },

  borrarItem: function (req,res){
    Item
    .deleteOne({_id: req.params.id})
    .then(result => res.json(result))
    .catch(err => res.json(err));
  },

  actualizarNombre: function (req,res){
    Item
    .findOneAndUpdate({_id: req.body.id}, {item: req.body.item})
    .then(result => res.json(result))
    .catch(err => res.json(err));
  }
}

