'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Patient.init({
    userID: DataTypes.STRING,
    Allargy: DataTypes.STRING,
    MRN: DataTypes.STRING,
    ExtMRN: DataTypes.STRING,
    EmrgContactName: DataTypes.STRING,
    EmrgContactPhone: DataTypes.STRING,
    EmrgContactAddress: DataTypes.STRING,
    DOB: DataTypes.STRING,
    SendText: DataTypes.STRING,
    ReferralDate: DataTypes.STRING,
    MDID: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Patient',
  });
  return Patient;
};