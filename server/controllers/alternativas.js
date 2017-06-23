Alternativa = require('../models/').Alternativa;

module.exports= {
  //Get a list of all alternativas using model.findAll()
  index(req, res) {
    Alternativa.findAll()
      .then(function (alternativas) {
        res.status(200).json(alternativas);
      })
      .catch(function (error) {
        res.status(500).json(error);
      });
  },

  //Get a alternativa by it's unique ID using model.findById()
  show(req, res) {
    Alternativa.findById(req.params.id)
    .then(function (alternativa) {
      res.status(200).json(alternativa);
    })
    .catch(function (error){
      res.status(500).json(error);
    });
  },

  //Create a new alternativa using model.create()
  create(req, res) {
    Alternativa.create(req.body)
      .then(function (newAlternativa) {
        res.status(200).json(newAlternativa);
      })
      .catch(function (error) {
        res.status(500).json(error);
      });
  },

  //Edit an existing alternativa using model.update()
  update(req, res) {
    Alternativa.update(req.body, {
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

  //Delete an existing alternativa by it's unique ID using model.destroy()
  delete(req, res) {
    Alternativa.destroy({
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
