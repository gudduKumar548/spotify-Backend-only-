const { ImageKit } = require('@imagekit/nodejs');
require('dotenv').config();

const ImageKitClient = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
})

async function uploadFile(file) {
    const response = await ImageKitClient.files.upload({
        file,
        fileName: "music_" + Date.now(),
        folder: "yt-complete-backend/music"
    });
    return response;
}

module.exports = { uploadFile };