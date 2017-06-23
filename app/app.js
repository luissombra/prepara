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
