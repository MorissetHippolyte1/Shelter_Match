const {Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Dogs extends Model {}

Dogs.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false, 
            primaryKey: true, 
            autoIncrement: true, 
        }, 
        name: {
            type: DataTypes.STRING,
            allowNull: false, 
        }, 
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        size: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        breed: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sex: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        potentialowner_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'potentialowner',
                key: 'id',
            }
        }


        },
    
    {
        sequelize,
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        modelName: 'dogs',

    });

    module.exports = Dogs;