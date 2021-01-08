// import React, { useEffect, useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { updateLike } from '../../Redux/Actions/Post'

// const Likes = () => {

//     const dispatch = useDispatch()
//     const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
//     const blog = useSelector(state => state.post.post)
//     const user = useSelector(state => state.auth.user)

//     const [like, setLike] = useState(false)

//     useEffect(() => {
//         //If user liked blog, color 'star' button onLoad
//         if (blog && user && blog.likes.findIndex(like => like.user === user._id) === -1)
//             setLike(false)
//         else
//             setLike(true)
//     }, [user, blog])

//     const likeBlogClick = () => {
//         if (isAuthenticated) {
//             dispatch(updateLike(blog._id))
//             setLike(!like)
//         }
//     }

//     return (
//         <button className='blog-body_like' onClick={() => likeBlogClick()} title={like ? 'Unlike' : 'Like'}>
//             <div className={like ? 'star-liked' : 'star-unliked'}></div>
//         </button>
//     );
// }

// export default Likes;