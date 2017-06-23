RegistroEstudo = require('../models/').RegistroEstudo;

module.exports= {
  //Get a list of all registroEstudos using model.findAll()
  index(req, res) {
    RegistroEstudo.findAll()
      .then(function (registroEstudos) {
        res.status(200).json(registroEstudos);
      })
      .catch(function (error) {
        res.status(500).json(error);
      });
  },

  //Get a registroEstudo by it's unique ID using model.findById()
  show(req, res) {
    RegistroEstudo.findById(req.params.id)
    .then(function (registroEstudo) {
      res.status(200).json(registroEstudo);
    })
    .catch(function (error){
      res.status(500).json(error);
    });
  },

  //Create a new registroEstudo using model.create()
  create(req, res) {
    RegistroEstudo.create(req.body)
      .then(function (newRegistroEstudo) {
        res.status(200).json(newRegistroEstudo);
      })
      .catch(function (error) {
        res.status(500).json(error);
      });
  },

  //Edit an existing registroEstudo using model.update()
  update(req, res) {
    RegistroEstudo.update(req.body, {
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

  //Delete an existing registroEstudo by it's unique ID using model.destroy()
  delete(req, res) {
    RegistroEstudo.destroy({
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
