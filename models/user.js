// 'use strict';

// const {
//     Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//     class User extends Model {
//         /**
//          * Helper method for defining associations.
//          * This method is not a part of Sequelize lifecycle.
//          * The `models/index` file will call this method automatically.
//          */
//         static associate(models) {
//             // define association here
//         }
//     };
//     User.init({
//         firstName: DataTypes.STRING,
//         lastName: DataTypes.STRING,
//         emaiAddressl: DataTypes.STRING,
//         userName: DataTypes.STRING,
//         phoneNumber: DataTypes.STRING,
//         SecPhoneNumber: DataTypes.STRING,
//         Address: DataTypes.STRING,
//         City: DataTypes.STRING,
//         State: DataTypes.STRING,
//         Zip: DataTypes.STRING,
//         User_Type_ID: DataTypes.STRING,
//         Password: DataTypes.STRING
//     }, {
//         sequelize,
//         modelName: 'User',
//     });
//     return User;
// };

const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {




    const User = sequelize.define('User', {
        firstName: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: true,
        },
        lastName: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: true,
        },
        emaiAddressl: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: true,
        },
        userName: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        phoneNumber: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: true,
        },
        SecPhoneNumber: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: true,
        },
        Address: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: true,
        },
        City: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: true,
        },
        State: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: true,
        },
        Zip: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: true,
        },
        Password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        User_Type_ID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });

    // set up the associations so we can make queries that include
    // the related objects
    User.associate = function({ AuthToken }) {
        User.hasMany(AuthToken);
    };

    // This is a class method, it is not called on an individual
    // user object, but rather the class as a whole.
    // e.g. User.authenticate('user1', 'password1234')
    User.authenticate = async function(userName, Password) {

        const user = await User.findOne({ where: { userName } });

        // bcrypt is a one-way hashing algorithm that allows us to
        // store strings on the database rather than the raw
        // passwords. Check out the docs for more detail
        if (bcrypt.compareSync(Password, user.password)) {
            return user.authorize();
        }
        console.log("error")
        throw new Error('invalid password');
    }

    // in order to define an instance method, we have to access
    // the User model prototype. This can be found in the
    // sequelize documentation
    User.prototype.authorize = async function() {
        const { auth_tokens } = sequelize.models;
        const user = this

        // create a new auth token associated to 'this' user
        // by calling the AuthToken class method we created earlier
        // and passing it the user id
        const authToken = await auth_tokens.generate(this.id);

        // addAuthToken is a generated method provided by
        // sequelize which is made for any 'hasMany' relationships
        await user.addAuthToken(authToken);

        return { user, authToken }
    };


    User.prototype.logout = async function(token) {

        // destroy the auth token record that matches the passed token
        sequelize.models.AuthToken.destroy({ where: { token } });
    };

    return User;
};