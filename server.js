const express = require('express')
const cors = require("cors");
const settings = require("./app/config/settings");
const port = 3000

let message = "łączymy się z bazą danych...";

const app = express();

var corsOptions = {
  origin: settings.ORIGINS,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
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

//require("./app/routes/tutorial.routes")(app);
//require("./app/routes/version.routes")(app);
//require("./app/routes/location.routes")(app);
require("./app/routes/simple-text.routes")(app);

app.listen(port, () => {
  console.log(message)
})