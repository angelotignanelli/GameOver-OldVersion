const express = require('express');
const router = express.Router();
const {check, validationResults, body} = require ('express-validator');

const usersController = require('../controller/usersController');


router.get('/register', usersController.register);

router.post('/register', [
    check('first_name').isEmpty().withMessage("Este campo es obligatorio"),
    check('last_name').isEmpty().withMessage("Este campo es obligatorio"),
    check('age').isNumeric().withMessage("Debe ser un numero"),
    check('password').isAlphanumeric().isLength({min:8, max:15}).withMessage("El password ser alfanumérico, mínimo 8 caracteres y máximo 15"),
    //check('avatar').isEmpty(). withMessage("Debes elegir un Avatar")
],usersController.createUser);

router.get('/login', usersController.login);

router.post('/login', [
    check('email').isEmail().withMessage("El E-mail es inválido"),
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