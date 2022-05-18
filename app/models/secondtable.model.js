module.exports = (sequelize, Sequelize) => {
    const Second = sequelize.define("secondTest", {
      name: {
        type: Sequelize.STRING
      },
      value: {
        type: Sequelize.STRING
      },
      datetime: {
        type: Sequelize.DATE
      }
    });
    return Second;
  };