// /app/models/book.model.js

const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Book = sequelize.define("books", {
        isbn: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        id: false,
        timestamps: true
    });

    return Book;
};
