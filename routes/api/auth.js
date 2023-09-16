const express = require("express");
const router = express.Router();
const { ctrlAuth } = require("../../controllers");
const { authenticate, validateBody, upload } = require("../../middlewares");
const {
  registerSchema,
  loginSchema,
  userBodySchema,
  updateSchema,
} = require("../../schemas/authSchema");

router.post("/register", validateBody(registerSchema), ctrlAuth.register);

router.post("/login", validateBody(loginSchema), ctrlAuth.login);

router.post(
  "/create",
  authenticate,
  validateBody(userBodySchema),
  ctrlAuth.userBody
);

router.patch(
  "/update",
  authenticate,
  upload.single("avatar"),
  validateBody(updateSchema),
  ctrlAuth.update
);

router.get("/current", authenticate, ctrlAuth.currentUser);

router.post("/logout", authenticate, ctrlAuth.logout);

module.exports = router;
