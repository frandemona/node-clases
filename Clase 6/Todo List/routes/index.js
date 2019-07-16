const router = require('express').Router();
const itemController = require('../controller/itemController');

router.get('/', itemController.todos);

module.exports = router;
