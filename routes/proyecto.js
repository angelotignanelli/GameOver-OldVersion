var express = require('express');
var router = express.Router();

/* GET Home */
router.get('/home', function(req, res, next) {
  res.render('home');
});
router.get('/prueba', function(req, res, next) {
  res.render('prueba');
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
router.get('/productdetalle2', function(req, res, next) {
  res.render('productdetalle2');
});
/* GET PANEL ADMIN */
router.get('/admin', function(req, res, next) {
  res.render('admin');
});


module.exports = router;