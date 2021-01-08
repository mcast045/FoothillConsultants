import React, { useState } from 'react'
import { registerUser } from '../../../Redux/Actions/Auth'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import { setAlert } from '../../../Redux/Actions/Alert'

const Register = () => {

    const dispatch = useDispatch()
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

    const [register, setRegister] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const onChange = e =>
        setRegister({ ...register, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault()
        if (register.password === register.confirmPassword) dispatch(registerUser(register))
        else dispatch(setAlert('Passwords must match', 'danger'))
    }

    if (isAuthenticated) return <Redirect to='/blog' />

    return (
        <div className='register'>
            <form method='POST' className='registerForm' onSubmit={e => onSubmit(e)}>

                <div className='registerForm_container'>
                    <p className='registerForm_label font-4 nomargin'>Register</p>

                    <div className='registerForm_input'>
                        <input type='text' name='name' placeholder='Name' value={register.name} onChange={e => onChange(e)} required />
                    </div>

                    <div className='registerForm_input'>
                        <input type='email' name='email' placeholder='Email' value={register.email} onChange={e => onChange(e)} required />
                    </div>

                    <div className='registerForm_input'>
                        <input type='password' name='password' placeholder='Password' value={register.password} onChange={e => onChange(e)} required />
                    </div>

                    <div className='registerForm_input'>
                        <input type='password' name='confirmPassword' placeholder='Confirm Password' value={register.confirmPassword} onChange={e => onChange(e)} required />
                    </div>
                </div>

                <button className='registerForm_container-btn' type='submit'>Register</button>
            </form>
        </div>
    );
}

export default Register;