'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Patients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userID: {
        type: Sequelize.STRING
      },
      Allargy: {
        type: Sequelize.STRING
      },
      MRN: {
        type: Sequelize.STRING
      },
      ExtMRN: {
        type: Sequelize.STRING
      },
      EmrgContactName: {
        type: Sequelize.STRING
      },
      EmrgContactPhone: {
        type: Sequelize.STRING
      },
      EmrgContactAddress: {
        type: Sequelize.STRING
      },
      DOB: {
        type: Sequelize.STRING
      },
      SendText: {
        type: Sequelize.STRING
      },
      ReferralDate: {
        type: Sequelize.STRING
      },
      MDID: {
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
    await queryInterface.dropTable('Patients');
  }
};