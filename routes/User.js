const express = require('express')
const { check } = require('express-validator')
const { getAllUsers, getUserById, createUser } = require('../controller/User')
const { isUserVerified } = require('../middleware/auth')

const router = express.Router()

router.get('/:userId', isUserVerified, getUserById)
router.get('/', getAllUsers)

router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Include valid email').isEmail(),
    check('password', 'Please enter a password with 5 or more characters').isLength({ min: 5 })
], createUser)

module.exports = router