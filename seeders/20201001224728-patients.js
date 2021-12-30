'use strict';
const bcrypt = require('bcrypt');
module.exports = {
    up: async(queryInterface, Sequelize) => {


        await queryInterface.bulkInsert('Users', [{
            username: 'patient1',
            password: bcrypt.hashSync('123', 10),
            User_Type_ID: '1'
        }, {
            username: 'patient2',
            password: bcrypt.hashSync('123', 10),
            User_Type_ID: '1'
        }, {
            username: 'patient3',
            password: bcrypt.hashSync('123', 10),
            User_Type_ID: '1'
        }, {
            username: 'patient4',
            password: bcrypt.hashSync('123', 10),
            User_Type_ID: '1'

        }], {});
    },

    down: async(queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};