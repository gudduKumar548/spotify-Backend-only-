const jwt = require('jsonwebtoken');
const blacklistedTokenModel = require("../models/blacklisted.Token.model");
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

async function authUser(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: "unauthorized" });
    }
    const isBlacklisted = await blacklistedTokenModel.findOne({ token });

    if (isBlacklisted) {
        return res.status(401).json({ message: "Token expired. Login again" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (decoded.role === "artist") {
            return res.status(401).json({ message: "You don't have access" });
        }
        req.user = decoded;
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({ message: "unauthorized" });
    }

}

async function authLogoutUser(req, res, next) {
    try {
    const token = req.cookies?.token;
    if (!token) {
        return res.status(401).json({ message: "token not found" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    req.token = token;
    next(); 
    } catch (error) {
        return res.status(401).json({ message: "Invalid token" }); 
    } 
}

module.exports = { authArtist,authUser, authLogoutUser};