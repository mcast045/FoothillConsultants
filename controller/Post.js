const User = require('../models/User')
const Post = require('../models/Post')
const { validationResult } = require('express-validator')

const getAllBlogs = async (req, res) => {
    try {
        //Get all blogs and sort by date
        const blogs = await Post.find().sort({ date: -1 })
        res.json(blogs)
    } catch (err) {
        console.error(err.message)
        return res.status(500).send('Server Error')
    }
}

const getBlogById = async (req, res) => {
    try {
        const blog = await Post.findById(req.params.blogId)
        if (!blog) return res.status(400).json({ msg: 'Blog not found' })
        res.json(blog)
    } catch (err) {
        console.error(err.message)
        return res.status(500).send('Server Error')
    }
}

const createBlog = async (req, res) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })

    try {

        const { text, title } = req.body
        const user = await User.findById(req.user.id).select('-password')

        const newPost = new Post({
            title: title,
            text: text,
            user: req.user.id,
            name: user.name
        })

        const post = await newPost.save()
        res.json(post)

    } catch (err) {
        console.error(err.message)
        return res.status(500).send('Server Error')
    }
}

const updateBlog = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })

    try {
        const { text, title } = req.body
        const post = await Post.findById(req.params.blogId)

        post.text = text
        post.title = title

        const updatedPost = await post.save()
        res.json(updatedPost)
    }
    catch (err) {
        console.error(err.message)
        return res.status(500).send('Server Error')
    }
}

const deleteBlog = async (req, res) => {
    try {
        const blog = await Post.findById(req.params.blogId)

        if (!blog) return res.status(400).json({ msg: 'Blog not found' })

        //Check if user matches the blog author
        if (blog.user.toString() !== req.user.id)
            return res.status(401).json({ msg: 'Use not authorized' })

        await blog.remove()
        res.json({ msg: 'Post removed' })
    } catch (err) {
        console.error(err.message)

        if (err.kind == 'ObjectId')
            return res.status(404).json({ msg: 'Post not found' })

        return res.status(500).send('Server Error')
    }
}

module.exports = { getAllBlogs, getBlogById, createBlog, updateBlog, deleteBlog }