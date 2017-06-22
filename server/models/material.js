'use strict';
module.exports = function(sequelize, DataTypes) {

  var Material = sequelize.define('Material', {
    conteudo: DataTypes.TEXT,
  }, {
    tableName: "material",
    underscored: true,
    classMethods: {
      associate: function(models) {
		    Material.belongsTo(models.Disciplina, {foreignKey: 'disciplina_id', targetKey: 'id'});
      }
    }
  });
  return Material;
};
