'use strict';
const bcrypt = require('bcrypt');
module.exports = {
    up: async(queryInterface, Sequelize) => {


        await queryInterface.bulkInsert('Users', [{
            username: 'admin',
            password: bcrypt.hashSync('123', 10),
            User_Type_ID: '3'
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