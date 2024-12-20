const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.simpleTexts = require("./simple-text.model.js")(sequelize, Sequelize);
db.colors = require("./color.model.js")(sequelize, Sequelize);
db.richTexts = require("./rich-text.model.js")(sequelize, Sequelize);
db.images = require("./image.model.js")(sequelize, Sequelize);
db.files = require("./file.model.js")(sequelize, Sequelize);
db.embedHtmls = require("./embed-html.model.js")(sequelize, Sequelize);
//db.collections = require("./collection.model.js")(sequelize, Sequelize);

module.exports = db;