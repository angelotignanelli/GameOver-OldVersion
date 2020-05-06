const express = require('express');
const router = express.Router();

const adminController = require('../controller/adminController');

router.get('/', adminController.admin);
router.get('/addProduct', adminController.addProduct);

module.exports = router;
