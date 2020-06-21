const express = require('express');
const router = express.Router();
const path = require('path');
var multer = require('multer');
const { check, validationResults, body } = require('express-validator');
const usersController = require('../controller/usersController');

//USANDO MULTER
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/img-perfil')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})
var upload = multer({ storage: storage })




/*********RUTAS*********/

//REGISTRACION
router.get('/register', usersController.register);
router.post('/register', upload.any(), [
  check('first_name').isAlpha().withMessage("El nombre es obligatorio"),
  check('last_name').isAlpha().withMessage("El apellido es obligatorio"),
  check('email').isEmail().withMessage("Debe ser un email"),
  check('password').isAlphanumeric().isLength({ min: 8, max: 15 }).withMessage("El password debe ser alfanumérico, mínimo 8 caracteres y máximo 15"),
  //check('avatar').notEmpty().withMessage("Debes elegir un Avatar")
], usersController.createUser)

//LOGIN
router.get('/login', usersController.login);
router.post('/login', [
  check('usuario').isEmail().withMessage("El E-mail es inválido"),
  check('password').isLength({ min: 8 }).withMessage("El password debe tener como mínimo 8 caracteres")],
  usersController.processLogin);

//lOGOUT
router.get('/logout', usersController.logout);

//PERFIL DE USUARIO
router.get('/perfilUser', usersController.perfilUser);
router.post('/perfilUser', usersController.processPerfil);
router.post('/perfilUser',upload.any(), usersController.processEditPerfil);

//FAN ZONE
router.get('/fanzone', usersController.fanZone)




module.exports = router;