const express = require('express');
const router = express.Router();
const {check, validationResults, body} = require ('express-validator');

const usersController = require('../controller/usersController');


router.get('/register', usersController.register);
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