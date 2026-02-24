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

async function getAllmusic(req, res) {
    if (req.user.role === "artist") {
        return res.status(401).json({ message: "you don't have an access" });
    }
    const musics = await musicModel.find();
    if (!musics) {
        return res.status(403).json({ message: "Music not found" });
    }
    return res.status(200).json(musics);
}
module.exports = { createMusic, createAlbum, getAllmusic };