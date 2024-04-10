const { connection } = require('../../db/database.js');
const { DataTypes } = require('sequelize');

const User = connection.define('user', {
    firstName : {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            len: [3, 10] //longitud del campo firstname
        }
    },
    lastName : {
        type: DataTypes.STRING
    }
},{ timestamps : false });


module.exports = User;