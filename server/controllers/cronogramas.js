Cronograma = require('../models/').Cronograma;

module.exports= {
  //Get a list of all cronogramas using model.findAll()
  index(req, res) {
    Cronograma.findAll()
      .then(function (cronogramas) {
        res.status(200).json(cronogramas);
      })
      .catch(function (error) {
        res.status(500).json(error);
      });
  },

  //Get a cronograma by it's unique ID using model.findById()
  show(req, res) {
    Cronograma.findById(req.params.id)
    .then(function (cronograma) {
      res.status(200).json(cronograma);
    })
    .catch(function (error){
      res.status(500).json(error);
    });
  },

  //Create a new cronograma using model.create()
  create(req, res) {
    Cronograma.create(req.body)
      .then(function (newCronograma) {
        res.status(200).json(newCronograma);
      })
      .catch(function (error) {
        res.status(500).json(error);
      });
  },

  //Edit an existing cronograma using model.update()
  update(req, res) {
    Cronograma.update(req.body, {
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

  //Delete an existing cronograma by it's unique ID using model.destroy()
  delete(req, res) {
    Cronograma.destroy({
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
