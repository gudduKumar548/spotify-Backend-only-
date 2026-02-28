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
    try {
        const { name, musics } = req.body;

        if (!name) {
            return res.status(400).json({ message: "Playlist name required" });
        }
        const musicsid = await playlistModel.findOne({ musics });
        if (musicsid) {
            return res.status(400).json({ message: "music already added in playlist" });
        }

        const playlist = await playlistModel.create({
            name,
            user: req.user.id,
            musics: musics || []
        });

        return res.status(201).json(playlist);

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server error" });
    }
}

async function deletePlylist(req, res) {
    try {
        const playlistId = req.params.id;
        const playlist = await playlistModel.findById(playlistId);

        if (!playlist) {
            return res.status(404).json({ message: "Playlist not found" });
        }

        if (playlist.user.toString() !== req.user.id) {
            return res.status(403).json({ message: "Not authorized" });
        }
        await playlistModel.findByIdAndDelete(playlistId);
        return res.status(200).json({ message: "playlist deleted successfully" });
    } catch (error) {
        return res.status(400).json({ message: "playlist not found" });
    }
}

async function getAllPlaylist(req, res) {
    try {
        const playlists = await playlistModel.find({}).limit(10).populate("musics").populate("user", "username role");
        if (playlists.length === 0) {
            return res.status(404).json({ message: "No playlist found" });
        }
        return res.status(200).json(playlists);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "server error" });
    }
}

async function getPlaylist(req, res) {
    try {
        const playlistId = req.params.id;
        const playlist = await playlistModel.findById(playlistId);
        if (!playlist) {
            return res.status(404).json({ message: "no playlist found" });
        }
        if (playlist.user.toString() !== req.user.id) {
            return res.status(403).json({ message: "Not authorized" });
        }
        return res.status(200).json(playlist);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "server error" });
    }
}

async function getAllmusic(req, res) {
    const musics = await musicModel.find().limit(10).populate("artist", "username role");
    if (!musics) {
        return res.status(403).json({ message: "Music not found" });
    }
    return res.status(200).json({ musics });
}

async function getAllAlbums(req, res) {
    const albums = await albumModel.find().select("title artist").populate("artist", "username role");
    return res.status(200).json({
        message: "Album fetched successfully",
        album: albums
    });
}

async function getAlbumById(req, res) {
    const id = req.params.id;

    const album = await albumModel
        .findById(id)
        .populate("artist", "username role")
        .populate("musics");
    console.log(album);
    if (!album) {
        return res.status(403).json({ message: "album not found" });
    }
    return res.status(200).json(album);
}

module.exports = { createMusic, createAlbum, createPlaylist, deletePlylist, getAllPlaylist,getPlaylist, getAllmusic, getAllAlbums, getAlbumById };