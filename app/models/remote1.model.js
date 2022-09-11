module.exports = (sequelize, Sequelize) => {
    const Remote1 = sequelize.define("dieukhien1", {
      nhietdo: {
        type: Sequelize.STRING
      },
      doam: {
        type: Sequelize.STRING
      }
    });
    return Remote1;
  };