'use strict';
const bcrypt = require('bcrypt');
module.exports = {
    up: async(queryInterface, Sequelize) => {


        await queryInterface.bulkInsert('Users', [{

            username: 'doctor1',
            password: bcrypt.hashSync('123', 10),
            User_Type_ID: '2'
        }, {

            username: 'doctor2',
            password: bcrypt.hashSync('123', 10),
            User_Type_ID: '2'
        }, {

            username: 'doctor3',
            password: bcrypt.hashSync('123', 10),
            User_Type_ID: '2'
        }, {

            username: 'doctor4',
            password: bcrypt.hashSync('123', 10),
            User_Type_ID: '2'

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