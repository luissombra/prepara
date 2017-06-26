angular.module('PreparaApp.services')
  .factory('Cronogramas', ['$http', '$q', function ($http, $q) {

    return {
      
      one: function(cronogramaId) {
        var deffered = $q.defer();
        $http
          .get('/cronogramas/' + cronogramaId)
          .then(function (response) {
            deffered.resolve(response.data);
          })
          .catch(function (error) {
            deffered.reject(error);
          });
        return deffered.promise;
      },

      //Fetch all cronogramas
      all: function() {
        var deferred = $q.defer();
        $http
          .get('/cronogramas')
          .then(function (response) {
            deferred.resolve(response.data);
          })
          .catch(function (error) {
            deferred.reject(error);
          });
          return deferred.promise;
      },

      //Create a new cronograma.
      new: function (cronograma) {
        var deferred = $q.defer();
        $http
          .post('/cronogramas', cronograma)
          .then(function (response) {
            deferred.resolve(response.data);
          })
          .catch(function (error) {
            deferred.reject(error);
          });
        return deferred.promise;
      },

      //Delete an existing cronograma.
      delete: function(cronogramaId) {
        var deffered = $q.defer();
        $http
          .delete('/cronogramas/' + cronogramaId)
          .then(function (response) {
            deffered.resolve(response.data);
          })
          .catch(function (error) {
            deffered.reject(error);
          });
        return deffered.promise;
      },

      //Update an existing cronograma.
      update: function (cronograma) {
        var deferred = $q.defer();
        $http
          .put('/cronogramas/' + cronograma.id, cronograma)
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
