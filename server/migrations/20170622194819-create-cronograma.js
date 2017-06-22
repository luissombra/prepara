'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('cronograma', {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      
      curso_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'curso',
            key: 'id'
        }
      },

      disciplina_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'disciplina',
            key: 'id'
        }
      },

      peso: {
        type: Sequelize.DECIMAL,
        allowNull: false
      }
    
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('cronograma');
  }
};
