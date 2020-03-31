var express = require('express');
var router = express.Router();

/* GET Product page. */
router.get('/productCart', function(req, res, next) {
  res.render('productCart', req.params.id);
});

router.get('/productDetail', function(req, res, next) {
  res.render('productDetail', req.params.id);
});


module.exports = router;