import React, { Fragment } from 'react'
import './Auth.css'
import './MobileAuth.css'
import Header from '../../../Components/Header/Header'
import Login from './Login'
import Register from './Register'
import Alert from '../Alert/Alert'

const Auth = () => {

    return (
        <Fragment>
            <Header />
            <Alert />
            <div className='auth'>
                <div className='auth-block'>
                    <Login />
                    <Register />
                </div>
            </div>
        </Fragment>
    );
}

export default Auth;