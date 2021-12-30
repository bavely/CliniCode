'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Prescription extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Prescription.init({
    MRN: DataTypes.STRING,
    RxNum: DataTypes.STRING,
    TherapyTypeID: DataTypes.STRING,
    RxDate: DataTypes.STRING,
    MDID: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Prescription',
  });
  return Prescription;
};