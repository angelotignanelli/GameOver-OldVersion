var express = require('express');
var router = express.Router();
const productsdbController = require('../controller/productsdbController');


//Creación
router.get("/crear", productsdbController.crear);
router.post("/crear", productsdbController.guardado);

//Lectura
router.get("/DBProducts", productsdbController.listado);

//Detalle
router.get("/:id", productsdbController.detalle);

//Actualización
router.get("/editar/:id", productsdbController.editar);
router.post("/editar/:id", productsdbController.actualizar);
/*
//Borrado
router.post("/borrar/:id", productsdbController.borrar);
*/

module.exports = router;