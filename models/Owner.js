const {Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Owner extends Model {}

Owner.init(
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
        potentialOwner_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'Owner',
              key: 'id',
            },
    }, 
},
    {
        sequelize,
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        modelName: 'Owner',

    });

    module.exports = Owner;