const express = require('express');
const router = express.Router();
const path = require('path');
var multer = require('multer');
const adminController = require('../controller/adminController');

//USANDO MULTER
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images/product-games/')
    },
    filename: function (req, file, cb) {    
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })

  var upload = multer({ storage: storage })


router.get('/', adminController.admin);
//AGREGAR PRODUCTO
router.get('/addProduct', adminController.product);
router.post('/addProduct',upload.any(),adminController.addProduct)
//LISTADO DE PRODUCTOS A EDITAR
router.get('/editProduct', adminController.editProduct);
//VISTA DE PRODUCTO A EDITAR
router.get('/editProduct/detail/:id', adminController.detailEdit);
router.post('/editProduct/detail/:id', adminController.processEdit);
//LISTADO DE PRODUCTOS A ELIMINAR
router.get('/deleteProduct',adminController.deleteProduct);
//ELIMINAR PRODUCTO
router.post('/deleteProduct/:id',adminController.deleteProcess);
module.exports = router;
