import axios from 'axios'
import { setAlert } from './Alert'
import setAuthToken from '../../utils/setAuthToken'
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGOUT,
    ACCOUNT_DELETED,
    CLEAR_ALL
} from '../Constants'

//Logout user / Clear profile
export const logoutUser = () => dispatch => {
    dispatch({ type: LOGOUT })
}

export const deleteUser = () => async dispatch => {
    try {
        await axios.delete('/auth')
        dispatch({ type: ACCOUNT_DELETED })
        dispatch(setAlert('Account Deleted', 'success'))

    } catch (err) {
        dispatch({ type: REGISTER_FAIL, payload: { msg: err.response.statusText, status: err.response.status } });
    }

}


//Load user
export const loadUser = () => async dispatch => {

    if (localStorage.token) setAuthToken(localStorage.token)

    try {
        const res = await axios.get('/auth')
        dispatch({ type: USER_LOADED, payload: res.data })
    } catch (err) {
        dispatch({ type: AUTH_ERROR })
    }
}

// Login user
export const loginUser = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ email, password })

    try {
        const res = await axios.post('/auth', body, config)
        dispatch({ type: CLEAR_ALL })
        dispatch({ type: LOGIN_SUCCESS, payload: res.data })
        dispatch(loadUser())
    } catch (err) {
        const errors = err.response.data.errors
        if (errors) errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        dispatch({ type: LOGIN_FAIL })
    }
}

export const registerUser = ({ email, password, confirmPassword, name }) => async dispatch => {
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }

    const body = JSON.stringify({ email, password, confirmPassword, name })

    try {
        const res = await axios.post('/user', body, config)
        dispatch({ type: CLEAR_ALL })
        dispatch({ type: REGISTER_SUCCESS, payload: res.data })
        dispatch(loadUser())
    }
    catch (err) {
        const userLimitErr = err.response.data.error
        const errors = err.response.data.errors
        if (errors) errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        else if (userLimitErr) dispatch(setAlert(userLimitErr, 'danger'))

        dispatch({ type: REGISTER_FAIL })
    }
}