const router = require('express').Router();
const itemController = require('../controller/itemController');

router
  .route('/item/:id')
  .put(itemController.completar)
  .delete(itemController.borrarItem);

router.post('/crear', itemController.crear);

router.post('/actualizar', itemController.crear);

module.exports = router;