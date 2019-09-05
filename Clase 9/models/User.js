const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Creación del Esquema
const UserSchema = new Schema({
  googleID: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  image: {
    type: String
  }
});

//Crear colección y sumar esquema
mongoose.model('users', UserSchema);