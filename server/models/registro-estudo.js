'use strict';
module.exports = function(sequelize, DataTypes) {

  var RegistroEstudo = sequelize.define('RegistroEstudo', {
    tempo: DataTypes.INTEGER,
  }, {
    tableName: "registro-estudo",
    underscored: true,
    classMethods: {
      associate: function(models) {
		    RegistroEstudo.belongsTo(models.Disciplina, {foreignKey: 'disciplina_id', targetKey: 'id'});
      }
    }
  });
  return RegistroEstudo;
};
