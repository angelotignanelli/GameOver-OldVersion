
controller= {
  cart: function(req, res, next) {
    res.render('carrito');
  },
  checkout: function(req, res, next) {
    res.render('checkout');
  }
}

module.exports = controller;
