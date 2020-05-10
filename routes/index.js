const express = require('express');
const router = express.Router();
const indexController = require('../controller/indexController');
const productsController = require('../controller/productsController');

router.get('/', indexController.index);

module.exports = router;
