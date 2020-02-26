const { Model, DataTypes } = require('sequelize')
const sequelize = require('../database')
class User extends Model {}

User.init({
  email: {type: DataTypes.CHAR},
  username: DataTypes.CHAR, 
  password: DataTypes.CHAR,
  name: DataTypes.CHAR
}, { sequelize, modelName: 'user' });

module.exports = User