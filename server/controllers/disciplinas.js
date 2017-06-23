Disciplina = require('../models/').Disciplina;

module.exports= {
  //Get a list of all disciplinas using model.findAll()
  index(req, res) {
    Disciplina.findAll()
      .then(function (disciplinas) {
        res.status(200).json(disciplinas);
      })
      .catch(function (error) {
        res.status(500).json(error);
      });
  },

  //Get a disciplina by it's unique ID using model.findById()
  show(req, res) {
    Disciplina.findById(req.params.id)
    .then(function (disciplina) {
      res.status(200).json(disciplina);
    })
    .catch(function (error){
      res.status(500).json(error);
    });
  },

  //Create a new disciplina using model.create()
  create(req, res) {
    Disciplina.create(req.body)
      .then(function (newDisciplina) {
        res.status(200).json(newDisciplina);
      })
      .catch(function (error) {
        res.status(500).json(error);
      });
  },

  //Edit an existing disciplina using model.update()
  update(req, res) {
    Disciplina.update(req.body, {
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

  //Delete an existing disciplina by it's unique ID using model.destroy()
  delete(req, res) {
    Disciplina.destroy({
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
