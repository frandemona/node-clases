// Dependencias
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const session = require('express-session');
const passport = require('passport');

const app = express();

// Configuración de Passport
require('./config/passport')(passport);

// Inicializamos la DB
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/todoDB';
mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useFindAndModify: false });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB error de conexión:'));
db.once('open', function() {
  console.log('MongoDB se conectó!');
});

// Inicializamos el middleware para procesar data codificada en application/json
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Inicializamos handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Inicializamos nuestros archivos estáticos con su directorio
app.use(express.static(path.join(__dirname, 'public')));

// Express Session Middleware
app.use(session({
  secret: 'secreto',
  resave: true,
  saveUninitialized: true
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Variable Global
app.use(function(req, res, next) {
  res.locals.user = req.user || null;
  next();
});

// Cargamos las rutas en nuestra carpeta de rutas
const index = require('./routes/index');
const api = require('./routes/api');
// const users = require('./routes/users');

app.use('/', index);
app.use('/api', api);
// app.use('/users', users);

// Inicializamos el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
  console.log('Servidor en puerto', PORT);
});