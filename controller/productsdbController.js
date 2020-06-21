let db = require("../database/models");

let productsdbController = {

    //Creado
    crear: function(req,res) {
        db.Game.findAll()
        .then(function(juegos){
            return res.render("1creacionPeliculas", {juegos:juegos})
        })
    },
/*
    //Guardado
    guardado: function(req, res) {
        db.Pelicula.create({
            title: req.body.titulo,
            awards: req.body.premios,
            release_date: req.body.fecha_estreno,
            genre_id: req.body.genero,
            length: req.body.duracion,
            rating: req.body.rating
        });
        res.redirect("/peliculas");
    },

    //Listado
    listado: function(req,res) {
        db.Pelicula.findAll()
        .then(function(peliculas) {
            res.render("2listadoPeliculas", {peliculas:peliculas})
        })
    },

    //Detalle
    detalle: function(req,res) {
        db.Pelicula.findByPk(req.params.id, {
            include: [{association: "genero"}, {association: "actores"}]
        })
        .then(function(pelicula){
            res.render("3detallePelicula", {pelicula:pelicula})
        })
    },

    //Editado
    editar: function(req,res) {
        let pedidoPelicula = db.Pelicula.findByPk(req.params.id);
        
        let pedidoGeneros = db.Genero.findAll();

        Promise.all([pedidoPelicula, pedidoGeneros])
            .then(function([pelicula, generos]) {
                res.render("4editarPelicula", {pelicula:pelicula, generos:generos});
            })
    },

    //Modificado
    actualizar: function(req,res) {
        db.Pelicula.update({
            title: req.body.titulo,
            awards: req.body.premios,
            release_date: req.body.fecha_estreno,
            genre_id: req.body.genero,
            length: req.body.duracion,
            rating: req.body.rating
        }, {
            where: {
                id: req.params.id
            }
        });
        res.redirect("/peliculas/" + req.params.id);
    },

    //Borrado
    borrar: function(req,res){
        db.Pelicula.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect("/peliculas");
    }
*/
}

module.exports = productsdbController;