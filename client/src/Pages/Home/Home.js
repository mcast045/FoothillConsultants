import React, { Fragment, useEffect } from 'react';
import "./Home.css"
import './MobileHome.css'
import Header from '../../Components/Header/Header'
import VideoMP4 from '../../img/video/Foothills.mp4'
import VideoOGG from '../../img/video/Foothills.ogg'
import Strategy from '../../img/strategy.jpg'
import Product from '../../img/product.jpg'
import Creative from '../../img/creative.jpg'
import ShortLogo from '../../img/shortLogo.png'
import Zoom from 'react-reveal/Zoom';

const Home = () => {

    useEffect(() => {
        document.title = 'Foothill Consultants'
    }, [])

    return (
        <Fragment>
            <Header type='Home' />
            <section className="landing">
                <div className="landing-video">
                    <div className="landing-video_overlay"></div>
                    <video className="landing-video__content" autoPlay muted loop>
                        <source src={VideoMP4} type="video/mp4" />
                        <source src={VideoOGG} type="video/ogg" />
                        Your browser is not supported!
                    </video>
                </div>
                <Zoom>
                    <div className="landing-description">
                        <h1 className="landing-header">Foothill Consultants</h1>
                        <p className="landing-paragraph">Taking You To The Top</p>
                    </div>
                </Zoom>
                <div className="landing_down-arrow">
                    <a href='#homepage-about' className="link">&#8595;</a>
                </div>
            </section>

            {/* What We Do */}
            <section id="homepage-about">
                <div className="homepage-about_wrapper">
                    <h2 className="homepage-about_header">What we do</h2>
                    <div className="underline"></div>
                </div>

                <Zoom right cascade>
                    <div className='card-what-we-do'>
                        <div className="card-what-we-do-wrapper">
                            <div className="card-what-we-do-content">
                                <img src={Strategy} alt='strategy' className='card-what-we-do-image' />
                                <div className="card-what-we-do-content_text">
                                    <h3 className='card-what-we-do-title'>Digital Marketing Consulting</h3>
                                    <p className="card-what-we-do-descrption">
                                        Create digital ads, videos, social media schedules,
                                        SEO best practices, and full marketing strategies for
                                        companies in the Quad Cities needing marketing guidance
                                        and assistance.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="card-what-we-do-wrapper">
                            <div className="card-what-we-do-content reverse">
                                <img src={Product} alt='strategy' className='card-what-we-do-image' />
                                <div className="card-what-we-do-content_text">
                                    <h3 className='card-what-we-do-title'>Social Media Planning/Management</h3>
                                    <p className="card-what-we-do-descrption">
                                        Social media is the cheapest and quickest way to grow your brand.
                                        Whether you need someone to manage your social media pages on a
                                        daily basis or you are simply looking for a redesign of your
                                        posting schedule and types, we can do either.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="card-what-we-do-wrapper">
                            <div className="card-what-we-do-content">
                                <img src={Creative} alt='strategy' className='card-what-we-do-image' />
                                <div className="card-what-we-do-content_text">
                                    <h3 className='card-what-we-do-title'>Search Engine Optimization</h3>
                                    <p className="card-what-we-do-descrption">
                                        From technical recommendations to keywords for first
                                        page results, we know SEO. We have the expertise and
                                        tools to do the proper research to get your website
                                        ranking with Google search.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Zoom>
            </section>

            <div className="parallax">
                <div className="orverlay"></div>
            </div>


            {/* Who We Are */}
            <section id='hompage_about-us' className="us">
                <div className="us-wrapper">
                    <h2 className="us_header">Who we are</h2>
                    <div className="underline"></div>
                    <Zoom>
                        <div className='us_content'>
                            <div className="us_text">
                                Foothill Consultants, LLC was founded in 2020 by
                                owners Danielle and Eryk Hollembaek. Danielle is a
                                Quad Cities native and has a deep love for the area.
                                She holds a master's degree from one of the leading
                                communication schools in the country, Syracuse University.
                                Eryk has a Master's in Business Administration with
                                an emphasis in Leadership from St. Ambrose University.
                                We strive to grow your company's social media following,
                                website visits, and sales through engaging content,
                                SEO best practices, and strategic planning.
                                We’re not another big box agency trying to take on as
                                many clients as possible and offering a generic plan to all.
                                We want to create a marketing strategy that aligns with
                                your company’s mission, goals, and specific customer base.
                                We are here to take your business to the top.
                            </div>
                            <img src={ShortLogo} alt='logo' />
                        </div>
                    </Zoom>
                </div>
            </section>
        </Fragment>
    );
}

export default Home;