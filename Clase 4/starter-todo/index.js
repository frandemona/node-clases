var express = require('express');
var fs = require('fs');

var app = express();

app.get('/', (req, res) => {
  
  fs.readFile("todo.txt", (err, data) => {
    if (!err) {
      console.log(data.toString('utf8')); // String
    } else {
      console.log(err);
    }
  });
  res.send('Todo App');
});

app.listen(3000, () => {
  console.log('Escuchando Puerto localhost:3000');
});