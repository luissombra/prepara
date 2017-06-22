'use strict';
module.exports = function(sequelize, DataTypes) {

  var Curso = sequelize.define('Curso', {

    nome: DataTypes.STRING,
  }, {
    tableName: "curso",
    underscored: true,
    classMethods: {
      associate: function(models) {
		    Curso.belongsToMany(models.Disciplina, {
          through: {
            model: models.Cronograma,
            unique: false
          },
          foreignKey: 'curso_id'
        });
      }
    }
  });
  return Curso;
};
