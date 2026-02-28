const express = require('express');
const { authUser } = require('../middlewares/auth.middleware');
const { createPlaylist, deletePlylist, getAllPlaylist, getPlaylist } = require('../controllers/music.controller');

const router = express.Router();

router.get('/playlist', authUser, getAllPlaylist);
router.get('/playlist/:id', authUser, getPlaylist);

router.post('/playlist', authUser, createPlaylist);
router.delete('/playlist/:id',authUser, deletePlylist);

module.exports = router;