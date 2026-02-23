const musicModel = require('../models/music.model');
const albumModel = require('../models/album.model');
const { uploadFile } = require('../services/storage.service');
require('dotenv').config();

async function createMusic(req, res) {
    const { title } = req.body;
    const file = req.file;

    if (!file) {
        return res.status(400).json({ message: "file is required" });
    }
    const result = await uploadFile(file.buffer.toString('base64'));

    const music = await musicModel.create({
        uri: result.url,
        title,
        artist: req.user.id,
    });
    return res.status(201).json({
        message: "Muisc created successfully",
        music,
    });
}

async function createAlbum(req, res) {
    const { title, musics } = req.body;
    const album = await albumModel.create({
        title,
        artist: req.user.id,
        musics: musics
    });
    return res.status(201).json({
        message: "Album created successfully",
        album,
    });
}
module.exports = { createMusic, createAlbum };