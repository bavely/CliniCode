const Sequelize = require('sequelize');
const config = require("/Config");
const db = {}

const sequelize = new Sequelize(config.DB2.database, config.DB2.user, config.DB2.password, {
    host: config.DB2.server,
    dialect: 'mssql',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },

});
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db