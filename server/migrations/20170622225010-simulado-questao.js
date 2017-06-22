'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('simulado_questao', {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      
      simulado_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'simulado',
            key: 'id'
        }
      },

      questao_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'questao',
            key: 'id'
        }
      },

      alternativa_escolhida: {
        type: Sequelize.STRING
      },

      resolvida_em: {
        type: Sequelize.DATE
      }

    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('simulado_questao');
  }
};
