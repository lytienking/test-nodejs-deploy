const db = require("../models");
const Inverters = db.inverters;
const Systems = db.systems;
// Retrieve all Tutorials from the database.
exports.findInverter = (req, res) => {
  Inverters.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};
exports.findSystem = (req, res) => {
  Systems.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};