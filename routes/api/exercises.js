const express = require('express');
const router = express.Router();
const {  ctrlExercises } = require('../../controllers');
const { authenticate } = require('../../middlewares');

router.get('/', authenticate, ctrlExercises.getExercises);

module.exports = router;
