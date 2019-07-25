// Dependencias
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const passport = require('passport');

// Configuración de Passport
require('./config/passport')(passport);

// Inicializamos DB
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/todoDB';
mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useFindAndModify: false});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB error de conexión:'));
db.once('open', function() {
  console.log('MongoDB se conecto!');
});

// Inicializamos el middleware para procesar data codificada en application/json
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Inicializamos handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Inicializamos nuestros archivos estáticos con su directorio
app.use(express.static(path.join(__dirname, 'public')));

// Cargamos las rutas en nuestra carpeta de rutas
const index = require('./routes/index');
const api = require('./routes/api');

app.use('/', index);
app.use('/api', api);

// Inicializamos el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
  console.log('Servidor en puerto', PORT);
});