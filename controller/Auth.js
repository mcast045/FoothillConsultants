const User = require('../models/User')
const Post = require('../models/Post')
const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
require('dotenv').config();
const JWT = require('jsonwebtoken')

const authUser = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password')
        res.json(user)
    } catch (err) {
        console.error(err.message)
        return res.status(500).send('Server Error')
    }
}

const loginUser = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })

    const { email, password } = req.body

    try {
        let user = await User.findOne({ email })
        if (!user) return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] })

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] })

        const payload = {
            user: {
                id: user.id
            }
        }
        JWT.sign(
            payload,
            process.env.jwtSecret,
            { expiresIn: 36000000 },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            });
    } catch (err) {
        console.error(err.message)
        return res.status(500).send('Server Error')
    }
}

const deleteUser = async (req, res) => {
    try {
        await User.findOneAndRemove({ _id: req.user.id })
        await Post.deleteMany({ user: req.user.id })
        res.json({ msg: 'User deleted' })
    } catch (err) {
        console.error(err.message);
        if (err.kind == 'ObjectId') return res.status(400).json({ msg: 'Profile not found' })
        res.status(500).send('Server Error');
    }
}

module.exports = { authUser, loginUser, deleteUser }