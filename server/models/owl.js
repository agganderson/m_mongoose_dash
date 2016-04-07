var mongoose = require('mongoose');
var OwlSchema = new mongoose.Schema({
	name: String,
	age: Number
});

OwlSchema.path('name').required(true, 'Name cannot be blank');
OwlSchema.path('age').required(true, 'Age cannot be blank');

var Owl = mongoose.model('Owl', OwlSchema);