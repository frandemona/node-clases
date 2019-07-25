const router = require('express').Router();
const itemController = require('../controller/itemController');
const userController = require('../controller/userController');

router
  .route('/item/:id')
  .get(itemController.encontrarItem)
  .put(itemController.completar)
  .delete(itemController.borrarItem);

router.post('/crear', itemController.crear);

router.post('/crearUsuario', userController.crear);

router.post('/actualizar', itemController.actualizarNombre);

module.exports = router;