let db = require("../database/models");

let productsdbController = {

    //Creado
    crear: function(req,res) {
        db.Section.findAll()
        .then(secciones=>{
            db.Category.findAll()
            .then(categorias=>{
                db.Distributor.findAll()
                .then(distribuidores=>{
                    res.render("DBaddProduct",{
                        secciones,
                        categorias,
                        distribuidores,
                    })
                })
            })
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
        res.redirect("/DBProducts");
    },

    //Listado
    listado: function(req,res) {
        db.Game.findAll()
        .then(function(juegos) {
            res.render("DBProducts", {juegos:juegos})
        })
    },

    //Detalle
    detalle: function(req,res) {
        db.Game.findByPk(req.params.id, {
            include: [
                {association: "categories"}, 
                {association: "distributors"}, 
                {association: "sections"}, 
                {association: "platforms"}
            ]
        })
        .then(function(juego){
            res.render("DBDetalle", {juego:juego})
        })
    },

    //Editado
    editar: function(req,res) {
        let pedidoJuego = db.Game.findByPk(req.params.id);
        
        let pedidoSeccion = db.Section.findAll();
        let pedidoDistribuidor = db.Distributor.findAll();
        let pedidoCategoria = db.Category.findAll();

        Promise.all([pedidoJuego, pedidoSeccion, pedidoDistribuidor, pedidoCategoria])
            .then(function([juego, categoria, distribuidor, seccion]) {
                res.render("DBEdit", {juego, categoria, distribuidor, seccion});
            })
    },

    //Modificado
    actualizar: function(req,res) {
        db.Game.update({
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
        }, {
            where: {
                id: req.params.id
            }
        });
        console.log(req.body);
        res.redirect("/productsdb/" + req.params.id);
    },
/*
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