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
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8],
        },
    },
},
{
    hooks: {
        beforeCreate: async (newUserData) => {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
        }
    }
},
{
    //sequelize information
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
});

module.exports = User;