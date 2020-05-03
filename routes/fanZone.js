const express = require('express');
const router = express.Router();

const fanZoneController = require('../controller/fanZoneController');

router.get('/fanZone', fanZoneController.fanZone)

module.exports = router;