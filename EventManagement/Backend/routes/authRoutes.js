const express = require("express");
const { register, login } = require("../controllers/authController");
const {
  registerValidationSchema,
  loginValidationSchema,
} = require("../middleware/AuthValidation");
const router = express.Router();

router.post("/register", registerValidationSchema, register);
router.post("/login", loginValidationSchema, login);

module.exports = router;
