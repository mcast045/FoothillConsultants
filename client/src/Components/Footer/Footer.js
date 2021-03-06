import React from 'react'
import './Footer.css'
import './MobileFooter.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>Copyright &copy; 2020. All Rights Reserved</p>
                <div className="social">
                    <a href='https://www.linkedin.com/company/foothill-consultants/?viewAsMember=true' className="link"><i
                        className="fab fa-linkedin"></i></a>
                    <a href='https://www.facebook.com/Foothill-Consultants-LLC-101865758136141/?modal=admin_todo_tour'
                        className="link"><i className="fab fa-facebook"></i></a>
                    <a href='https://www.instagram.com/foothillconsultants/' className="link"><i
                        className="fab fa-instagram"></i></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;