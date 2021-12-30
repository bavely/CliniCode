'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Prescriptions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      MRN: {
        type: Sequelize.STRING
      },
      RxNum: {
        type: Sequelize.STRING
      },
      TherapyTypeID: {
        type: Sequelize.STRING
      },
      RxDate: {
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
    await queryInterface.dropTable('Prescriptions');
  }
};