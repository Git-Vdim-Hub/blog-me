const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}


Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        post_text: {
            type: DataTypes.TEXT,
            allowNull: false,
            unique: false
        },
        date: {
            type: DataTypes.DATE,
            validate: {
                isDate: true,
            },
            allowNull: false,
            unique: false
        },
        time: {
            type: DataTypes.TIME,
            allowNull: false,
            unique: false,
        },
        user_id: {
            type: DataTypes.STRING,
            references: {
                model: 'user',
                key: 'id',
            },
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    });

    module.exports = Post;