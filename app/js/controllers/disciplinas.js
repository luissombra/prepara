angular.module('PreparaApp.controllers')
  .controller('DisciplinasCtrl', ['$rootScope', '$scope', '$mdDialog', 'Toast', 'disciplinas',
  function ($rootScope, $scope, $mdDialog, Toast, disciplinas) {

    $scope.disciplinas = disciplinas;

    console.log(disciplinas);
   
  }]);
