const express = require('express');
const bodyparser = require('body-parser');
const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage: storage })

const app = express();
app.use(bodyparser.urlencoded({extended: true}));

app.get('/', function (req, res) {
  res.json({ message: 'WELCOME'});
});

app.get('/archivo', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/subirArchivo', upload.single('profile'), (req,res) => {
  const file = req.file;
  if(!file) {
    res.send('Por favor subí un archivo');
  }
    res.send(file);
});

app.listen(3000, () => console.log(`Server Started in Port 3000`));