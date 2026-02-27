const musicModel = require('../models/music.model');
const albumModel = require('../models/album.model');
const { uploadFile } = require('../services/storage.service');
const playlistModel = require('../models/playlist.model');
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

async function createPlaylist(req, res) {
    const playlist = await playlistModel.create({
        name: req.body.name,
        user: req.user.id
    });
    return res.status(201).json(playlist);
}

async function getAllmusic(req, res) {
    const musics = await musicModel.find().limit(10).populate("artist", "username email");
    if (!musics) {
        return res.status(403).json({ message: "Music not found" });
    }
    return res.status(200).json({musics});
}

async function getAllAlbums(req, res) {
    const albums = await albumModel.find().select("title artist").populate("artist", "username email");
    return res.status(200).json({
        message: "Album fetched successfully",
        album: albums
    });
}

async function getAlbumById(req, res) {
    const id = req.params.id;
    
     const album = await albumModel
      .findById(id)
      .populate("artist", "username email")
      .populate("musics");
    console.log(album);
    if (!album) {
        return res.status(403).json({ message: "album not found" });
    }
    return res.status(200).json(album);
}

module.exports = { createMusic, createAlbum, getAllmusic,getAllAlbums, getAlbumById };