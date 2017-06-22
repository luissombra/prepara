'use strict';
module.exports = function(sequelize, DataTypes) {

  var SimuladoQuestao = sequelize.define('SimuladoQuestao', {
    alternativa_escolhida: DataTypes.STRING,
    resolvida_em: DataTypes.DATE
  }, {
    tableName: "simulado_questao",
    underscored: true,
    timestamps: false,
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return SimuladoQuestao;
};
