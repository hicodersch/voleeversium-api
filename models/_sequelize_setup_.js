import Sequelize from "sequelize";
//import dbConfig from "../environment-config.json";

import VoleeModel from "./volee.js";
import NoneProfitOrg from "./noneProfitOrg.js";
import ProVolee from "./proVolee.js";
// import Matching from './match.js'

const sequelize = new Sequelize("voleeversium", "root", "Sakmak4326", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.volee = VoleeModel(sequelize, Sequelize);
db.noneProfitOrg = NoneProfitOrg(sequelize, Sequelize);
db.proVolee = ProVolee(sequelize, Sequelize);

db.noneProfitOrg.hasMany(db.proVolee);
db.proVolee.belongsTo(db.noneProfitOrg);

// db.volee.belongsToMany(db.proVolee, { through: "Matching" })
// db.proVolee.belongsToMany(db.volee, { through: "Matching" })



// use it to force to create the db from scratch
// .sync({ force: true })
db.sequelize.sync().then(() => {
  console.log("Drop and re-sync db.");
});

export default db;

// const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//   host: dbConfig.HOST,
//   dialect: dbConfig.dialect,
//   operatorsAliases: false,
//   port: dbConfig.port,
//   pool: {
//     max: dbConfig.pool.max,
//     min: dbConfig.pool.min,
//     acquire: dbConfig.pool.acquire,
//     idle: dbConfig.pool.idle
//   }
// });
