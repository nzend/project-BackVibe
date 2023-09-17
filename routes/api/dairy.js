const express = require('express');
const router = express.Router();
const { ctrlDairy } = require('../../controllers');
const { authenticate, validateBody, upload } = require('../../middlewares');

router.post('/', ctrlDairy.addProducts);

module.exports = router;
