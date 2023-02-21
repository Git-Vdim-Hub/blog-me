// post table model
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
        post_title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        post_text: {
            type: DataTypes.TEXT,
            allowNull: false,
            unique: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        }
    },
    {
        sequelize,
        timestamps: true,
        //created_at: {type: DataTypes.DATE},
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    });

    module.exports = Post;