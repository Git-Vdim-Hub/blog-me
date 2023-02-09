const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {};

User.init({
    //table columns
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    }
},{
    //sequelize information
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
});

module.exports = User;