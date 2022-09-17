export default (sequelize, Sequelize) => {
    return sequelize.define("proVolee", {
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
      },
      requirment: {
        type: Sequelize.JSON,
        required: true,
      },
    });
  };