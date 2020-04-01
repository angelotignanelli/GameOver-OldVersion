var express = require('express');
var router = express.Router();

/* GET Home */
router.get('/home', function(req, res, next) {
  res.render('home');
});

/* GET Product page. */
router.get('/productCart', function(req, res, next) {
  res.render('productCart');
});

router.get('/productDetail', function(req, res, next) {
  res.render('productDetail');
});
router.get('/productdetalle', function(req, res, next) {
  res.render('productdetalle');
});
/* GET PANEL ADMIN */
router.get('/admin', function(req, res, next) {
  res.render('admin');
});


module.exports = router;