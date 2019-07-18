// Dependencias
const express = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

const index = require('./routes/index');
// const api = require('./routes/api');

app.use('/', index);
// app.use('/api', api);

const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log(`Servidor en puerto ${PORT}`);
});

