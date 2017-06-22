'use strict';
module.exports = function(sequelize, DataTypes) {

  var Simulado = sequelize.define('Simulado', {

  }, {
    tableName: "simulado",
    underscored: true,
    classMethods: {
      associate: function(models) {
        Simulado.belongsToMany(models.Questao, {
          through: {
            model: models.SimuladoQuestao,
            unique: false
          },
          foreignKey: 'simulado_id'
        });
      }
    }
  });
  return Simulado;
};
