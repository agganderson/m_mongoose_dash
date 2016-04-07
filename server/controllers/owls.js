var mongoose = require('mongoose');
var Owl = mongoose.model('Owl');
module.exports = {
	show_all: function(req, res){
		Owl.find({}, function(err, owl){
			if(err){
				console.log('Idk why but you didn"t get that owl info');
			}
			else{
				console.log('Good job, you got that info');
				res.render('index', {owl:owl});
			}
		});
	},
	show_one: function(req, res){
		Owl.findOne({_id:req.params.id}, function(err, owl){
			res.render('owl', {owl:owl});
		});
	},
	show_edit_one: function(req, res){
		Owl.findOne({_id:req.params.id}, function(err, owl){
			res.render('edit', {owl:owl});
		});
	},
	create: function(req, res){
		var owl = new Owl({name:req.body.name, age:req.body.age});
		owl.save(function(err){
			if(err){
				console.log('Check your code, something fucked up');
				res.render('new', {title: 'you have errors', errors:owl.errors});
			}
			else{
				console.log('Got info!');
				res.redirect('/');
			}
		});
	},
	edit_one: function(req, res){
		Owl.update({_id:req.params.id}, {name:req.body.name, age:req.body.age}, function(err, owl){
			if(err){
				console.log('NOPE');
				//validations for updating don't work 
				//fix this later!
				//res.render('edit/:id', {title: 'you have errors', errors:owl.errors});
			}
			else{
				console.log('Congrats');
				res.redirect('/');
			}
		});
	},
	destroy: function(req, res){
		Owl.remove({_id:req.params.id}, function(err, owl){
			if(err){
				console.log("Didn't delete, check your code");
			}
			else{
				console.log("Deleted that owl :(");
				res.redirect('/');
			}
		});
	},
}