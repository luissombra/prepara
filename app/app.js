angular.module('PreparaApp.controllers', []);
angular.module('PreparaApp.services', []);

//Inject dependencies to the Bookmark module.
var app = angular.module('PreparaApp', [
  'ngMaterial',
  'ngMdIcons',
  'ui.router',
  'PreparaApp.controllers',
  'PreparaApp.services'
]);

app
  .config(['$mdThemingProvider', function ($mdThemingProvider) {
    //Set default theme
    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('red');
  }])
  .config(['$mdIconProvider', function ($mdIconProvider) {
    //Placeholder icon for author profile.
    $mdIconProvider
      .icon('author', './images/svg/person.svg');
  }]);

//configura as rotas
app
  .config(['$stateProvider', function($stateProvider){
    var view1 = {
      name: 'view1',
      url: '/view1',
      templateUrl: '/views/view1.html'
    }

    var curso = {
      name: 'curso',
      url: '/curso',
      templateUrl: '/views/curso.html',
      controller: 'CursoCtrl',
      resolve: {
        cursos: ['Cursos', function(Cursos){
          return Cursos.all();
        }]
      }
    }

    var disciplinas = {
      name: 'disciplinas',
      url: '/disciplinas',
      templateUrl: '/views/disciplinas.html',
      controller: 'DisciplinasCtrl',
      resolve: {
        disciplinas: ['Disciplinas', function(Disciplinas){
          return Disciplinas.all();
        }]
      }
    }

    var simulado = {
      name: 'simulado',
      url: '/simulado/:id',
      templateUrl: '/views/simulado.html',
      controller: 'SimuladoCtrl',
      resolve: {
        disciplina: ['Disciplinas', '$stateParams', function(Disciplinas, $stateParams){
          return Disciplinas.one($stateParams.id);
        }]
      }
    }

    var estudar = {
      name: 'estudar',
      url: '/estudar/:id',
      templateUrl: '/views/estudar.html',
      controller: 'EstudarCtrl',
      resolve: {
        disciplina: ['Disciplinas', '$stateParams', function(Disciplinas, $stateParams){
          return Disciplinas.one($stateParams.id);
        }]
      }
    }

    var desempenho = {
      name: 'desempenho',
      url: '/desempenho',
      templateUrl: '/views/desempenho.html',
      controller: 'DesempenhoCtrl',
      resolve: {

      }
    }

    $stateProvider.state(view1);
    $stateProvider.state(curso);
    $stateProvider.state(disciplinas);
    $stateProvider.state(simulado);
    $stateProvider.state(estudar);
    $stateProvider.state(desempenho);
  }]);
