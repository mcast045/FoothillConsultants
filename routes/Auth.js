const express = require('express')
const { authUser, loginUser, deleteUser } = require('../controller/Auth')
const { check } = require('express-validator')
const { isUserVerified } = require('../middleware/auth')

const router = express.Router()

router.get('/', isUserVerified, authUser)

router.post('/', [
    check('email', 'Include valid email').isEmail(),
    check('password', 'Password is required').exists()
], loginUser)

router.delete('/', isUserVerified, deleteUser)

module.exports = router