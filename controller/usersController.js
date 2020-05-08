const fs = require('fs');
const path = require('path');
const {check, validationResult,body}=require('express-validator');
const bcrypt = require('bcryptjs');
const usersFilePath = path.join(__dirname,'../data/users.json');
const usersJSON = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

controller ={
    register: function(req, res, next) {
    res.render('register');
    },
    login: function(req, res, next) {
        res.render('login');
    },
    processLogin:function(req,res,next){
      let errors=validationResult(req);
      if(errors.isEmpty()){
          let users;
          if(usersJSON==""){
              users=[];  
          }else{
              users=usersJSON;
          }
          let usuarioALoguearse;
          for(let i=0;i < users.length; i++){
              if(users[i].email == req.body.email){
              //console.log(req.body.password + ' ' + users[i].password);
              let passwordHash=bcrypt.hashSync(users[i].password, 10);
              if(bcrypt.compareSync(req.body.password, passwordHash)){
              if(req.body.password==users[i].password){
              usuarioALoguearse=users[i];
              break;
          }
          }
          }
              //console.log(usuarioALoguearse); 
          if(usuarioALoguearse==undefined){
              return res.render('login',{errors:[
              {msg:"Credenciales inválidas"}
              ]});
              }

          req.session.usuarioLogueado=usuarioALoguearse;
          res.send('Success');
          }
      }else{
          return res.render('login',{errors:errors.errors});
          }
  },
    fanZone: function(req, res) {
    res.render('fanZone');
    }
}

module.exports = controller;