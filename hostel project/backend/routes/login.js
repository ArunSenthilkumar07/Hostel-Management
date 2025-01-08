
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models/userModel.js'); 
const dotenv = require('dotenv');

dotenv.config();

const router = express.Router();

// Register
router.post('/user/register', async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        let user = await User.findOne({ where: { email } });

        if (user) {
            return res.status(400).json({
                message: "Email already exists",
            });
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const activeToken = jwt.sign({ user }, process.env.JWT_KEY, { expiresIn: '5m' });

        user = await User.create({
            name,
            email,
            password: hashPassword,
            role,
            activeToken: activeToken,
        });

       
        return res.status(200).json({
            message: "User registration successful",
            activeToken: activeToken,
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
});

// Login 
router.post('/user/login', async (req, res) => {
    try {
        const { email, password,activeToken } = req.body;
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(400).json({
                message: "Invalid credentials",
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch || activeToken !== user.activeToken) {
            return res.status(400).json({
                message: "Invalid credentials",
            });
        }

        return res.status(200).json({
            message: `Welcome ${user.name}`,
            user: user.name,
            email: user.email,
            role: user.role,
            activeToken: user.activeToken,
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
});

module.exports = router;
