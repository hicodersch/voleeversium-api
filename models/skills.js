export default (sequelize, Sequelize) => {
    return sequelize.define("skills", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      type:{
        type: Sequelize.STRING,
      },
      category:{
        type: Sequelize.STRING,
      }
    });
  };