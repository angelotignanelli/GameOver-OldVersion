const express = require('express');
const router = express.Router();

const checkoutController = require('../controller/checkoutController');

router.get('/productCart', checkoutController.cart);
router.get('/checkout', checkoutController.checkout);

module.exports = router;