const express = require('express');
const { handleUserRegister, handleLoginUser, handleLogOut } = require('../controllers/auth.controller');
const { authLogoutUser } = require('../middlewares/auth.middleware');
const router = express.Router();

router.post('/Register',handleUserRegister);
router.post('/login', handleLoginUser);
router.post('/logout', authLogoutUser, handleLogOut);

module.exports = router;