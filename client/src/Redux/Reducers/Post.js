import {
    GET_BLOGS,
    GET_BLOG,
    GET_BLOG_ERROR,
    GET_EMAIL_ERROR,
    UPDATE_LIKES,
    UPDATE_BLOG,
    DELETE_BLOG,
    ADD_BLOG,
    LOGOUT,
    ACCOUNT_DELETED,
    SHOW_BLOG_MODAL,
    SHOW_ACCOUNT_MODAL,
    REMOVE_BLOG_MODAL,
    REMOVE_ACCOUNT_MODAL,
    IS_EDIT_BLOG
} from '../Constants'

const initialState = {
    post: null,
    posts: [],
    blogModal: false,
    accountModal: false,
    isEditingBlog: false,
    loading: true,
    error: {}
}

export default function (state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case GET_BLOGS:
            return {
                ...state,
                loading: false,
                posts: payload,
                post: null,
                isEditingBlog: false,
                error: {}
            }
        case GET_BLOG:
            return {
                ...state,
                loading: false,
                post: payload,
                isEditingBlog: false,
                error: {}
            }
        case ADD_BLOG:
            return {
                ...state,
                loading: false,
                posts: [payload, ...state.posts],
                post: payload,
                error: {}
            }
        case UPDATE_BLOG:
            return {
                ...state,
                loading: false,
                posts: state.posts.map(post => post._id === payload._id ? payload : post),
                post: payload,
                error: {}
            }
        case UPDATE_LIKES:
            return {
                ...state,
                loading: false,
                posts: state.posts.map(post => post._id === payload.blogId ? { ...post, likes: payload.likes } : { ...post, likes: [] }),
                post: { ...state.post, likes: payload.likes },
                error: {}
            }
        case DELETE_BLOG:
            return {
                ...state,
                loading: false,
                posts: state.posts.filter(post => post._id !== payload),
                post: state.posts.filter(post => post._id !== payload)[0],
                error: {}
            }
        case SHOW_BLOG_MODAL:
            return {
                ...state,
                blogModal: true,
                loading: false,
                error: {}
            }
        case REMOVE_BLOG_MODAL:
            return {
                ...state,
                blogModal: false,
                loading: false,
                error: {}
            }
        case SHOW_ACCOUNT_MODAL:
            return {
                ...state,
                loading: false,
                accountModal: true,
                error: {}
            }
        case REMOVE_ACCOUNT_MODAL:
            return {
                ...state,
                loading: false,
                accountModal: false,
                error: {}
            }
        case GET_BLOG_ERROR:
        case GET_EMAIL_ERROR:
            return {
                ...state,
                loading: false,
                error: payload
            }
        case LOGOUT:
        case ACCOUNT_DELETED:
            return {
                ...state,
                posts: [],
                loading: true,
                error: {}
            }
        case IS_EDIT_BLOG:
            return {
                ...state,
                isEditingBlog: true
            }
        default:
            return state
    }
}