import React, { Fragment, useEffect } from 'react'
import './Blog.css'
import './MobileBlog.css'
import { Link } from 'react-router-dom'
import Alert from './Alert/Alert'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { getBlogs } from '../../Redux/Actions/Post'
import Moment from 'react-moment'
import { logoutUser } from '../../Redux/Actions/Auth'

const Blog = () => {

    const dispatch = useDispatch()
    const blogs = useSelector(state => state.post.posts)
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

    useEffect(() => {
        document.title = 'Foothill Consultants | Blog'
        dispatch(getBlogs())
    }, [dispatch])

    const logout = e => {
        e.preventDefault()
        dispatch(logoutUser())
        dispatch(getBlogs())
    }

    return (
        <Fragment>
            <Header type='Blog' />
            <Alert />

            <div className='blog-page'>

                <h2 className='blog-header section-header'>Blog</h2>

                <div className='blog-authBtns'>
                    {isAuthenticated &&
                        <Fragment>
                            <Link to='/edit' title='Add Blog' className='blog-addbtn'><i className="fas fa-plus"></i></Link>
                            <Link to='/auth' title='Logout' className='blog-addbtn' onClick={e => logout(e)}><i className="fas fa-sign-out-alt"></i></Link>
                        </Fragment>}
                </div>

                <div>
                    {blogs && blogs.map(blog => (
                        <Fragment key={blog._id}>
                            <div className='blog-intro_container'>
                                <div className='blog-intro_info'>
                                    <span className='blog-intro_title'>{blog.title}</span>
                                    <span className='blog-intro_name'>by: {blog.name}</span>
                                    <span className='blog-intro_date'>Published: {<Moment format='MM-DD-YY'>{blog.date}</Moment>}</span>
                                </div>
                                <Link to={`/blog/${blog._id}`} className='blog-intro_btn'>Read</Link>
                            </div>
                        </Fragment>
                    ))}
                </div>
                <Footer />
            </div>
        </Fragment >
    );
}

export default Blog