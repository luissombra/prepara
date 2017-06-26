angular.module('PreparaApp.services')
  .factory('Questoes', ['$http', '$q', function ($http, $q) {

    return {
      
      one: function(questaoId) {
        var deffered = $q.defer();
        $http
          .get('/questoes/' + questaoId)
          .then(function (response) {
            deffered.resolve(response.data);
          })
          .catch(function (error) {
            deffered.reject(error);
          });
        return deffered.promise;
      },

      //Fetch all questoes
      all: function() {
        var deferred = $q.defer();
        $http
          .get('/questoes')
          .then(function (response) {
            deferred.resolve(response.data);
          })
          .catch(function (error) {
            deferred.reject(error);
          });
          return deferred.promise;
      },

      //Create a new questao.
      new: function (questao) {
        var deferred = $q.defer();
        $http
          .post('/questoes', questao)
          .then(function (response) {
            deferred.resolve(response.data);
          })
          .catch(function (error) {
            deferred.reject(error);
          });
        return deferred.promise;
      },

      //Delete an existing questao.
      delete: function(questaoId) {
        var deffered = $q.defer();
        $http
          .delete('/questoes/' + questaoId)
          .then(function (response) {
            deffered.resolve(response.data);
          })
          .catch(function (error) {
            deffered.reject(error);
          });
        return deffered.promise;
      },

      //Update an existing questao.
      update: function (questao) {
        var deferred = $q.defer();
        $http
          .put('/questoes/' + questao.id, questao)
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
