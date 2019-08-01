const express = require('express');
const jwt = require('jsonwebtoken');
const exjwt = require('express-jwt');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use ((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
  next();
})

const jwtMW = exjwt({
  secret: 'owI6ZAlG30'
});

// Emulando DB
let users = [
  {
      id: 1,
      email: 'test@msn.com',
      password: 'asdf123'
  },
  {
      id: 2,
      email: 'test2@gmail.com',
      password: 'asdf12345'
  }
];

app.post('/login', (req, res) => {
  // const email = req.body.email;
  // /const password = req.body.password;
  const { email, password } = req.body
  console.log( email );
  for(let user of users) {
    if (email === user.email && password === user.password) {
      let token = jwt.sign({ id: user.id, email: user.email }, 'owI6ZAlG30', { expiresIn: 129600 });
      res.json({
        success: true,
        err: null,
        token
      });
      break;
    }
  }
  res.status(401).json({
    success: false,
    err: 'Usuario o contraseña es incorrecta',
    token: null
  })
});

app.get('/', jwtMW, (req, res) => {
  res.send('Estás autenticado');
});

app.use(function(err, req, res, next) {
  if ( err.name === 'UnauthorizedError') {
    res.status(401).send(err);
  } else {
    next(err);
  }
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Puerto abierto en: ${PORT}`);
});