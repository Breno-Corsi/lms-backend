// /app/models/users.model.js

const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("users", {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sex: {
            type: DataTypes.ENUM('M', 'F'),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    });

    return Users;
};
