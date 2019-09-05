const express = require('express');
const router = express.Router();
const monggose = require('mongoose');

router.get('/', (req, res) => {
  res.render('index/bienvenido');
})

module.exports = router;