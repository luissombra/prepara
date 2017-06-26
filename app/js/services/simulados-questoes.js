angular.module('PreparaApp.services')
  .factory('SimuladosQuestoes', ['$http', '$q', function ($http, $q) {

    return {
      
      one: function(simuladoquestaoId) {
        var deffered = $q.defer();
        $http
          .get('/simuladosquestoes/' + simuladoquestaoId)
          .then(function (response) {
            deffered.resolve(response.data);
          })
          .catch(function (error) {
            deffered.reject(error);
          });
        return deffered.promise;
      },

      //Fetch all simuladosquestoes
      all: function() {
        var deferred = $q.defer();
        $http
          .get('/simuladosquestoes')
          .then(function (response) {
            deferred.resolve(response.data);
          })
          .catch(function (error) {
            deferred.reject(error);
          });
          return deferred.promise;
      },

      //Create a new simuladoquestao.
      new: function (simuladoquestao) {
        var deferred = $q.defer();
        $http
          .post('/simuladosquestoes', simuladoquestao)
          .then(function (response) {
            deferred.resolve(response.data);
          })
          .catch(function (error) {
            deferred.reject(error);
          });
        return deferred.promise;
      },

      //Delete an existing simuladoquestao.
      delete: function(simuladoquestaoId) {
        var deffered = $q.defer();
        $http
          .delete('/simuladosquestoes/' + simuladoquestaoId)
          .then(function (response) {
            deffered.resolve(response.data);
          })
          .catch(function (error) {
            deffered.reject(error);
          });
        return deffered.promise;
      },

      //Update an existing simuladoquestao.
      update: function (simuladoquestao) {
        var deferred = $q.defer();
        $http
          .put('/simuladosquestoes/' + simuladoquestao.id, simuladoquestao)
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
