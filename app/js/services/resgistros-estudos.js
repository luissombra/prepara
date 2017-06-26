angular.module('PreparaApp.services')
  .factory('RegistrosEstudos', ['$http', '$q', function ($http, $q) {

    return {
      
      one: function(registroestudoId) {
        var deffered = $q.defer();
        $http
          .get('/registrosestudos/' + registroestudoId)
          .then(function (response) {
            deffered.resolve(response.data);
          })
          .catch(function (error) {
            deffered.reject(error);
          });
        return deffered.promise;
      },

      //Fetch all registrosestudos
      all: function() {
        var deferred = $q.defer();
        $http
          .get('/registrosestudos')
          .then(function (response) {
            deferred.resolve(response.data);
          })
          .catch(function (error) {
            deferred.reject(error);
          });
          return deferred.promise;
      },

      //Create a new registroestudo.
      new: function (registroestudo) {
        var deferred = $q.defer();
        $http
          .post('/registrosestudos', registroestudo)
          .then(function (response) {
            deferred.resolve(response.data);
          })
          .catch(function (error) {
            deferred.reject(error);
          });
        return deferred.promise;
      },

      //Delete an existing registroestudo.
      delete: function(registroestudoId) {
        var deffered = $q.defer();
        $http
          .delete('/registrosestudos/' + registroestudoId)
          .then(function (response) {
            deffered.resolve(response.data);
          })
          .catch(function (error) {
            deffered.reject(error);
          });
        return deffered.promise;
      },

      //Update an existing registroestudo.
      update: function (registroestudo) {
        var deferred = $q.defer();
        $http
          .put('/registrosestudos/' + registroestudo.id, registroestudo)
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
