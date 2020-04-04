'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('TodoTasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome_tarefa: {
        type: Sequelize.STRING
      },
      descricao_tarefa: {
        type: Sequelize.STRING
      },
      status_tarefa: {
        type: Sequelize.ENUM('Pendente','Concluida','Em andamento')
      },
      data_criacao: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('TodoTasks');
  }
};