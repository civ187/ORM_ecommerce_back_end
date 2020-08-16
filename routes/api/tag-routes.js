const router = require('express').Router();
const { Tag, Product, ProductTag, Category } = require('../../models');

// The `/api/tags` endpoint

// FIND ALL TAGS WITH ASSOCIATED PRODUCT DATA
// ======================================================================
router.get('/', (req, res) => {
  Tag.findAll({
    include:[
      {
        model: Product,
        through: ProductTag
      }
    ]
  }).then(dbTag => {
    res.json(dbTag);
  });
});
// ======================================================================


// FIND ONE TAG BY ID WITH ASSOCIATEDPRODUCT DATA
// ======================================================================
router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include:[
      {
        model: Product,
        through: ProductTag
      }
    ]
  }).then(dbTag => {
    res.json(dbTag);
  });
});
// ======================================================================


// CREATE A NEW TAG
// ======================================================================
router.post('/', (req, res) => {
  Tag.create({
    tag_name: req.body.tag_name
  }).then(dbTag => {
    res.json(dbTag);
  });
});
// ======================================================================


// UPDATE A TAG NAME BY ID
// ======================================================================
router.put('/:id', (req, res) => {
  Tag.update(
    {
      tag_name: req.body.tag_name
    },
    {
      where: {
        id: req.params.id
      }
    }
  ).then(dbTag => {
    res.json(dbTag);
  });
});
// ======================================================================


// DELETE ONE TAG BY ID
// ======================================================================
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  }).then(dbTag => {
    if(!dbTag) {
      res.status(404).json({ message: 'Sorry, No tag found matching that ID'});
      return;
    }
    res.status(200).json({ message: 'Tag has been deleted'});
  });
});

module.exports = router;
