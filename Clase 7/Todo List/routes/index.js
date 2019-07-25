const router = require('express').Router();
const itemController = require('../controller/itemController');
const userController = require('../controller/userController');

router.get('/', itemController.todos);
router.get('/login', userController.loginView);
router.get('/registrar', userController.registrarView);

module.exports = router;
