const express = require('express');
const { createMusic, createAlbum, getAllmusic } = require('../controllers/music.controller');
const { authArtist,authUser } = require('../middlewares/auth.middleware');
const multer = require('multer');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post('/upload', authArtist , upload.single('music'), createMusic);
router.post('/album', authArtist , createAlbum);

router.get('/', authUser, getAllmusic);

module.exports = router;