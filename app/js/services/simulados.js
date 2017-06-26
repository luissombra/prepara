angular.module('PreparaApp.services')
  .factory('Simulados', ['$http', '$q', function ($http, $q) {

    return {
      
      one: function(simuladoId) {
        var deffered = $q.defer();
        $http
          .get('/simulados/' + simuladoId)
          .then(function (response) {
            deffered.resolve(response.data);
          })
          .catch(function (error) {
            deffered.reject(error);
          });
        return deffered.promise;
      },

      //Fetch all simulados
      all: function() {
        var deferred = $q.defer();
        $http
          .get('/simulados')
          .then(function (response) {
            deferred.resolve(response.data);
          })
          .catch(function (error) {
            deferred.reject(error);
          });
          return deferred.promise;
      },

      //Create a new simulado.
      new: function (simulado) {
        var deferred = $q.defer();
        $http
          .post('/simulados', simulado)
          .then(function (response) {
            deferred.resolve(response.data);
          })
          .catch(function (error) {
            deferred.reject(error);
          });
        return deferred.promise;
      },

      //Delete an existing simulado.
      delete: function(simuladoId) {
        var deffered = $q.defer();
        $http
          .delete('/simulados/' + simuladoId)
          .then(function (response) {
            deffered.resolve(response.data);
          })
          .catch(function (error) {
            deffered.reject(error);
          });
        return deffered.promise;
      },

      //Update an existing simulado.
      update: function (simulado) {
        var deferred = $q.defer();
        $http
          .put('/simulados/' + simulado.id, simulado)
          .then(function (response) {
            deferred.resolve(response.data);
          })
          .catch(function (error) {
            deferred.reject(error);
          });
        return deferred.promise;
      }
    };
  }]);
