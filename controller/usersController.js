const fs = require('fs');
const path = require('path');
const { check, validationResult, body } = require('express-validator');
const bcrypt = require('bcryptjs');
const usersFilePath = path.join(__dirname, '../data/users.json');
const usersJSON = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const db = require('../database/models');
const sequelize = db.sequelize;


let admin = usersJSON.filter(function(element) {
    return element.admin;
});



controller = {
    //REGISTRO
    register: function(req, res, next) {
        res.render('register', {
            logeadoUser: req.session.logged,
            users: usersJSON
        });
    },
    //REGISTRO PROCESO
    createUser: function(req, res, next) {
        const errors = validationResult(req)
        if(errors.isEmpty()){
            db.users.create({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                avatar: req.files[0].filename
            })
        }else{
            res.render('register',{
                errors:errors.errors,
                users: usersJSON,
                logeadoUser: req.session.logged
            })
        }

        res.redirect('/')







    },
    login: function(req, res, next) {
        res.render('login', {
            logeadoUser: req.session.logged,
            users: usersJSON,
            admin: admin
        });
    },
    processLogin: function(req, res, next) {
        let errors = validationResult(req);

        for (let i = 0; i < usersJSON.length; i++) {
            if (req.body.email == usersJSON[i].email && bcrypt.compareSync(req.body.password, usersJSON[i].password)) {
                req.session.logged = usersJSON[i].email;
                var logeadoUser = req.session.logged;
                //console.log(logeadoUser);
                res.cookie('logueadoAutomatico', usersJSON[i].email) // Cookie cuando se loguea el usuario
            }
        }
        res.redirect('/')
        if (logeadoUser == undefined) {
            return res.render('login', {
                errors: [
                    { msg: "Credenciales inválidas" }
                ]
            });
        }
    },
    logout: function(req, res, next) {
        req.session.destroy()
        res.redirect('/')
    },
    fanZone: function(req, res) {
        res.render('fanZone', {
            logeadoUser: req.session.logged,
            users: usersJSON,
        });
    },
    perfilUser: (req, res, next) => {


        res.render('perfilUser', {
            users: usersJSON,
            logeadoUser: req.session.logged
        })

    },
    processPerfil: (req, res, next) => {
        let usuarioPerfil = usersJSON.find(function(element) {
            return element.email == logeadoUser
        });
        console.log(usuarioPerfil)
    },
    processEditPerfil: (req, res, next) => {
        res.send('Editado', {
            logeadoUser: req.session.logged

        })
    },
}

module.exports = controller;