const express = require('express')
const cors = require("cors");
const settings = require("./app/config/settings");
const port = 3000;
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

app.use('/img', express.static(path.join(__dirname, 'img')));

app.listen(port, () => {
  console.log(message)
})