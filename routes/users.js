const express = require('express');
const router = express.Router();
const path = require('path');
var multer = require('multer');
const {check, validationResults, body} = require('express-validator');
const usersController = require('../controller/usersController');


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images/img-perfil')
    },
    filename: function (req, file, cb) {    
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })

  var upload = multer({ storage: storage })





router.get('/register', usersController.register);
router.get('/perfil', usersController.perfilUser)
router.post('/register',upload.any() ,[
    check('first_name').isAlpha().withMessage("El nombre es obligatorio"),
    check('last_name').isAlpha().withMessage("El apellido es obligatorio"),
    check('email').isEmail().withMessage("Debe ser un email"),
    check('password').isAlphanumeric().isLength({min:8, max:15}).withMessage("El password debe ser alfanumérico, mínimo 8 caracteres y máximo 15")
    //check('avatar').isEmpty(). withMessage("Debes elegir un Avatar")
],usersController.createUser)

router.get('/login', usersController.login);

router.post('/login', [
    check('usuario').isEmail().withMessage("El E-mail es inválido"),
    check('password').isLength({min:8}).withMessage("El password debe tener como mínimo 8 caracteres")],
    usersController.processLogin);
    
router.get('/check', function(req,res){
    if(req.session.usuarioLogueado == undefined){
        res.send("No estás logueado");
    }else{
        res.send("El usuario logueado es" + req.session.usuarioLogueado.email)
    }
});
router.get('/fanzone', usersController.fanZone)


module.exports = router;