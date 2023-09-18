const express = require('express');
const router = express.Router();
const { ctrlDiary } = require('../../controllers');
const { authenticate, validateBody, upload } = require('../../middlewares');

router.post('/add-product', authenticate, ctrlDiary.addProducts);

router.post('/add-exercise', authenticate, ctrlDiary.addExercise);

module.exports = router;
