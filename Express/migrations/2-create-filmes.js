/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('filmes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      descricao: {
        type: Sequelize.STRING
      },
      titulo: {
        type: Sequelize.STRING
      },
      foto: {
        type: Sequelize.STRING
      },
      idGenero: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'generos',
          },
          key: 'id'
        },
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('filmes');
  }
};