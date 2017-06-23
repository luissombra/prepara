Simulado = require('../models/').Simulado;

module.exports= {
  //Get a list of all simulados using model.findAll()
  index(req, res) {
    Simulado.findAll()
      .then(function (simulados) {
        res.status(200).json(simulados);
      })
      .catch(function (error) {
        res.status(500).json(error);
      });
  },

  //Get a simulado by it's unique ID using model.findById()
  show(req, res) {
    Simulado.findById(req.params.id)
    .then(function (simulado) {
      res.status(200).json(simulado);
    })
    .catch(function (error){
      res.status(500).json(error);
    });
  },

  //Create a new simulado using model.create()
  create(req, res) {
    Simulado.create(req.body)
      .then(function (newSimulado) {
        res.status(200).json(newSimulado);
      })
      .catch(function (error) {
        res.status(500).json(error);
      });
  },

  //Edit an existing simulado using model.update()
  update(req, res) {
    Simulado.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    .then(function (updatedRecords) {
      res.status(200).json(updatedRecords);
    })
    .catch(function (error) {
      res.status(500).json(error);
    });
  },

  //Delete an existing simulado by it's unique ID using model.destroy()
  delete(req, res) {
    Simulado.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function (deletedRecords) {
      res.status(200).json(deletedRecords);
    })
    .catch(function (error) {
      res.status(500).json(error);
    });
  }
};
