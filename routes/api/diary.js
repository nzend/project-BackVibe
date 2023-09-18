const express = require('express');
const router = express.Router();
const { ctrlDiary } = require('../../controllers');
const { authenticate, validateBody, upload } = require('../../middlewares');

router.post('/add-product', authenticate, ctrlDiary.addProducts);
router.get('/', authenticate, ctrlDiary.getDiary);

module.exports = router;
