const router = require('express').Router();
const itemController = require('../controller/itemController');
const userController = require('../controller/userController');
const { estaAutenticado } = require('../helpers/auth');
const {check, validationResult } = require('express-validator');

router.get('/', estaAutenticado, itemController.todos);
router.get('/login', userController.loginView);
router.post('/login', [
  check('email').isEmail(),
  check('password').isLength({ min: 5})
], userController.login);
router.get('/registrar', userController.registrarView);
router.get('/logout', estaAutenticado, userController.logout);

module.exports = router;
