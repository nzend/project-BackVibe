const express = require('express');
const router = express.Router();
const {  ctrlAssets } = require('../../controllers');


router.get('/', ctrlAssets.getAssets);

module.exports = router;
