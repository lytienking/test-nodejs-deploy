module.exports = (app) => {
  const tutorials = require('../controllers/tutorial.controller.js');
  var router = require('express').Router();
  // Retrieve all Tutorials
  router.get('/inverter', tutorials.findInverter);
  router.get('/system', tutorials.findSystem);
  router.get('/connect', tutorials.findConnect);
  router.post('/remote1', tutorials.insertRemoteScadaFirst);
  router.post('/remote2', tutorials.insertRemoteScadaSecond);
  app.use('/api', router);
};
