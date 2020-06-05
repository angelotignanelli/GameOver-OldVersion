const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const usersFilePath = path.join(__dirname, '../data/users.json');
const usersJSON = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
controller ={
    index: function(req, res, next) {
      // Do the magic
      let recomendados = products.filter(function(element) {
        return element.section == "Recomendados";
        });
        let vendidos = products.filter(function(element) {
        return element.section == "Vendidos";
        });
        let ofertas = products.filter(function(element) {
        return element.section == "Ofertas";
        });
        let admin = usersJSON.filter(function(element) {
          return element.admin == "admin";
          });
        console.log("logueadoAutomatico: "+ req.cookies.logueadoAutomatico) // Cookie creada en usersController/login
        res.render('index', {
        recomendados: recomendados,
        vendidos: vendidos,
        ofertas: ofertas,
        aMiles: toThousand,
        logeadoUser:req.session.logged,
        users:usersJSON,
        admin:admin
      });
    }
}

module.exports = controller;