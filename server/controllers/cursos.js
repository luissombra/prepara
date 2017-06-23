Curso = require('../models/').Curso;
Disciplina = require('../models/').Disciplina;

module.exports= {
  //Obter uma lista de todos os cursos usando model.findAll()
  index(req, res) {
    Curso.findAll({
      // Retorna todos os disciplina que têm um curso de correspondência para cada Curso
      include: Disciplina
    })
      .then(function (cursos) {
        res.status(200).json(cursos);
      })
      .catch(function (error) {
        res.status(500).json(error);
      });
  },

  //Obter um curso pela identificação exclusiva usando model.findById()
  show(req, res) {
    Curso.findById(req.params.id, {
      //Retorna todos os disciplinas que têm um curso_id correspondente para o curso
      include: Disciplina
    })
    .then(function (curso) {
      res.status(200).json(curso);
    })
    .catch(function (error) {
      res.status(500).json(error);
    });
  },

  //Create a new curso using model.create()
  create(req, res) {
    Curso.create(req.body)
      .then(function (newCurso) {
        res.status(200).json(newCurso);
      })
      .catch(function (error) {
        res.status(500).json(error);
      });
  },

  //Edit an existing curso details using model.update()
  update(req, res) {
    Curso.update(req.body, {
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

  //Delete an existing curso by the unique ID using model.destroy()
  delete(req, res) {
    Curso.destroy({
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
