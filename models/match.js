export default (sequelize, Sequelize) => {
  return sequelize.define("match", {
    state: {
      type: Sequelize.STRING,
    },
  });
};
