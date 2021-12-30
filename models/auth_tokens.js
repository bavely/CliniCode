// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class auth_tokens extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   auth_tokens.init({
//     token: DataTypes.STRING,
//     UserID: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'auth_tokens',
//   });
//   return auth_tokens;
// };

module.exports = (sequelize, DataTypes) => {

    const AuthToken = sequelize.define('AuthToken', {
        token: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        UserId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }, {
        freezeTableName: true,
        // define the table's name
        tableName: 'auth_tokens'
    });

    // set up the associations so we can make queries that include
    // the related objects
    AuthToken.associate = function({ User }) {
        AuthToken.belongsTo(User);
    };

    // generates a random 15 character token and
    // associates it with a user
    AuthToken.generate = async function(UserId) {
        if (!UserId) {
            console.log('AuthToken requires a user ID')
            throw new Error('AuthToken requires a user ID')
        }

        let token = '';

        const possibleCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
            'abcdefghijklmnopqrstuvwxyz0123456789';

        for (var i = 0; i < 15; i++) {
            token += possibleCharacters.charAt(
                Math.floor(Math.random() * possibleCharacters.length)
            );
        }
        token = token + '.' + Date.now();
        return AuthToken.create({ token, UserId })
    }

    return AuthToken;
};