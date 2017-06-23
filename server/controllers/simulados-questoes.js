SimuladoQuestao = require('../models/').SimuladoQuestao;

module.exports= {
  //Get a list of all simuladosquestoes using model.findAll()
  index(req, res) {
    SimuladoQuestao.findAll()
      .then(function (simuladosquestoes) {
        res.status(200).json(simuladosquestoes);
      })
      .catch(function (error) {
        res.status(500).json(error);
      });
  },

  //Get a simulado by it's unique ID using model.findById()
  show(req, res) {
    SimuladoQuestao.findById(req.params.id)
    .then(function (simulado) {
      res.status(200).json(simulado);
    })
    .catch(function (error){
      res.status(500).json(error);
    });
  },

  //Create a new simuladoquestao using model.create()
  create(req, res) {
    SimuladoQuestao.create(req.body)
      .then(function (newSimuladoQuestao) {
        res.status(200).json(newSimuladoQuestao);
      })
      .catch(function (error) {
        res.status(500).json(error);
      });
  },

  //Edit an existing simuladoquestao using model.update()
  update(req, res) {
    SimuladoQuestao.update(req.body, {
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

  //Delete an existing simuladoquestao by it's unique ID using model.destroy()
  delete(req, res) {
    SimuladoQuestao.destroy({
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
