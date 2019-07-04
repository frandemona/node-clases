var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('Login App');
});

app.listen(3000, function () {
  console.log('Escuchando Puerto localhost:3000');
});