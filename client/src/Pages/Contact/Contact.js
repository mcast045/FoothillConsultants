import React, { useEffect, useState, useRef } from 'react'
import './Contact.css'
import './MobileContact.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Alert from '../Blog/Alert/Alert'
import { useDispatch } from 'react-redux'
import { sendEmail } from '../../Redux/Actions/Post'
import { setAlert } from '../../Redux/Actions/Alert'
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {

    const dispatch = useDispatch()
    const reRef = useRef()

    useEffect(() => {
        document.title = 'Foothill Consultants | Contact'
    }, [])

    const initialContactForm = {
        contact: '',
        name: '',
        email: '',
        subject: '',
        message: '',
        token: ''
    }

    const [information, setInformation] = useState(initialContactForm)

    const onChange = e =>
        setInformation({ ...information, [e.target.name]: e.target.value });

    const validateRequireForm = async e => {
        e.preventDefault()
        const token = await reRef.current.executeAsync()
        const updatedInfo = { ...information, token: token }
        reRef.current.reset()

        if (information.contact.length > 0) {
            dispatch(setAlert('Email Error', 'danger'))
            return
        }

        dispatch(sendEmail(updatedInfo))
        setInformation(initialContactForm)
    }

    return (
        <div className='page'>
            <Header type='Contact' />
            <Alert />
            <div className='contact'>
                <h2 className='contact-header section-header'>
                    Contact <span>us</span>
                </h2>

                <div className='contact-wrapper'>
                    <div className='contact-message'>
                        <h3 className='contact-contact-intro'>Questions?</h3>
                        <p className='contact-text'>Do you have a digital marketing need? Contact us today and set up an appointment to see how we can help you and your business get to the next peak!</p>
                    </div>

                    <form className='contact-form' name="contact" method="POST" onSubmit={e => validateRequireForm(e)}>
                        <input type='text' name='contact' placeholder='Contact' id="contact-subject" value={information.contact} onChange={e => onChange(e)} />
                        <input type='text' id='name' name='name' placeholder='Name' value={information.name} onChange={e => onChange(e)} />
                        <input type='email' id='email' name='email' placeholder='Email' value={information.email} onChange={e => onChange(e)} />
                        <input type='text' id='subject' name='subject' placeholder='Subject' value={information.subject} onChange={e => onChange(e)} />
                        <textarea id='message' name='message' placeholder='Message...' value={information.message} onChange={e => onChange(e)} />
                        <input className='submit' type='submit' value="Submit" />
                    </form>
                </div>
            </div>

            <ReCAPTCHA
                sitekey='6LeGyiQaAAAAAJfnXe_ZmuYjXluoFlYmJlxLxbAW'
                size="invisible"
                ref={reRef} />

            <Footer />
        </div>
    );
}

export default Contact;