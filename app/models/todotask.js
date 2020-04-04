'use strict';
module.exports = (sequelize, DataTypes) => {
  const TodoTask = sequelize.define('TodoTask', {
    nome_tarefa: DataTypes.STRING,
    descricao_tarefa: DataTypes.STRING,
    status_tarefa: DataTypes.ENUM('Pendente','Concluida','Em andamento'),
    data_criacao: DataTypes.DATE
  }, {});
  TodoTask.associate = function(models) {
    // associations can be defined here
  };
  return TodoTask;
};