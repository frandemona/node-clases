const fs = require('fs');
const path = require('path');

const filename = path.join(__dirname,'../data/items.json');
let items = require(filename);

/* fs.readFile(filename, (err, data) => {
  if (err) {
      throw err;
  }
  console.log(data.toString);
  items = data;
}); */

const itemSchema = {
	find: function () {
		return new Promise((resolve, reject) => {
      if (!Array.isArray(items)) {
          reject({
              message: 'Data Erronea',
              status: 202
          });
      }
      resolve(items);
    });
	},
	findOne: function (id) {
		return new Promise((resolve, reject) => {
      if (!Array.isArray(items)) {
          reject({
              message: 'Data Erronea',
              status: 202
          });
      }
      const item = items.find(function(element) {
        return element.id == id;
      });

      if(item === undefined) {
        reject({
          message: 'Objeto no encontrado',
          status: 202
        });
      }
      
      resolve(item);
    });
	},
	findOneAndUpdateState: function (id) {
		return new Promise((resolve, reject) => {
      if (!Array.isArray(items)) {
          reject({
              message: 'Data Erronea',
              status: 202
          });
      }
      for (let i in items) {
        if (items[i].id == id) {
          items[i].completado = true;
          break;
        }
      }
      console.log(items);
      fs.writeFileSync(filename, JSON.stringify(items), 'utf8', function (err) {
        if (err) {
          reject({
            message: 'Error al escribir archivo',
            status: 202
          });
        }
      });
      resolve(items);
    });
	},
	findOneAndUpdateName: function (id, name) {
		return new Promise((resolve, reject) => {
      if (!Array.isArray(items)) {
          reject({
              message: 'Data Erronea',
              status: 202
          });
      }
      for (let i in items) {
        if (items[i].id == id) {
          items[i].item = name;
          break;
        }
      }
      fs.writeFileSync(filename, JSON.stringify(items), 'utf8', function (err) {
        if (err) {
          reject({
            message: 'Error al escribir archivo',
            status: 202
          });
        }
      });
      resolve(items);
    });
	},
	create: function (body) {
		return new Promise((resolve, reject) => {
      if (!Array.isArray(items)) {
          reject({
              message: 'Data Erronea',
              status: 202
          });
      }
      let newId = 0;
      for (let i in items) {
        if (items[i].id > newId) {
          newId = items[i].id;
        }
      }
      items.push({
        id: newId+1,
        item: body.item,
        completado: false,
        creado: new Date(),
      });
      fs.writeFileSync(filename, JSON.stringify(items), 'utf8', function (err) {
        if (err) {
          reject({
            message: 'Error al escribir archivo',
            status: 202
          });
        }
      });
      resolve(items);
    });
	},
	deleteOne: function (id) {
		return new Promise((resolve, reject) => {
      if (!Array.isArray(items)) {
          reject({
              message: 'Data Erronea',
              status: 202
          });
      }
      newItems = items.filter(element => element.id != id);
      
      fs.writeFileSync(filename, JSON.stringify(newItems), 'utf8', function (err) {
        if (err) {
          reject({
            message: 'Error al escribir archivo',
            status: 202
          });
        }
      });

      resolve(newItems);
    });
	},
};

const Item = module.exports = itemSchema;