// import React, { Fragment } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'
// import DropDown from './DropDown'
// import { showAccountModal } from '../../Redux/Actions/Post'
// import { logoutUser } from '../../Redux/Actions/Auth'

// const Options = ({ setIsAddingPost, isAddingPost }) => {

//     const dispatch = useDispatch()
//     const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

//     const deleteAccount = () => {
//         dispatch(showAccountModal())
//     }

    // const logout = e => {
    //     e.preventDefault()
    //     dispatch(logoutUser())
    // }

//     return (
//         <div className='settings-menu'>
//             <DropDown />

//             {isAuthenticated &&
//                 <Fragment>
//                     <button className='blog-addbtn' onClick={() => setIsAddingPost(!isAddingPost)} title='Add Blog'><i className="fas fa-plus"></i></button>
//                     <button className='blog-addbtn' onClick={() => deleteAccount()} title='Delete Account'><i className="fas fa-user-alt-slash"></i></button>
//                 </Fragment>
//             }
//             {isAuthenticated ? <button className='blog-addbtn' onClick={e => logout(e)} title='Logout'><i className="fas fa-sign-out-alt"></i></button> : <Link to='/auth' className='blog-addbtn' title='Login/Register'>Sign In</Link>}
//         </div>
//     );
// }

// export default Options;