angular.module('PreparaApp.controllers')
  .controller('EstudarCtrl', ['$rootScope', '$scope', '$mdDialog', 'Toast', 'Materiais', 'disciplina',
  function ($rootScope, $scope, $mdDialog, Toast, Materiais, disciplina) {

    $scope.disciplina = disciplina;
    $scope.materiais = [];

    Materiais.all().then(function(data){
    	$scope.materiais = data;
    })
   
  }]);
