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
    createUser: function(req,res,next){
        console.log(req.body)
        const errors=validationResult(req)
        if(errors.isEmpty()){
        let nuevoUsuario={}
    if(usersJSON==""){
        nuevoUsuario.id=1
    }else{ 
    let ultimoUsuario=usersJSON[usersJSON.length-1]
    nuevoUsuario.id=ultimoUsuario.id+1
    }
    if(req.body.password === req.body.password2){
        console.log('Passwords iguales')
    nuevoUsuario.first_name=req.body.first_name
    nuevoUsuario.last_name=req.body.last_name
    nuevoUsuario.email=req.body.email
    nuevoUsuario.password=bcrypt.hashSync(req.body.password,10)
    nuevoUsuario.avatar=req.files[0].filename
   
    usersJSON.push(nuevoUsuario)

    let usuarioAgregadoJSON = JSON.stringify(usersJSON)
    fs.writeFileSync(usersFilePath, usuarioAgregadoJSON)

    res.render('mensaje',{
        mensaje:'Gracias por registrarse',
        tipo:'alert-success'
    });
    }else{
        console.log('Passwords distintas')
    res.render('mensaje',{
        mensaje:'Las passwords deben ser iguales',
        tipo:'alert-danger'
    });    
    }
}else{
    return res.render('register',{errors:errors.errors})
}
    
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
              let passwordHash=users[i].password;
              if(bcrypt.compareSync(req.body.password, passwordHash)){
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
      }else{
          return res.render('login',{errors:errors.errors});
          }
  },
    fanZone: function(req, res) {
    res.render('fanZone');
    },
    perfilUser : (req,res,next)=>{
        res.render('perfilUser',{
            users: usersJSON
        })

    }
}

module.exports = controller;