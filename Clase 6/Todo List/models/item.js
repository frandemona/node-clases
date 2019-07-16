const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
	item: {
		type: String,
	},
	completado: {
		type: Boolean,
		default: false
	},
	creado: {
		type: Date,
		default: Date.now()
	},
});

const Item = module.exports = mongoose.model('Item', itemSchema);