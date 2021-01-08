import React, { useState } from 'react'
import { loginUser } from '../../../Redux/Actions/Auth'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router'

const Login = () => {

    const dispatch = useDispatch()

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

    const [login, setLogin] = useState({
        email: '',
        password: ''
    })

    const { email, password } = login

    const onChange = e =>
        setLogin({ ...login, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault()
        dispatch(loginUser(email, password))
    }

    if (isAuthenticated) return <Redirect to='/blog' />

    return (
        <div className='login'>
            <form method='POST' className='loginForm' onSubmit={e => onSubmit(e)}>

                <div className='loginForm_container'>
                    <p className='loginForm_label font-4 nomargin'>Login</p>

                    <div className='loginForm_container-inputs'>
                        <div className='loginForm_container-input-div'>
                            <input type='email' name='email' placeholder='Email' value={login.email} onChange={e => onChange(e)} required />
                        </div>

                        <div className='loginForm_container-input-div'>
                            <input type='password' name='password' placeholder='Password' value={login.password} onChange={e => onChange(e)} required />
                        </div>
                    </div>
                </div>

                <button className='loginForm_container-btn' type='submit'>Login</button>

            </form>
        </div>
    );
}

export default Login;