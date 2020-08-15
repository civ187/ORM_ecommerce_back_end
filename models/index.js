// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category);

// Categories have many Products
Category.hasMany(Product);

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, { 
  through: ProductTag, 
  as: 'ALPHA', // not sure what to add here
  foreignKey: 'tag_id'

});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, { 
  through: ProductTag,
  as: 'BETA', // not sure what to add here
  foreignKey: 'product_id'
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
