var authors = require('../controllers/authors'),
    books = require('../controllers/books'),
    cursos = require('../controllers/cursos'),
    cronogramas = require('../controllers/cronogramas');
    disciplinas = require('../controllers/disciplinas');
    registrosEstudos = require('../controllers/registros-estudos');
    materiais = require('../controllers/materiais');
    questoes = require('../controllers/questoes');
    simuladosquestoes = require('../controllers/simulados-questoes');
    simulados = require('../controllers/simulados');
    alternativas = require('../controllers/alternativas');

module.exports = function (router) {
  router.get('/authors', authors.index);
  router.get('/authors/:id', authors.show);
  router.post('/authors', authors.create);
  router.put('/authors', authors.update);
  router.delete('/authors/:id', authors.delete);

  router.get('/books', books.index);
  router.get('/books/:id', books.show);
  router.post('/books', books.create);
  router.put('/books/:id', books.update);
  router.delete('/books/:id', books.delete);

  router.get('/cursos', cursos.index);
  router.get('/cursos/:id', cursos.show);
  router.post('/cursos', cursos.create);
  router.put('/cursos/:id', cursos.update);
  router.delete('/cursos/:id', cursos.delete);

  router.get('/cronogramas', cronogramas.index);
  router.get('/cronogramas/:id', cronogramas.show);
  router.post('/cronogramas', cronogramas.create);
  router.put('/cronogramas/:id', cronogramas.update);
  router.delete('/cronogramas/:id', cronogramas.delete);

  router.get('/disciplinas', disciplinas.index);
  router.get('/disciplinas/:id', disciplinas.show);
  router.post('/disciplinas', disciplinas.create);
  router.put('/disciplinas/:id', disciplinas.update);
  router.delete('/disciplinas/:id', disciplinas.delete);

  router.get('/registrosestudos', registrosEstudos.index);
  router.get('/registrosestudos/:id', registrosEstudos.show);
  router.post('/registrosestudos', registrosEstudos.create);
  router.put('/registrosestudos/:id', registrosEstudos.update);
  router.delete('/registrosestudos/:id', registrosEstudos.delete);

  router.get('/materiais', materiais.index);
  router.get('/materiais/:id', materiais.show);
  router.post('/materiais', materiais.create);
  router.put('/materiais/:id', materiais.update);
  router.delete('/materiais/:id', materiais.delete);

  router.get('/questoes', questoes.index);
  router.get('/questoes/:id', questoes.show);
  router.post('/questoes', questoes.create);
  router.put('/questoes/:id', questoes.update);
  router.delete('/questoes/:id', questoes.delete);

  router.get('/simuladosquestoes', simuladosquestoes.index);
  router.get('/simuladosquestoes/:id', simuladosquestoes.show);
  router.post('/simuladosquestoes', simuladosquestoes.create);
  router.put('/simuladosquestoes/:id', simuladosquestoes.update);
  router.delete('/simuladosquestoes/:id', simuladosquestoes.delete);

  router.get('/simulados', simulados.index);
  router.get('/simulados/:id', simulados.show);
  router.post('/simulados', simulados.create);
  router.put('/simulados/:id', simulados.update);
  router.delete('/simulados/:id', simulados.delete);

  router.get('/alternativas', alternativas.index);
  router.get('/alternativas/:id', alternativas.show);
  router.post('/alternativas', alternativas.create);
  router.put('/alternativas/:id', alternativas.update);
  router.delete('/alternativas/:id', alternativas.delete);

  return router
};
