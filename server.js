const express = require('express')
const cors = require("cors");
const settings = require("./app/config/settings");
const port = 3000;
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./app/config/swagger.config');

let message = "łączymy się z bazą danych...";

const app = express();

var corsOptions = {
  origin: settings.ORIGINS,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

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
require("./app/routes/color.routes")(app); //udostępniona jako openapi
require("./app/routes/rich-text.routes")(app);
require("./app/routes/image.routes")(app);
require("./app/routes/file.routes")(app);
require("./app/routes/embed-html.routes")(app);
//require("./app/routes/collection.routes")(app);

app.use('/img', express.static(path.join(__dirname, 'img')));
app.use('/file', express.static(path.join(__dirname, 'file')));

app.listen(port, () => {
  console.log(message)
})