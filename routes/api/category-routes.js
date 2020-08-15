const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/categories', (req, res) => {
  // find all categories
  Category.findAll({}).then(dbCategory => {
    res.json(dbCategory);
  });

  // be sure to include its associated Products

});

router.get('/catergories/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne({
    where: {
      id: req.params.id
    }
  }).then(dbCategory => {
    res.json(dbCategory);
  });

  // be sure to include its associated Products
});

router.post('/categories', (req, res) => {
  // create a new category
console.log(req.body);
Category.create({
  category_name: req.body.category_name
}).then(dbCategory => {
  res.json(dbCategory);
  });
});

router.put('/categories/:id', (req, res) => {
  // update a category by its `id` value
  Category.update({
    category_name:req.body.category_name
  },
  {
    where: {
      id: req.params.id
    }
  }
  ).then(dbCategory => {
    res.json(dbCategory);
  });
});

router.delete('/categories/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  }).then(dbCategory => {
    res.json(dbCategory);
  });
});

module.exports = router;
