const settings = require("./settings.js");

module.exports = {
  HOST: settings.HOST,
  USER: settings.USER,
  PASSWORD: settings.PASSWORD,
  DB: settings.DB,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};