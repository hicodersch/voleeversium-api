export default (sequelize, Sequelize) => {
    return sequelize.define("noneProfitOrg", {
      id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      name: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      }
    });
  };