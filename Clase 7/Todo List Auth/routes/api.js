const router = require('express').Router();
const itemController = require('../controller/itemController');
const userController = require('../controller/userController');
const { estaAutenticado } = require('../helpers/auth');

router
  .route('/item/:id', estaAutenticado)
  .get(itemController.encontrarItem)
  .put(itemController.completar)
  .delete(itemController.borrarItem);

router.post('/crear', estaAutenticado, itemController.crear);

router.post('/actualizar', estaAutenticado, itemController.actualizarNombre);

router.post('/crearUsuario', userController.crear);

router.post('/login', userController.login);

module.exports = router;