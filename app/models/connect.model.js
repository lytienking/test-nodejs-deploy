module.exports = (sequelize, Sequelize) => {
  const Inverter = sequelize.define('trangthaiketnoi', {
    RR: {
      type: Sequelize.STRING,
    },
    RA: {
      type: Sequelize.STRING,
    },
    RP: {
      type: Sequelize.STRING,
    },
    createdAt: {
      type: Sequelize.STRING,
    },
    updatedAt: {
      type: Sequelize.STRING,
    },
  });
  return Inverter;
};
