import { combineReducers } from 'redux'
import alert from './Alert'
import auth from './Auth'
import post from './Post'

export default combineReducers({
    alert,
    auth,
    post
});