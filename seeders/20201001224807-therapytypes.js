'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('TherapyTypes', [{
      name: 'therapyType1',
  
    },{
     name: 'therapyType2',
    
   },{
     name: 'therapyType3',
    
   },{
     name: 'therapyType4',
    

   }
   ], {});
   

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
