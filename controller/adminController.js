controller ={
    admin: function(req, res, next) {
        res.render('admin');
      },
    addProduct: function(req, res, next) {
        res.render('addProduct');
      }
}

module.exports = controller;