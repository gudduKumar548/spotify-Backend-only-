const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const blacklistedTokenModel = require('../models/blacklisted.Token.model');
require('dotenv').config();

async function handleUserRegister(req, res) {
    const { username, email, password, role = "user" } = req.body;

    const isUserAlreadyExists = await userModel.findOne({
        $or: [{ username }, { email }]
    });
    if (isUserAlreadyExists) {
        return res.status(400).json({ message: "user already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userModel.create({
        username,
        email,
        password: hashedPassword,
        role
    });

    const token = jwt.sign(
        {
            id: user._id,
            role: user.role,
        },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    );
    res.cookie("token", token);

    res.status(201).json({
        message: "user Registered successfully",
        user: {
            username: user.username,
            email: user.email,
            role: user.role
        }
    })
}

async function handleLoginUser(req, res) {
    try {
        const { username, email, password } = req.body;
        const user = await userModel.findOne({
            $or: [{ username }, { email }]
        });
        if (!user) {
            return res.status(401).json({ message: "Invalid credential" });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(404).json({ message: "Invalid password" });
        }
        const token = jwt.sign(
            {
                id: user._id,
                role: user.role
            },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );
        res.cookie('token', token);
        return res.status(200).json({
            message: "successfully logged-in",
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                role: user.role
            }
        });
    } catch (error) {
        return res.status(400).json({ message: "Invalid credentials" });
    }

}

async function handleLogOut(req, res) {
    try {
        const token = req.token;
        const expiresAt = new Date(req.user.exp * 1000);

        await blacklistedTokenModel.create({
            token,
            expiresAt
        });
        res.clearCookie("token");
        return res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Logout failed" });
    }
}

module.exports = { handleUserRegister, handleLoginUser, handleLogOut };