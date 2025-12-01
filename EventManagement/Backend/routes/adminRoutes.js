const express = require("express");
const router = express.Router();
const { adminRegister, adminLogin } = require("../controllers/adminController");
const {
  registerValidationSchema,
  loginValidationSchema,
} = require("../middleware/AuthValidation");

router.post("/register", registerValidationSchema, adminRegister);
router.post("/login", loginValidationSchema, adminLogin);

module.exports = router;
