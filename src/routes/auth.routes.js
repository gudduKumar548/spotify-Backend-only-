const express = require('express');
const { handleUserRegister,handleLoginUser} = require('../controllers/auth.controller');
const router = express.Router();

router.post('/Register',handleUserRegister);
router.post('/login', handleLoginUser);

module.exports = router;