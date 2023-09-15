const express = require('express');
const router = express.Router();
const { ctrlFilter } = require('../../controllers');
const { authenticate } = require('../../middlewares');

// router.get('/:type', authenticate, ctrlFilter.getByFilters);

router.get('/muscles', authenticate, ctrlFilter.getMuscles);

router.get('/equipment', authenticate, ctrlFilter.getEquipment);

router.get('/bodyparts', authenticate, ctrlFilter.getBodyParts);

module.exports = router;
