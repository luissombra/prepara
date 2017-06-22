'use strict';
module.exports = function(sequelize, DataTypes) {

  var Disciplina = sequelize.define('Disciplina', {

    nome: DataTypes.STRING,
  }, {
    tableName: "disciplina",
    underscored: true,
    classMethods: {
      associate: function(models) {
      	Disciplina.belongsToMany(models.Curso, {
          through: {
            model: models.Cronograma,
            unique: false
          },
          foreignKey: 'disciplina_id'
        });

        Disciplina.hasMany(models.Material, {foreignKey: 'disciplina_id', sourceKey: 'id'});

        Disciplina.hasMany(models.RegistroEstudo, {foreignKey: 'disciplina_id', sourceKey: 'id'});

        Disciplina.hasMany(models.Questao, {foreignKey: 'disciplina_id', sourceKey: 'id'});
      }
    }
  });
  return Disciplina;
};
