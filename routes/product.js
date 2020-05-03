const express = require('express');
const router = express.Router();

const productController = require('../controller/productController');

router.get('/product', productController.detail);

module.exports = router;