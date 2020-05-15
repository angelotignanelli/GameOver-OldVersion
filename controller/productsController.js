const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const controller = {
	// Root - Show all products
	root: (req, res) => {
		// Do the magic
		

		let recomendados = products.filter(function(element) {
			return element.section == "Recomendados";
		  });
		  let vendidos = products.filter(function(element) {
			return element.section == "Vendidos";
		  });
		  let ofertas = products.filter(function(element) {
			return element.section == "Ofertas";
		  });
		  res.render('index', {
			recomendados: recomendados,
			vendidos: vendidos,
			ofertas: ofertas,
			aMiles: toThousand,
			porcentaje: porcentaje
		});
		console.log(products);
	},
	
	// Detail - Detail from one product
	detail: function(req, res, next) {
		var product = products.find(function(element) {
		return element.id == req.params.productId;
		  });
		  console.log(product)
        res.render("productDetail", {
            aMiles: toThousand,
			producto: product,
        });
    },
	
	// Create - Form to create
	create: (req, res) => {
		// Do the magic	
		res.render("addProduct")		
	},


	// Create -  Method to store
	store: (req, res) => {
		// Do the magic
		let nuevoProducto={}
		if(products==""){
			nuevoProducto.id=1
		} else { 
		let ultimoProducto=products[products.length-1]
		nuevoProducto.id=ultimoProducto.id+1
		}
		
		nuevoProducto.name=req.body.name
		nuevoProducto.release_date=req.body.release_date
		nuevoProducto.age=req.body.age
		nuevoProducto.price=req.body.price
		nuevoProducto.category=req.body.category
		nuevoProducto.developer=req.body.developer
		nuevoProducto.distributor=req.body.distributor
		nuevoProducto.platform=req.body.platform
		nuevoProducto.section=req.body.section
		//res.send(nuevoProducto)
		products.push(nuevoProducto)

		let productosModificadosJSON = JSON.stringify(products)
		fs.writeFileSync(productsFilePath, productosModificadosJSON)

		res.render("addProduct");
	},
		

	// Update - Form to edit
	edit: (req, res) => {
		// Do the magic
		var product = products.find(function(element) {
			return element.id == req.params.productId;
		});

		res.render("editProduct", {
			productToEdit: product,
		});	
	},

	// Update - Method to update
	update: (req, res) => {
		// Do the magic
		products.forEach(element=>{
			if(element.id==req.params.productId){
				element.name=req.body.name
				element.release_date=req.body.release_date
				element.age=req.body.age
				element.price=req.body.price
				element.category=req.body.category
				element.developer=req.body.developer
				element.distributor=req.body.distributor
				element.platform=req.body.platform
				element.section=req.body.section
				
			}
		})
		
		let productosModificadosJSON = JSON.stringify(products)
		fs.writeFileSync(productsFilePath, productosModificadosJSON)
		
		res.redirect("../");	
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
		let productsQueQuedan = products.filter(function(element) {
			return element.id != req.params.productId;
		});

		let productosModificadosJSON = JSON.stringify(productsQueQuedan)
		fs.writeFileSync(productsFilePath, productosModificadosJSON)
		res.send(productsQueQuedan)
	},

	checkout: (req,res) => {
		res.render('checkout')
	},

	cart: (req,res) => {
		res.render('productCart')
	},
};

module.exports = controller;