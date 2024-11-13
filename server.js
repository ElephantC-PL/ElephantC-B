const express = require('express')
const cors = require("cors");
const settings = require("./app/config/settings");
const port = 3000;
const multer = require('multer');
const path = require('path');

let message = "łączymy się z bazą danych...";

const app = express();

var corsOptions = {
  origin: settings.ORIGINS,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync()
  .then(() => {
    message = "Synced db.";
  })
  .catch((err) => {
    message = "Failed to sync db: " + err.message;
  });

app.get('/', (req, res) => {
  res.send(message)
})

require("./app/routes/simple-text.routes")(app);
require("./app/routes/color.routes")(app);
require("./app/routes/rich-text.routes")(app);
require("./app/routes/image.routes")(app);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'img'); // Folder 'images' w katalogu głównym projektu
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Zapisz plik z oryginalną nazwą
  }
});

const upload = multer({ storage });

// Endpoint do obsługi uploadu plików
app.post('/upload', upload.single('file'), (req, res) => {
  if (req.file) {
    res.status(200).json({ message: 'File uploaded successfully' });
  } else {
    res.status(400).json({ message: 'No file uploaded' });
  }
});

app.use('/img', express.static(path.join(__dirname, 'img')));

app.listen(port, () => {
  console.log(message)
})