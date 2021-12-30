'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            firstName: {
                type: Sequelize.STRING
            },
            lastName: {
                type: Sequelize.STRING
            },
            emaiAddressl: {
                type: Sequelize.STRING
            },
            userName: {
                type: Sequelize.STRING
            },
            phoneNumber: {
                type: Sequelize.STRING
            },
            SecPhoneNumber: {
                type: Sequelize.STRING
            },
            Address: {
                type: Sequelize.STRING
            },
            City: {
                type: Sequelize.STRING
            },
            State: {
                type: Sequelize.STRING
            },
            Zip: {
                type: Sequelize.STRING
            },
            User_Type_ID: {
                type: Sequelize.STRING
            },
            Password: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: true,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: true,
                type: Sequelize.DATE
            }
        });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('Users');
    }
};