const express = require('express');
const router = express.Router();
const { ctrlDiary } = require('../../controllers');
const { authenticate, validateBody, upload } = require('../../middlewares');

router.post('/add-product', authenticate, ctrlDiary.addProducts);

module.exports = router;
