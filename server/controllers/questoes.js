Questao = require('../models/').Questao;

module.exports= {
  //Get a list of all questoes using model.findAll()
  index(req, res) {
    Questao.findAll()
      .then(function (questoes) {
        res.status(200).json(questoes);
      })
      .catch(function (error) {
        res.status(500).json(error);
      });
  },

  //Get a questao by it's unique ID using model.findById()
  show(req, res) {
    Questao.findById(req.params.id)
    .then(function (questao) {
      res.status(200).json(questao);
    })
    .catch(function (error){
      res.status(500).json(error);
    });
  },

  //Create a new questao using model.create()
  create(req, res) {
    Questao.create(req.body)
      .then(function (newQuestao) {
        res.status(200).json(newQuestao);
      })
      .catch(function (error) {
        res.status(500).json(error);
      });
  },

  //Edit an existing questao using model.update()
  update(req, res) {
    Questao.update(req.body, {
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

  //Delete an existing questao by it's unique ID using model.destroy()
  delete(req, res) {
    Questao.destroy({
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
