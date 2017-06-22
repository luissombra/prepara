'use strict';
module.exports = function(sequelize, DataTypes) {

  var Alternativa = sequelize.define('Alternativa', {
    letra: DataTypes.STRING,
    conteudo: DataTypes.TEXT,
  }, {
    tableName: "alternativa",
    underscored: true,
    classMethods: {
      associate: function(models) {
		    Alternativa.belongsTo(models.Questao, {foreignKey: 'questao_id', targetKey: 'id'});
      }
    }
  });
  return Alternativa;
};
