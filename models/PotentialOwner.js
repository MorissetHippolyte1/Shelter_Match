const {Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class PotentialOwner extends Model {}

PotentialOwner.init(
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
        email: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
<<<<<<< HEAD
        dog_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'dogs',
              key: 'id',
            },
    }, 
=======
        
>>>>>>> 7d4e63df288e657abc1c9e6953fab3d2fb7c2457
    },
    
    {
        sequelize,
        timestamps: true,
        underscored: true,
        freezeTableName: true,
<<<<<<< HEAD
        modelName: 'potentialOwner',
=======
        modelName: 'potentialowner',
>>>>>>> 7d4e63df288e657abc1c9e6953fab3d2fb7c2457

    });

    module.exports = PotentialOwner;