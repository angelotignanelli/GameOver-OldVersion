const express = require('express');
const router = express.Router();

const adminController = require('../controller/adminController');

router.get('/admin', adminController.admin);

module.exports = router;
