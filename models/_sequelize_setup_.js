import Sequelize from "sequelize";
//import dbConfig from "../environment-config.json";

import VoleeModel from './volee.js'
// import IncomeModel from "./income-model.js"
// import ExpensesModel from "./expenses-model.js"



const sequelize = new Sequelize("voleeversium", "root", "Sakmak4326", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = VoleeModel(sequelize, Sequelize);
// db.income = IncomeModel(sequelize, Sequelize);
// db.expenses = ExpensesModel(sequelize, Sequelize);

// db.users.hasMany(db.income);
// db.income.belongsTo(db.users);

// db.users.hasMany(db.expenses);
// db.expenses.belongsTo(db.users);






// db.familyMember.hasMany(db.agenda);
// db.agenda.belongsTo(db.familyMember);

// db.family.hasMany(db.agenda);
// db.agenda.belongsTo(db.family);

// db.familyMember.belongsToMany(db.punishment, {
//   through: "familyMember_punishment",
//   as: "familyMembers",
//   foreignKey: "familyMember_id",
// });

// db.punishment.belongsToMany(db.familyMember, {
//   through: "familyMember_punishment",
//   as: "punishments",
//   foreignKey: "punishment_id",
// });

// db.familyMember.belongsToMany(db.rewards, {
//   through: "familyMember_rewards",
//   as: "familyMember",
//   foreignKey: "familyMember_id",
// });

// db.rewards.belongsToMany(db.familyMember, {
//   through: "familyMember_rewards",
//   as: "reward",
//   foreignKey: "rewards_id",
// });

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