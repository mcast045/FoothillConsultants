const express = require('express')
const { getAllBlogs, getBlogById, createBlog, updateBlog, deleteBlog } = require('../controller/Post')
const { sendEmail } = require('../controller/Mail')
const { check } = require('express-validator')
const { isUserVerified } = require('../middleware/auth')

const router = express.Router()

router.get('/blog/:blogId', getBlogById)
router.get('/', getAllBlogs)

router.post('/email', sendEmail)

router.post('/', isUserVerified, [
    check('text', 'Text is required').not().isEmpty(),
    check('title', 'Title is required').not().isEmpty()
], createBlog)

router.put('/blog/:blogId', isUserVerified, [
    check('text', 'Text is required').not().isEmpty(),
    check('title', 'Title is required').not().isEmpty()
], updateBlog)

router.delete('/:blogId', isUserVerified, deleteBlog)

module.exports = router