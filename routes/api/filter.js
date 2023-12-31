const express = require('express');
const router = express.Router();
const { ctrlFilter } = require('../../controllers');
const { authenticate } = require('../../middlewares');

router.get('/', authenticate, ctrlFilter.getFilters);

module.exports = router;
