// exporting the database connection in a sequelize object

const { Sequelize } = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('sample_app', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql'/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
    omitNull: false

 });

module.exports = sequelize