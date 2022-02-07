const {Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// const express = require('express');
// const passport = require ('passport');
// require('./auth');

// const app = express();

// app.get('/login', (req,res) => {
//     res.send('<a href="/auth/google">Authenticate with Google</a>')
// });
// app.get('/auth/google', 
//     passport.authenticate('google', { scope: ['email', 'profile']}));


// app.get('/Dogs', (req,res) => {
//     res.send();
// });
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
            unique: true,
            validate: {
                isEmail: true,
            }
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len:[8],
            },
        }


    },
    
    {
        sequelize,
        timestamps: true,
        underscored: true,
        freezeTableName: true,


        modelName: 'potentialowner',


    });

    // app.get('/login', (req,res) => {
    //     res.send('<a href="/auth/google">Authenticate with Google</a>')
    // });
    // app.get('/auth/google', 
    //     passport.authenticate('google', { scope: ['email', 'profile']}));
    
    
    // app.get('/Dogs', (req,res) => {
    //     res.send();
    // });no

    module.exports = PotentialOwner;

    // app.listen(3001,() => console.log('listen'));