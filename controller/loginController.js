controller ={
    login: function(req, res, next) {
        res.render('login');
      },
    register: function(req, res, next) {
        res.render('registry');
      }
}

module.exports = controller;