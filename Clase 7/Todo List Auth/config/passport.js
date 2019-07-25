const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

module.exports = function(passport){
  passport.use(new LocalStrategy({usernameField: 'email'}, (email, password, done) => {
    // Buscamos Usuario
    User.findOne({
      email: email
    }).then(user => {
      if(!user){
        return done(null, false, {message: 'No se encontró un usuario'});
      } 

      // Verificamos Contraseña
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if(err) throw done(err);
        if(isMatch){
          return done(null, user);
        } else {
          return done(null, false, {message: 'Contraseña Erronea'});
        }
      });
    })
    .catch(err => done(err));
  }));

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      if (err) { return done(err); }
      done(null, user);
    });
  });
}