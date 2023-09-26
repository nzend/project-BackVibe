const express = require("express");
const router = express.Router();
const { ctrlStatistics } = require("../../controllers");
const { authenticate } = require("../../middlewares");

router.get("/", ctrlStatistics.getStatistics);

module.exports = router;
