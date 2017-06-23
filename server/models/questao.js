'use strict';
module.exports = function(sequelize, DataTypes) {

  var Questao = sequelize.define('Questao', {
    alternativa_correta: DataTypes.STRING,
    conteudo: DataTypes.TEXT
  }, {
    tableName: "questao",
    underscored: true,
    classMethods: {
      associate: function(models) {
		    Questao.belongsTo(models.Disciplina, {foreignKey: 'disciplina_id', targetKey: 'id'});
        Questao.hasMany(models.Alternativa, {foreignKey: 'questao_id', sourceKey: 'id'});
        Questao.belongsToMany(models.Simulado, {
          through: {
            model: models.SimuladoQuestao,
            unique: false
          },
          foreignKey: 'questao_id'
        });
      }
    }
  });
  return Questao;
};
