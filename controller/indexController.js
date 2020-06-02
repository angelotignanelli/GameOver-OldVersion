const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
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
        res.render('index', {
        recomendados: recomendados,
        vendidos: vendidos,
        ofertas: ofertas,
        aMiles: toThousand,
        logeadoUser:req.session.logged,
      });
    }
}

module.exports = controller;