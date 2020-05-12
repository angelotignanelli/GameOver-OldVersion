controller ={
    admin: function(req, res, next) {
        res.render('admin');
      },
    addProduct: function(req, res, next) {
        res.render('addProduct');
      },
    editProduct: function(req, res, next) {
        res.render('editProduct');
      }
}

module.exports = controller;