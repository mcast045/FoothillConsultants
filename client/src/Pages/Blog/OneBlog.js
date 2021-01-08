import React, { useEffect, Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getBlog } from '../../Redux/Actions/Post'
import Parse from 'html-react-parser'
import Moment from 'react-moment'
import Header from '../../Components/Header/Header'
import Modal from '../../Components/Modal/Modal'
import { showBlogModal, editingBlog } from '../../Redux/Actions/Post'
import { Link } from 'react-router-dom'

const OneBlog = ({ match, history }) => {

    const dispatch = useDispatch()
    const blog = useSelector(state => state.post.post)
    const user = useSelector(state => state.auth.user)
    const isShowingModalBlog = useSelector(state => state.post.blogModal)

    useEffect(() => {
        dispatch(getBlog(match.params.id))
    }, [dispatch, match.params.id])

    const isUserVerified = () => {
        return blog && user && blog.user === user._id
    }

    return (
        <Fragment>
            <Header type='Blog' />
            {isShowingModalBlog && <Modal toRemove={'blog'} history={history} />}

            <div className='blog-page'>
                {blog &&
                    <Fragment>
                        <h2 className='blog-header section-header'>Blog</h2>
                        <div className='blog-body-content'>
                            <div className='blog-body_header'>
                                <h2 className='blog-body_title'>{blog.title}</h2>
                                <div className='blog-body_data'>
                                    <p>by: {blog.name}</p>
                                    <p>{<Moment format='MM-DD-YY'>{blog.date}</Moment>}</p>
                                    <div className='blog-body_btn'>
                                        <div>
                                            {isUserVerified() && <Link to='/edit' className='blog-body_remove-blog' onClick={() => dispatch(editingBlog())}><i className="fas fa-wrench"></i></Link>}
                                            {isUserVerified() && <button className='blog-body_remove-blog' onClick={() => dispatch(showBlogModal())}><i className="fas fa-trash"></i></button>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='underline'></div>
                            <div className='blog-body_text'>{Parse(blog.text)}</div>

                            <div className='back-btn_container'>
                                <Link to='/blog' className='blog-addbtn back-btn'>Back</Link>
                            </div>
                        </div>
                    </Fragment>
                }
            </div>
        </Fragment>
    )
}

export default OneBlog;