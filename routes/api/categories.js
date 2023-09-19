const express = require('express');
const router = express.Router();
const { ctrlCategories } = require('../../controllers');
const { authenticate } = require('../../middlewares');

router.get('/', authenticate, ctrlCategories.getCategories);

module.exports = router;
