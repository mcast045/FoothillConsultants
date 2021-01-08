// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { getBlog } from '../../Redux/Actions/Post'

// const BlogDropdown = () => {

//     const dispatch = useDispatch()
//     const blogs = useSelector(state => state.post.posts)
//     const user = useSelector(state => state.auth.user)
//     const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

//     const [dropDownValue, setDropDownValue] = useState(0)
//     const [userBlogs, setUserBlogs] = useState([])

//     const optionClick = e => {
//         dispatch(getBlog(e.target.value))

//         //Lets the <select> & <option> values match
//         //So the dropdown shows the correct blog title
//         const updateBlog = userBlogs.find(blog => blog._id === e.target.value)
//         setDropDownValue(updateBlog._id)
//     }

//     //Gets all the blogs the user has authored
//     useEffect(() => {
//         if (user)
//             setUserBlogs(blogs.filter(blog => blog.user === user._id))
//     }, [blogs, user])

//     return (
//         <div>
//             {userBlogs.length > 0 && isAuthenticated &&
//                 <select onChange={e => optionClick(e)} value={dropDownValue} className='select-dropdown'>
//                     {userBlogs.map(blog => <option className='option-dropdown' key={blog._id} value={blog._id}>{blog.title}</option>)}
//                 </select>
//             }
//         </div>
//     );
// }

// export default BlogDropdown;