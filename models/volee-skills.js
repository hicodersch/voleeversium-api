export default (sequelize, Sequelize) => {
    return sequelize.define("voleSkills", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      state:{
        type: Sequelize.STRING,
      }
    });
  };
  