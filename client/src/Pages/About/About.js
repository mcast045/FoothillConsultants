import React, { useEffect } from 'react';
import './About.css'
import './MobileAbout.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Woman from '../../img/Woman.png'
import Man from '../../img/Man.png'
import Zoom from 'react-reveal/Zoom';

const About = () => {

    useEffect(() => {
        document.title = 'Foothill Consultants | About'
    }, [])

    return (
        <div className='page'>
            <Header type='About' />
            <div className='about-us'>
                <h2 className='about-us-header section-header'>
                    About <span>us</span>
                </h2>

                <div className='about-us-mission'>
                    <div className='mission-overlay'></div>
                    <div className='about-us-mission-header'>Our Mission</div>
                    <p className='about-us-mission-text'>
                        We are not just another advertising agency! We are in the digital
                        marketing industry to help small businesses in the Quad Cities expand
                        their brand’s presence. We’re not trying to take in as many clients as
                        possible to make a quick buck, we only take on the clients that we
                        think we can serve best and give personalized attention. We started
                        out as in-house marketers and know the importance of believing in
                        the brands we work with. We are here to help your business succeed
                        as if it were our own!
                    </p>
                </div>

                <div className='our-team'>
                    Our Team
                </div>

                <div className='underline'></div>

                <Zoom>
                    <div className='card-employees'>
                        <div className='card-employees-wrapper'>
                            <img src={Woman} alt='CEO' />
                            <div className='card-employees-content'>
                                <div className='card-name'>Danielle Hollembaek</div>
                                <div className='card-position'>Chief Marketing Consultant and Owner</div>
                                <a href="mailto:d.hollembaek@foothillconsultants.com" className='card-email'>Email Me</a>
                            </div>
                        </div>
                        <div className='card-employees-wrapper'>
                            <img src={Man} alt='CEO' />
                            <div className='card-employees-content'>
                                <div className='card-name'>Eryk Hollembaek</div>
                                <div className='card-position'>Marketing and Sales President and Owner</div>
                                <a href="mailto:e.hollembaek@foothillconsultants.com" className='card-email'>Email Me</a>
                            </div>
                        </div>
                    </div>
                </Zoom>
            </div>
            <Footer />
        </div>
    );
}

export default About;