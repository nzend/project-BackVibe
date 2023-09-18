const express = require('express');
const router = express.Router();
const { ctrlProducts } = require('../../controllers');
const { authenticate } = require('../../middlewares');

// router.get('/:type', authenticate, ctrlFilter.getByFilters);

router.get('/', authenticate, ctrlProducts.getAllProducts);



module.exports = router;