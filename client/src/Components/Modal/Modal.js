import React from 'react'
import './Modal.css'
import './MobileModal.css'
import { useSelector, useDispatch } from 'react-redux'
import { removeBlogModal, deleteBlog, removeAccountModal } from '../../Redux/Actions/Post'
import { deleteUser } from '../../Redux/Actions/Auth'

const Modal = ({ toRemove, history }) => {

    const dispatch = useDispatch()
    const blog = useSelector(state => state.post.post)
    const user = useSelector(state => state.auth.user)

    const confirmClick = () => {
        if (toRemove === 'blog') {
            dispatch(deleteBlog(blog._id, user._id))
            dispatch(removeBlogModal())
            history.push('/blog')
        }

        else if (toRemove === 'account') {
            dispatch(deleteUser())
            dispatch(removeAccountModal())
            history.push('/')
        }
    }

    const cancelClick = () => {
        dispatch(removeBlogModal())
        dispatch(removeAccountModal())
    }

    return (
        <div className='modal' >
            <div className='modal-container'>
                <div className='modal-content-container'>

                    <h3 className='modal-header'>{`Are you sure you want to delete ${toRemove === 'blog' ? 'this blog' : 'your account'}?`}</h3>
                    <div className='modal-underline'></div>

                    <div className='modal-btns'>
                        <button className='modal-btn' onClick={() => confirmClick()}>OK</button>
                        <button className='modal-btn' onClick={() => cancelClick()}>Cancel</button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Modal;