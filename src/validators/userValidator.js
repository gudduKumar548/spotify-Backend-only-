const { body } = require("express-validator");

const signupValidation = [
  body("username")
    .notEmpty().withMessage("Name is required")
    .isLength({ min: 3, max: 10 }).withMessage("Name must be 3-10 characters")
    .trim(),

  body("email")
    .notEmpty().withMessage("Email is required")
    .isEmail().withMessage("Valid email required")
    .normalizeEmail(),

  body("password")
    .notEmpty().withMessage("Password is required")
    .isLength({ min: 6, max: 8 }).withMessage("Password must be 6-8 characters")
];

module.exports = { signupValidation };