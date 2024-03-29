const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.inverters = require("./inverter.model.js")(sequelize, Sequelize);
db.systems = require("./system.model.js")(sequelize, Sequelize);
db.connects = require("./connect.model.js")(sequelize, Sequelize);
db.remote1 = require("./remote1.model.js")(sequelize, Sequelize);
db.remote2 = require("./remote2.model.js")(sequelize, Sequelize);
module.exports = db;
