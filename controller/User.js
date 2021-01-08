const User = require('../models/User')
const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
// const config = require('config')
require('dotenv').config();
const JWT = require('jsonwebtoken')

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().populate('user', ['name'])
        res.json(users)
    } catch (err) {
        console.error(err.message)
        return res.status(500).send('Server Error')
    }
}

const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId).populate('user', ['name', 'image'])
        if (!user) return res.status(400).json({ msg: 'No person found' })
        res.json(user)
    } catch (err) {
        console.error(err.message)
        if (err.kind == 'ObjectId') return res.status(400).json({ msg: 'Profile not found' })
        return res.status(500).send('Server Error')
    }
}

const createUser = async (req, res) => {

    //Only allow 1 user to blog
    const users = await User.find({})
    if (users.length > 0)
        return res.status(400).json({ error: 'User Limit Reached.' })

    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })

    const { name, email, password } = req.body

    try {
        //Find if email already exists 
        let existingUser = await User.findOne({ email })
        if (existingUser) return res.status(400).json({ errors: [{ msg: 'User already exists' }] })

        //Create User
        let user = new User({ name, email, password })

        // Encrypt password
        user.password = await bcrypt.hash(password, 12)
        await user.save()

        // JWT
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
                if (err) throw err
                res.json({ token })
            });

    } catch (err) {
        console.error(err.message)
        return res.status(500).send('Server Error')
    }
}

module.exports = { getAllUsers, getUserById, createUser }