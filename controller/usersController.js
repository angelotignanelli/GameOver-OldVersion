const fs = require('fs');
const path = require('path');
const { check, validationResult, body } = require('express-validator');
const bcrypt = require('bcryptjs');
const usersFilePath = path.join(__dirname, '../data/users.json');
const usersJSON = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

let admin = usersJSON.filter(function(element) {
    return element.admin;
});



controller = {
    register: function (req, res, next) {
        res.render('register', {
            logeadoUser: req.session.logged,
            users:usersJSON
        });
    },
    createUser: function (req, res, next) {
        
        const errors = validationResult(req)
        if (errors.isEmpty()) {
            let nuevoUsuario = {}
            if (usersJSON == "") {
                nuevoUsuario.id = 1
            } else {
                let ultimoUsuario = usersJSON[usersJSON.length - 1]
                nuevoUsuario.id = ultimoUsuario.id + 1
            }
            if (req.body.password === req.body.password2) {
                console.log('Passwords iguales')
                nuevoUsuario.first_name = req.body.first_name
                nuevoUsuario.last_name = req.body.last_name
                nuevoUsuario.email = req.body.email
                nuevoUsuario.password = bcrypt.hashSync(req.body.password, 10)
                nuevoUsuario.avatar = req.files[0].filename

                usersJSON.push(nuevoUsuario)

                let usuarioAgregadoJSON = JSON.stringify(usersJSON)
                fs.writeFileSync(usersFilePath, usuarioAgregadoJSON)

                res.render('mensaje', {
                    logeadoUser: req.session.logged,
                    mensaje: 'Gracias por registrarse',
                    tipo: 'alert-success',
                    users:usersJSON
                });
            } else {
                console.log('Passwords distintas')
                res.render('mensaje', {
                    logeadoUser: req.session.logged,
                    mensaje: 'Las passwords deben ser iguales',
                    tipo: 'alert-danger',
                    users:usersJSON
                });
            }
        } else {
            return res.render('register', { logeadoUser: req.session.logged, errors: errors.errors })
        }

    },
    login: function (req, res, next) {
        res.render('login', {
            logeadoUser: req.session.logged,
            users:usersJSON,
            admin:admin
        });
    },
    processLogin: function (req, res, next) {
        let errors = validationResult(req);
        
        for (let i = 0; i < usersJSON.length; i++) {
            if (req.body.email == usersJSON[i].email && bcrypt.compareSync(req.body.password, usersJSON[i].password)) {
                req.session.logged = usersJSON[i].email;
                var logeadoUser = req.session.logged;
                //console.log(logeadoUser);
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
    logout: function(req,res,next){
            req.session.destroy() 
            res.redirect('/')
        },
    fanZone: function (req, res) {
        res.render('fanZone', {
            logeadoUser: req.session.logged
        });
    },
    perfilUser: (req, res, next) => {
        

        res.render('perfilUser', {
            users: usersJSON,
            logeadoUser: req.session.logged
        })

    },
    processPerfil: (req, res, next) => {


        let usuarioPerfil = usersJSON.find(function(element){ 
            return element.email == logeadoUser 
        });
        console.log(usuarioPerfil)

        //console.log(usersJSON)
    }
}

module.exports = controller;