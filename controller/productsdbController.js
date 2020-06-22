let db = require("../database/models");

let productsdbController = {

    //Creado
    crear: function(req,res) {
        db.Game.findAll()
        .then(function(juegos){
            console.log(juegos)
            return res.render("DBaddProduct", {juegos:juegos})
        })
    },

    //Guardado
    guardado: function(req, res) {
        db.Game.create({
            name: req.body.name,
            logo: req.body.logo,
            description: req.body.description,
            image: req.body.image,
            video: req.body.video,
            discount: req.body.discount,
            release_date: req.body.release_date,
            age_clasification: req.body.age_clasification,
            price: req.body.price,
            category_id: req.body.category_id,
            distributor_id: req.body.distributor_id,
            section_id: req.body.section_id,
        });
        console.log(req.body);
        res.redirect("/products");
    },
/*
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