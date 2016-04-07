var mongoose = require('mongoose');
var Owl = mongoose.model('Owl');
var owls = require('../controllers/owls.js');

module.exports = function(app){
	app.get('/', function(req, res){
		owls.show_all(req, res);
	});

	app.get('/new', function(req, res){
		res.render('new');
	});

	app.post('/new', function(req, res){
		owls.create(req, res);
	});

	app.get('/show/:id', function(req, res){
		owls.show_one(req, res);
	});

	app.get('/edit/:id', function(req, res){
		owls.show_edit_one(req,res);
	});

	app.post('/edit/:id', function(req, res){
		owls.edit_one(req, res);
	});

	app.post('/delete/:id', function(req, res){
		owls.destroy(req, res);
	});
}