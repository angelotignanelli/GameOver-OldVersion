// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controller/productsController');

//*TODOS LOS PRODUCTOS */
router.get('/', productsController.allProducts); /* GET - All products */

router.get('/detail/:productId/', productsController.detail); /* GET - Product detail */

/*** CREATE ONE PRODUCT ***/ 
//router.get('/create/', productsController.create); /* GET - Form to create */
//router.post('/create/', productsController.store); /* POST - Store in DB */

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/products', productsController.edit); /* GET - Form to create */
router.put('/edit/:productId', productsController.update); /* PUT - Update in DB */

/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:productId', productsController.destroy); /* DELETE - Delete from DB */

/* CHECKOUT PRODUCT */
router.get('/checkout',productsController.checkout);
/* CART PRODUCT */
router.get('/productcart',productsController.cart);
//CARRITO
router.post('/products/productcart',productsController.cartProcess);

module.exports = router;

