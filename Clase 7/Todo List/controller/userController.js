const bcrypt = require('bcryptjs');
const User = require('../models/User');


module.exports = {
  loginView: function(req, res) {
    res.render('users/login');
  },
  registrarView: function(req, res) {
    res.render('users/registrar');
  },
  login: function (req, res) {
    
  },
  crear: function (req, res) {
    if (req.body.password !== req.body.password2) {
      res.json({error: 'Las contraseñas son diferentes'});
    } else if (req.body.password.length < 4) {
      res.json({error: 'La contraseña elegida es muy corta, debe tener como mínimo 4 caracteres'});
    } else {
      User.findOne({email: req.body.email})
        .then(user => {
          if (user) {
            res.json({error: 'El usuario ya existe'});
          } else {
            bcrypt.genSalt(10, (err, salt) => {
              bcrypt.hash(req.body.password, salt, (err, hash) => {
                if (err) throw err;
                req.body.password = hash;
                User.create(req.body)
                  .then(user => {
                    res.json(user);
                  })
                  .catch(err => res.json({error: err}));
              })
            })
          }
        })
    }
  }
}