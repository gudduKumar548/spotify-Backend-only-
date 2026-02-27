const express = require('express');
const { createMusic, createAlbum, getAllmusic, getAllAlbums, getAlbumById } = require('../controllers/music.controller');
const { authArtist,authUser } = require('../middlewares/auth.middleware');
const multer = require('multer');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post('/upload', authArtist , upload.single('music'), createMusic);
router.post('/albums', authArtist , createAlbum);

router.get('/songs', authUser, getAllmusic);
router.get('/albums', authUser, getAllAlbums);
router.get('/album/:id', authUser, getAlbumById);

module.exports = router;