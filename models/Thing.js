// Importation de mongoose
const mongoose = require('mongoose');


// Creation d'un schéma Thing
const thingSchema = mongoose.Schema({
	title: {type: String, required: true}, 
	description: { type: String, required: true},
	imageUrl: {type: String, required: true},
	userId: {type: String, required: true},
	price: {type: Number, required: true},
});

// Exporter le modele
module.exports = mongoose.model('Thing', thingSchema);