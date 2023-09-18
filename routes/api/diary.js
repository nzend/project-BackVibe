const express = require('express');
const router = express.Router();
const { ctrlDiary } = require('../../controllers');
const { authenticate } = require('../../middlewares');

router.post('/add-product', authenticate, ctrlDiary.addProducts);
router.get('/', authenticate, ctrlDiary.getDiary);

router.delete("/delete-product", authenticate, ctrlDiary.deleteProduct);

module.exports = router;
