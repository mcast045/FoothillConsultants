const JWT = require('jsonwebtoken')
require('dotenv').config();

const isUserVerified = (req, res, next) => {
    //Get token from header
    const token = req.header('x-auth-token');

    //Return if no token
    if (!token) return res.status(401).json({ msg: 'No token, authorization denied' })

    //Verify token
    try {
        const decoded = JWT.verify(token, process.env.jwtSecret);
        req.user = decoded.user
        next()
    }
    catch (err) {
        console.error(err.message)
        res.status(401).json({ msg: 'Token is not valid' });
    }
}

module.exports = { isUserVerified }