const express = require('express');
const router = express.Router();

const loginController = require('../controller/loginController');

router.get('/login', loginController.login);
router.get('/registry', loginController.register);

module.exports = router;