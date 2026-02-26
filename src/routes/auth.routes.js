const express = require('express');
const { handleUserRegister, handleLoginUser, handleLogOut } = require('../controllers/auth.controller');
const { authLogoutUser } = require('../middlewares/auth.middleware');
const { signupValidation } = require('../validators/userValidator');
const { validate } = require("../middlewares/validation.middleware");
const router = express.Router();

router.post('/Register',signupValidation,validate ,handleUserRegister);
router.post('/login', handleLoginUser);
router.post('/logout', authLogoutUser, handleLogOut);

module.exports = router;