'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pharmacy_Team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Pharmacy_Team.init({
    userID: DataTypes.STRING,
    PharmacyTeamName: DataTypes.STRING,
    TeamLeadName: DataTypes.STRING,
    JobTitle: DataTypes.STRING,
    User_Type_ID: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pharmacy_Team',
  });
  return Pharmacy_Team;
};