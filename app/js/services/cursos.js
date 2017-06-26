angular.module('PreparaApp.services')
  .factory('Cursos', ['$http', '$q', function ($http, $q) {

    return {
            
      one: function(cursoId) {
        var deffered = $q.defer();
        $http
          .get('/cursos/' + cursoId)
          .then(function (response) {
            deffered.resolve(response.data);
          })
          .catch(function (error) {
            deffered.reject(error);
          });
        return deffered.promise;
      },

      //Fetch all cursos
      all: function() {
        var deferred = $q.defer();
        $http
          .get('/cursos')
          .then(function (response) {
            deferred.resolve(response.data);
          })
          .catch(function (error) {
            deferred.reject(error);
          });
          return deferred.promise;
      },

      //Create a new curso.
      new: function (curso) {
        var deferred = $q.defer();
        $http
          .post('/cursos', curso)
          .then(function (response) {
            deferred.resolve(response.data);
          })
          .catch(function (error) {
            deferred.reject(error);
          });
        return deferred.promise;
      },

      //Delete an existing curso.
      delete: function(cursoId) {
        var deffered = $q.defer();
        $http
          .delete('/cursos/' + cursoId)
          .then(function (response) {
            deffered.resolve(response.data);
          })
          .catch(function (error) {
            deffered.reject(error);
          });
        return deffered.promise;
      },

      //Update an existing curso.
      update: function (curso) {
        var deferred = $q.defer();
        $http
          .put('/cursos/' + curso.id, curso)
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
