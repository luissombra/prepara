angular.module('PreparaApp.controllers')
  .controller('SimuladoCtrl', ['$rootScope', '$scope', '$mdDialog', 'Toast', 'Simulados', 'Questoes', 'disciplina',
  function ($rootScope, $scope, $mdDialog, Toast, Simulados, Questoes, disciplina) {

    $scope.disciplina = disciplina;

    console.log(disciplina);
   
  }]);
