const express = require("express");
const router = express.Router();
const  { ctrlAuth }  = require("../../controllers");
const { authenticate } = require("../../middlewares");

router.post("/register", ctrlAuth.register);

router.post("/login", ctrlAuth.login);

router.get("/current", authenticate, ctrlAuth.currentUser);

router.post("/logout", authenticate, ctrlAuth.logout);


module.exports = router;
