'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Pharmacy_Teams', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userID: {
        type: Sequelize.STRING
      },
      PharmacyTeamName: {
        type: Sequelize.STRING
      },
      TeamLeadName: {
        type: Sequelize.STRING
      },
      JobTitle: {
        type: Sequelize.STRING
      },
      User_Type_ID: {
        type: Sequelize.STRING
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Pharmacy_Teams');
  }
};