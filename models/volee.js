export default (sequelize, Sequelize) => {
    return sequelize.define("volee", {
      id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      picture:{
        type: Sequelize.STRING
      },
      skills: {
        type: Sequelize.JSON,
        required: true,
      },
    });
  };