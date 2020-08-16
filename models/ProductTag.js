const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
const { Tag, Product } = require('.');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    product_id: {
      type: DataTypes.INTEGER,
      
      references: {           // refernce the 'product' models 'id'
        model: 'product',
        key: 'id'
      }
    },

    tag_id: {
      type: DataTypes.INTEGER,
      
      references: {           // refernce the 'tag' models'id'
        model: 'tag',
        key: 'id'
      }
    }
  },
  
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
