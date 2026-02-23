const jwt = require('jsonwebtoken');
require('dotenv').config();

async function authArtist(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ messgae: "unauthorized" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (decoded.role !== "artist") {
            return res.status(403).json({ message: "You don't have access" });
        }
        req.user = decoded; // added a new property user in req 
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({ message: "unauthorized" });
    }

}

module.exports =  authArtist ;