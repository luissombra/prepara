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

    var view2 = {
      name: 'view2',
      url: '/view2',
      templateUrl: '/views/view2.html'
    }

    $stateProvider.state(view1);
    $stateProvider.state(view2);
  }]);
