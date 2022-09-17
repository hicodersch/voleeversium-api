// import Volee from './volee.js';
// import ProVolee from './proVolee.js'

// export default (sequelize, Sequelize) => {
//     return sequelize.define("match", {
//       id: {
//           type: Sequelize.INTEGER,
//           primaryKey: true,
//           autoIncrement: true
//       },
//       VoleeId: {
//         type: Sequelize.STRING,
//         references: {
//           model: Volee,
//           key: "id",
//         },
//       },
//       ProVoleeId: {
//         type: Sequelize.STRING,
//         references: {
//           model: ProVolee,
//           key: "id",
//         },
//       },
      
//     });
//   };