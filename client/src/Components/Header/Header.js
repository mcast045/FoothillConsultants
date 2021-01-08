import React, { useState, useEffect } from 'react'
import FullLogo from '../../img/logo.png'
import './Header.css'
import './MobileHeader.css'
import { Link, withRouter } from "react-router-dom"

const Header = ({ type }) => {

    const [homeActive, setHomeActive] = useState()
    const [blogActive, setBlogActive] = useState()
    const [aboutActive, setAboutActive] = useState()
    const [servicesActive, setServicesActive] = useState()
    const [contactActive, setContactActive] = useState()

    useEffect(() => {
        if (type === 'Home')
            setHomeActive('active')
        else if (type === 'Blog')
            setBlogActive('active')
        else if (type === 'About')
            setAboutActive('active')
        else if (type === 'Services')
            setServicesActive('active')
        else if (type === 'Contact')
            setContactActive('active')
    }, [type])

    return (
        <header className='header'>
            <div className="header-wrapper">
                <a className="navbar-brand" href="/">
                    <img src={FullLogo} width="250" height="100" alt="Logo" />
                </a>
                <ul className="header-wrapper_list">
                    <li className="header-wrapper_list-item list-item">
                        <Link to='/' className={`link ${homeActive}`}>Home</Link>
                    </li>
                    <li className="header-wrapper_list-item list-item">
                        <Link to='/about' className={`link ${aboutActive}`}>About Us</Link>
                    </li>
                    <li className="header-wrapper_list-item list-item">
                        <Link to='/services' className={`link ${servicesActive}`}>Services</Link>
                    </li>
                    <li className="header-wrapper_list-item list-item">
                        <Link to='/blog' className={`link ${blogActive}`}>Blog</Link>
                    </li>
                    <li className="header-wrapper_list-item list-item">
                        <Link to='/contact' className={`link ${contactActive}`}>Contact Us</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default withRouter(Header);