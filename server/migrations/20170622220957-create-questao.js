'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('questao', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      disciplina_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'disciplina',
            key: 'id'
        }
      },
      conteudo: {
        type: Sequelize.TEXT
      },
      alternativa_correta: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('questao');
  }
};
