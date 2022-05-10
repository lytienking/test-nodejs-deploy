module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("thunghiem", {
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
    return Tutorial;
  };