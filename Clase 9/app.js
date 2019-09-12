const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');

// Cargamos Modelos
require('./models/User');
require('./models/Reviews');

// Configuración Passport
require('./config/passport')(passport);

// Cargar Rutas
const index = require('./routes/index');
const auth = require('./routes/auth');
const reviews = require('./routes/reviews');

const keys = require('./config/keys');

const {
  truncate,
  stripTags,
  changeStatusLang,
  formatDate,
  select,
  editIcon
} = require('./helpers/hbs');

// Conexión Mongoose
mongoose.connect(keys.mongoURI, {
  useMongoClient: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB error de conexión:'));
db.once('open', () => {
  console.log("MongoDB se conectó");
});

const app = express();

// PArsing Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Method Override Middleware
app.use(methodOverride('_method'));

// /Handlebar Middleware
app.engine('handlebars', exphbs({
  helpers: {
    truncate: truncate,
    stripTags: stripTags,
    formatDate: formatDate,
    changeStatusLang: changeStatusLang,
    select: select,
    editIcon: editIcon
  },
  defaultLayout: 'main'
}))
app.set('view engine', 'handlebars');

// Express Session Middleware
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Seteo de Variable Global
app.use((req, res, next) => {
  res.locals.user = req.user || null;
  next();
});

app.use(express.static(path.join(__dirname, 'public')));

// Usar Rutas
app.use('/', index);
app.use('/auth', auth);
app.use('/reviews', reviews);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${ port }`);
});