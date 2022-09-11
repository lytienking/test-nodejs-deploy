module.exports = (sequelize, Sequelize) => {
    const Remote2 = sequelize.define("dieukhien2", {
      mauvang: {
        type: Sequelize.STRING
      },
      maudo: {
        type: Sequelize.STRING
      }
    });
    return Remote2;
  };