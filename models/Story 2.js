const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Story extends Model {}

Story.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    dog_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    story: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    owner_name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
 
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'story',
  }
);

module.exports = Story;
