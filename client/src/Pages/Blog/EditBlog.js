import React, { useState, useEffect, Fragment } from 'react'
import Header from '../../Components/Header/Header'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import { addBlog, updateBlog } from '../../Redux/Actions/Post'
import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

const MakePost = ({ history }) => {

    const dispatch = useDispatch()
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const user = useSelector(state => state.auth.user)
    const blog = useSelector(state => state.post.post)
    const isEditingPost = useSelector(state => state.post.isEditingBlog)

    const [blogData, setBlogData] = useState({ title: '', text: '' })

    useEffect(() => {
        if (isEditingPost) setBlogData({ title: blog.title, text: blog.text })
    }, [isEditingPost, blog])

    const redirectClick = () => { history.push('/blog') }

    const createPost = e => {
        e.preventDefault()

        if (isAuthenticated && !isEditingPost)
            dispatch(addBlog(blogData, user._id))
        else if (isAuthenticated && isEditingPost)
            dispatch(updateBlog(blogData, blog._id))

        redirectClick()
    }

    const CKEditorOnChange = editor => {
        const data = editor.getData()
        //Fill title input if title editing
        if (blogData.title) setBlogData({ ...blogData, text: data })
    }

    //Remove Insert Image button from Classic Editor
    ClassicEditor.defaultConfig = {
        toolbar: {
            items: [
                'heading',
                '|',
                'bold',
                'italic',
                'link',
                'bulletedList',
                'numberedList',
                '|',
                'indent',
                'outdent',
                '|',
                'blockquote',
                'insertTable',
                'mediaEmbed',
                '|',
                'undo',
                'redo'
            ]
        },
        table: {
            contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells']
        },
        language: 'en'
    };

    if (!isAuthenticated) return <Redirect to='/blog' />

    return (
        <Fragment>
            <Header type='Blog' />
            <form method='POST' onSubmit={e => createPost(e)} className='form'>
                <div className='form-inputs'>
                    <label className='form-inputs_label' htmlFor='title'>Title</label>
                    <input className='form-inputs_title' name='title' type='text' placeholder='Blog Title' value={blogData.title} onChange={e => setBlogData({ ...blogData, 'title': e.target.value })} required />

                    <label className='form-inputs_label' htmlFor='text'>Text</label>
                    <div className='editor' name='text'>
                        <CKEditor
                            editor={ClassicEditor}
                            data={blogData.text}
                            onChange={(e, editor) => { CKEditorOnChange(editor) }} />
                    </div>
                </div>

                <div className='form-btns'>
                    <button className='form-btn' type='submit'>Submit</button>
                    <button className='form-btn' onClick={() => redirectClick()}>Back</button>
                </div>

            </form>
        </Fragment>
    );
}

export default MakePost;