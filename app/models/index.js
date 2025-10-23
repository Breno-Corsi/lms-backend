// /app/models/index.js

/*
    This script initializes the database with the specified tables.
    > node ./app/models/index.js
*/

require("dotenv").config();

const { execSync } = require('child_process');
const Sequelize = require("sequelize");

let command = `CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`;
command = `mysql -u ${process.env.USER} -p${process.env.PASSWORD} -e "${command}"`;
execSync(command);

const sequelize = new Sequelize(process.env.DB_NAME, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: process.env.DIALECT
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user.model.js")(sequelize, Sequelize);
db.books = require("./book.model.js")(sequelize, Sequelize);

db.sequelize.sync();

module.exports = db;
