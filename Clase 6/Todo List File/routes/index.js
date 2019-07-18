const express = require('express');
const router = express.Router();
const itemController = require('../controller/itemController');

router.get('/', itemController.todos);

module.exports = router;

