const router = require('express').Router();
const itemController = require('../controller/itemController');
const userController = require('../controller/userController');
const { estaAutenticado } = require('../helpers/auth');

router.get('/', estaAutenticado, itemController.todos);
router.get('/login', userController.loginView);
router.post('/login', userController.login);
router.get('/registrar', userController.registrarView);
router.get('/logout', estaAutenticado, userController.logout);

module.exports = router;
