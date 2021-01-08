// import React, { Fragment } from 'react'
// import Moment from 'react-moment'
// import Modal from '../../Components/Modal/Modal'
// import Likes from './Likes'
// import { useSelector, useDispatch } from 'react-redux'
// import { showBlogModal } from '../../Redux/Actions/Post'
// import Parse from 'html-react-parser'

// const ReadOnlyBlog = ({ setIsEditingPost, isEditingPost }) => {

//     const dispatch = useDispatch()
//     const blog = useSelector(state => state.post.post)
//     const blogs = useSelector(state => state.post.posts)
//     const user = useSelector(state => state.auth.user)
//     const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
//     const isShowingModalBlog = useSelector(state => state.post.blogModal)

//     const deleteBlogClick = () => {
//         dispatch(showBlogModal())
//     }

//     const editBlogClick = () => {
//         setIsEditingPost(!isEditingPost)
//     }

//     const isUserVerified = () => {
//         return blog && user && blog.user === user._id
//     }

//     return (
//         <Fragment>

//             {isShowingModalBlog && <Modal toRemove={'blog'} />}
//             <div className='blog-body_container'>
//                 {blog &&
//                     <div className='blog-body-content'>
//                         <div className='blog-body_header'>
//                             <h2 className='blog-body_title'>{blog.title}</h2>
//                             <div className='blog-body_data'>
//                                 <p>by: {blog.name}</p>
//                                 <p>{<Moment format='MM-DD-YY'>{blog.date}</Moment>}</p>
//                                 <div className='blog-body_btn'>
//                                     <div>
//                                         {isUserVerified() && <button className='blog-body_remove-blog' onClick={() => editBlogClick()}><i className="fas fa-wrench"></i></button>}
//                                         {isUserVerified() && <button className='blog-body_remove-blog' onClick={() => deleteBlogClick()}><i className="fas fa-trash"></i></button>}
//                                     </div>
//                                     {isAuthenticated && <Likes />}
//                                 </div>
//                             </div>
//                         </div>
//                         <div className='underline'></div>
//                         <div className='blog-body_text'>{Parse(blog.text)}</div>
//                     </div>
//                 }
//             </div>
//         </Fragment >
//     );
// }

// export default ReadOnlyBlog;