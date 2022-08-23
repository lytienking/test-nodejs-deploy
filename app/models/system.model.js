module.exports = (sequelize, Sequelize) => {
    const System = sequelize.define("trangthaihethong", {
      mauxanh: {
        type: Sequelize.STRING
      },
      mauvang: {
        type: Sequelize.STRING
      },
      maudo: {
        type: Sequelize.STRING
      },
      chieucao: {
        type: Sequelize.STRING
      },
      doam: {
        type: Sequelize.STRING
      },
      nhietdo: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.STRING
      },
      updatedAt: {
        type: Sequelize.STRING
      }
    });
    return System;
  };