const express = require("express");
const router = express.Router();
const { ctrlAuth } = require("../../controllers");
const { authenticate, validateBody } = require("../../middlewares");
const {
  registerSchema,
  loginSchema,
  updateSchema,
} = require("../../schemas/authSchema");

router.post("/register", validateBody(registerSchema), ctrlAuth.register);

router.post("/login", validateBody(loginSchema), ctrlAuth.login);

router.patch("/update", validateBody(updateSchema), ctrlAuth.update);

//router.get("/calories", ctrlAuth.login);

//router.get("/current", authenticate, ctrlAuth.currentUser);

//router.post("/logout", authenticate, ctrlAuth.logout);

module.exports = router;
