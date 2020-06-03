const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
controller = {
  admin: function (req, res, next) {
    res.render('admin');
  },
  product: (req, res, next) => {
    res.render('addproduct')
  },
  addProduct: function (req, res, next) {
    let nuevoProducto = {}
    if (products == "") {
      nuevoProducto.id = 1
    } else {
      let ultimoProducto = products[products.length - 1]
      nuevoProducto.id = ultimoProducto.id + 1
    }

    nuevoProducto.name = req.body.name
    nuevoProducto.release_date = req.body.release_date
    nuevoProducto.age = req.body.age
    nuevoProducto.price = req.body.price
    nuevoProducto.category = req.body.category
    nuevoProducto.developer = req.body.developer
    nuevoProducto.distributor = req.body.distributor
    nuevoProducto.platform = req.body.platform
    nuevoProducto.section = req.body.section
    nuevoProducto.image = req.files[0].filename


    //res.send(nuevoProducto)
    products.push(nuevoProducto)

    let productosModificadosJSON = JSON.stringify(products)
    fs.writeFileSync(productsFilePath, productosModificadosJSON)
    res.redirect('/products')
  },
  editProduct: function (req, res, next) {
    res.render('editProduct', {
      products: products
    });
  },
  detailEdit: (req, res, next) => {
    var product = products.find(function(element) {
      return element.id == req.params.id;
        });
        console.log(product)

    res.render('processEditProduct',{
      producto:product
    })
  },
  processEdit: (req, res, next) => {

  }
}

module.exports = controller;