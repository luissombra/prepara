'use strict';
module.exports = function(sequelize, DataTypes) {

  var Cronograma = sequelize.define('Cronograma', {
  }, {
  	tableName: "cronograma",
  	underscored: true,
    timestamps: false,
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return Cronograma;
};
