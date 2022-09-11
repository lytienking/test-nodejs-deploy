const { DateTime } = require("mssql");
const db = require("../models");
const Inverters = db.inverters;
const Systems = db.systems;
const remote1 = db.remote1;
const remote2 = db.remote2;
const Connects = db.connects;
// Retrieve all Tutorials from the database.
exports.insertRemoteScadaFirst = (req, res) => {
  // Validate request
  if (!req.body.temp || !req.body.hum) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  console.log(req.body);
  // Create a Tutorial
  const remote = {
    nhietdo: (req.body.temp * 100).toString(),
    doam: (req.body.hum * 100).toString(),
    createdAt: new Date(Date.now()).getTime().toString(),
    updatedAt: new Date(Date.now()).getTime().toString(),
  };
  console.log(remote);
  // Save Tutorial in the database
  remote1
    .create(remote)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
};
exports.insertRemoteScadaSecond = (req, res) => {
  // Validate request
  if (!req.body.yellow || !req.body.red) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  // Create a Tutorial
  const remote = {
    mauvang: req.body.yellow.toString(),
    maudo: req.body.red.toString(),
    createdAt: new Date(Date.now()).getTime().toString(),
    updatedAt: new Date(Date.now()).getTime().toString(),
  };
  console.log(remote);
  // Save Tutorial in the database
  remote2
    .create(remote)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
};
exports.findInverter = (req, res) => {
  Inverters.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};
exports.findSystem = (req, res) => {
  Systems.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};
exports.findConnect = (req, res) => {
  Connects.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};
