module.exports = (sequelize, Sequelize) => {
    const Inverter = sequelize.define("trangthaibientan", {
      F1: {
        type: Sequelize.STRING
      },
      V1: {
        type: Sequelize.STRING
      },
      I1: {
        type: Sequelize.STRING
      },
      F2: {
        type: Sequelize.STRING
      },
      V2: {
        type: Sequelize.STRING
      },
      I2: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.STRING
      },
      updatedAt: {
        type: Sequelize.STRING
      }
    });
    return Inverter;
  };