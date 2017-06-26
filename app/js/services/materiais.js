angular.module('PreparaApp.services')
  .factory('Materiais', ['$http', '$q', function ($http, $q) {

    return {
            
      one: function(materialId) {
        var deffered = $q.defer();
        $http
          .get('/materiais/' + materialId)
          .then(function (response) {
            deffered.resolve(response.data);
          })
          .catch(function (error) {
            deffered.reject(error);
          });
        return deffered.promise;
      },

      //Fetch all materiais
      all: function() {
        var deferred = $q.defer();
        $http
          .get('/materiais')
          .then(function (response) {
            deferred.resolve(response.data);
          })
          .catch(function (error) {
            deferred.reject(error);
          });
          return deferred.promise;
      },

      //Create a new material.
      new: function (material) {
        var deferred = $q.defer();
        $http
          .post('/materiais', material)
          .then(function (response) {
            deferred.resolve(response.data);
          })
          .catch(function (error) {
            deferred.reject(error);
          });
        return deferred.promise;
      },

      //Delete an existing material.
      delete: function(materialId) {
        var deffered = $q.defer();
        $http
          .delete('/materiais/' + materialId)
          .then(function (response) {
            deffered.resolve(response.data);
          })
          .catch(function (error) {
            deffered.reject(error);
          });
        return deffered.promise;
      },

      //Update an existing material.
      update: function (material) {
        var deferred = $q.defer();
        $http
          .put('/materiais/' + material.id, material)
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
