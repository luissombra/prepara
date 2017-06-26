angular.module('PreparaApp.controllers')
  .controller('CursoCtrl', ['$rootScope', '$scope', '$mdDialog', 'Toast', 'cursos',
  function ($rootScope, $scope, $mdDialog, Toast, cursos) {

    $scope.cursos = cursos;

    console.log(cursos);
   
  }]);
