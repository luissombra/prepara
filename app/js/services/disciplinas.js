angular.module('PreparaApp.services')
  .factory('Disciplinas', ['$http', '$q', function ($http, $q) {

    return {
            
      one: function(disciplinaId) {
        var deffered = $q.defer();
        $http
          .get('/disciplinas/' + disciplinaId)
          .then(function (response) {
            deffered.resolve(response.data);
          })
          .catch(function (error) {
            deffered.reject(error);
          });
        return deffered.promise;
      },

      //Fetch all disciplinas
      all: function() {
        var deferred = $q.defer();
        $http
          .get('/disciplinas')
          .then(function (response) {
            deferred.resolve(response.data);
          })
          .catch(function (error) {
            deferred.reject(error);
          });
          return deferred.promise;
      },

      //Create a new disciplina.
      new: function (disciplina) {
        var deferred = $q.defer();
        $http
          .post('/disciplinas', disciplina)
          .then(function (response) {
            deferred.resolve(response.data);
          })
          .catch(function (error) {
            deferred.reject(error);
          });
        return deferred.promise;
      },

      //Delete an existing disciplina.
      delete: function(disciplinaId) {
        var deffered = $q.defer();
        $http
          .delete('/disciplinas/' + disciplinaId)
          .then(function (response) {
            deffered.resolve(response.data);
          })
          .catch(function (error) {
            deffered.reject(error);
          });
        return deffered.promise;
      },

      //Update an existing disciplina.
      update: function (disciplina) {
        var deferred = $q.defer();
        $http
          .put('/disciplinas/' + disciplina.id, disciplina)
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
