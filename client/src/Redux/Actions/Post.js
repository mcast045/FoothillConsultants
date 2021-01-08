import axios from 'axios'
import { setAlert } from './Alert'
import {
    GET_BLOGS,
    GET_BLOG,
    GET_BLOG_ERROR,
    GET_EMAIL_ERROR,
    UPDATE_BLOG,
    UPDATE_LIKES,
    DELETE_BLOG,
    ADD_BLOG,
    SHOW_BLOG_MODAL,
    SHOW_ACCOUNT_MODAL,
    REMOVE_BLOG_MODAL,
    REMOVE_ACCOUNT_MODAL,
    IS_EDIT_BLOG
} from '../Constants'

export const getBlogs = () => async dispatch => {
    try {
        const res = await axios.get('/post')
        dispatch({ type: GET_BLOGS, payload: res.data })
    } catch (err) {
        dispatch({ type: GET_BLOG_ERROR, payload: { msg: err.response.statusText, status: err.response.status } })
    }
}

export const getBlog = blogId => async dispatch => {
    try {
        const res = await axios.get(`/post/blog/${blogId}`)
        dispatch({ type: GET_BLOG, payload: res.data })
    } catch (err) {
        dispatch({ type: GET_BLOG_ERROR, payload: { msg: err.response.statusText, status: err.response.status } })
    }
}

export const addBlog = blogData => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const res = await axios.post('/post', blogData, config)

        dispatch({ type: ADD_BLOG, payload: res.data })
        dispatch(setAlert('Post Created', 'success'))
    } catch (err) {
        dispatch({ type: GET_BLOG_ERROR, payload: { msg: err.response.statusText, status: err.response.status } });
        dispatch(setAlert(err.response.data.msg, 'danger'))
    }
}

export const deleteBlog = blogId => async dispatch => {
    try {
        await axios.delete(`/post/${blogId}`)

        dispatch({ type: DELETE_BLOG, payload: blogId })
        dispatch(setAlert('Blog Removed', 'success'))
    } catch (err) {
        dispatch({ type: GET_BLOG_ERROR, payload: { msg: err.response.statusText, status: err.response.status } });
    }
}

export const updateLike = blogId => async dispatch => {
    try {
        const res = await axios.put(`/post/like/${blogId}`)
        dispatch({ type: UPDATE_LIKES, payload: { blogId, likes: res.data } })
    } catch (err) {
        dispatch({ type: GET_BLOG_ERROR, payload: { msg: err.response.statusText, status: err.response.status } })
    }
}

export const updateBlog = (blogData, blogId) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const res = await axios.put(`/post/blog/${blogId}`, blogData, config)
        dispatch({ type: UPDATE_BLOG, payload: res.data })
        dispatch(setAlert('Updated Blog', 'success'))
    } catch (err) {
        dispatch({ type: GET_BLOG_ERROR, payload: { msg: err.response.statusText, status: err.response.status } })
    }
}

export const sendEmail = emailData => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        await axios.post('/post/email', emailData, config)
        dispatch(setAlert('Email Sent', 'success'))
    } catch (err) {
        dispatch({ type: GET_EMAIL_ERROR, payload: { msg: err.response.data.error, status: err.response.status } })
        dispatch(setAlert(err.response.data.error, 'danger'))
    }
}

export const showBlogModal = () => ({ type: SHOW_BLOG_MODAL })
export const removeBlogModal = () => ({ type: REMOVE_BLOG_MODAL })
export const showAccountModal = () => ({ type: SHOW_ACCOUNT_MODAL })
export const removeAccountModal = () => ({ type: REMOVE_ACCOUNT_MODAL })
export const editingBlog = () => ({ type: IS_EDIT_BLOG })