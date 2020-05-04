controller ={
    login: function(req, res, next) {
        res.render('login');
      },
    register: function(req, res, next) {
        res.render('register');
      },
    fanZone: function(req, res) {
    res.render('fanZone');
    }
}

module.exports = controller;