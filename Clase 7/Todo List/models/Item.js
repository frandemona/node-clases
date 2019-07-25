// const fs = require('fs');
// const path = require('path');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const filename = path.join(__dirname,'../data/items.json');
// let items = require(filename);

const itemSchema = new Schema({
	item: {
    type: String,
    required: true,
  },
  completado: {
    type: Boolean,
    default: false,
  },
  creado: {
    type: Date,
    default: Date.now()
  },
});

module.exports = mongoose.model('Item', itemSchema);