Material = require('../models/').Material;

module.exports= {
  //Get a list of all materiais using model.findAll()
  index(req, res) {
    Material.findAll()
      .then(function (materiais) {
        res.status(200).json(materiais);
      })
      .catch(function (error) {
        res.status(500).json(error);
      });
  },

  //Get a material by it's unique ID using model.findById()
  show(req, res) {
    Material.findById(req.params.id)
    .then(function (material) {
      res.status(200).json(material);
    })
    .catch(function (error){
      res.status(500).json(error);
    });
  },

  //Create a new material using model.create()
  create(req, res) {
    Material.create(req.body)
      .then(function (newMaterial) {
        res.status(200).json(newMaterial);
      })
      .catch(function (error) {
        res.status(500).json(error);
      });
  },

  //Edit an existing material using model.update()
  update(req, res) {
    Material.update(req.body, {
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

  //Delete an existing material by it's unique ID using model.destroy()
  delete(req, res) {
    Material.destroy({
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
