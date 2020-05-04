const express = require('express');
const router = express.Router();
const usersController = require('../controller/usersController');

router.get('/register', usersController.register);
router.get('/login', usersController.login);
router.get('/fanzone', usersController.fanZone)


module.exports = router;