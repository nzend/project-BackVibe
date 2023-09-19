const express = require('express');
const router = express.Router();
const { ctrlDiary } = require('../../controllers');
const { authenticate } = require('../../middlewares');

router.post('/add-product', authenticate, ctrlDiary.addProducts);
router.get('/', authenticate, ctrlDiary.getDiary);
router.delete("/delete-product", authenticate, ctrlDiary.deleteProduct);
router.post('/add-exercise', authenticate, ctrlDiary.addExercise);
router.delete('/delete-exercise', authenticate, ctrlDiary.deleteExercise);
module.exports = router;
