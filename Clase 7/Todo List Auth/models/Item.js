const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
	item: {
    type: String,
    required: true,
	},
	completado: {
		type: Boolean,
		default: false
  },
  usuario: {
    type: String,
    required: true,
  },
	creado: {
		type: Date,
		default: Date.now()
	},
});

module.exports = mongoose.model('Item', itemSchema);