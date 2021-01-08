import React, { Fragment, useEffect } from 'react'
import Header from '../../Components/Header/Header'
import './Services.css'
import './MobileServices.css'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Meeting from '../../img/SVG/Meeting.svg'
import SocialMedia from '../../img/SVG/SocialMedia.svg'
import DigitalMarketing from '../../img/SVG/DigitalMarketing.svg'
import Zoom from 'react-reveal/Zoom'
import Search from '../../img/SVG/Search.svg'
import Creation from '../../img/SVG/Creation.svg'
import Video from '../../img/SVG/Video.svg'
import SEO from '../../img/SVG/SEO.svg'
import Tweet from '../../img/SVG/Tweet.svg'
import Branding from '../../img/SVG/Branding.svg'

const Services = () => {

    useEffect(() => {
        document.title = 'Foothill Consulting | Services'
    }, [])

    return (
        <Fragment>
            <Header type='Services' />

            <div className='services'>
                <h2 className='services-header section-header'>Services</h2>

                <div className='services-mission'>
                    <Carousel className='carousel' autoPlay showThumbs={false}>
                        <div className='services-mission_content'>
                            <div className="services-mission_image">
                                <object data={Meeting} type="image/svg+xml">Complete Marketing Redirect or Revamp</object>
                            </div>
                            <div className='services-mission_content-text'>
                                <label className='services-mission_label'>Complete Marketing Redirect or Revamp</label>
                                <p className='services-mission-text'>
                                    Includes a SWOT analysis, deep dive into current marketing
                                    structure, and preliminary meetings to discuss your needs as a
                                    company. We are open to hearing your ideas and to help you
                                    execute them in the best way possible to market your business.
                                </p>
                            </div>
                        </div>
                        <div className='services-mission_content'>
                            <div className='services-mission_content-text'>
                                <label className='services-mission_label'>Social Media Strategy</label>
                                <p className='services-mission-text'>
                                    We have provided clients with social media posting
                                    schedules, themes, content ideas, and best practices
                                    for their industry. When it comes to developing your
                                    social media pages, we will help you decide what type
                                    of content will attract your target audience organically
                                    and through paid ads.
                                </p>
                            </div>
                            <div className="services-mission_image">
                                <object data={Search} type="image/svg+xml">Social Media Strategy</object>
                            </div>
                        </div>
                        <div className='services-mission_content'>
                            <div className="services-mission_image">
                                <object data={DigitalMarketing} type="image/svg+xml">Digital Advertising Planning</object>
                            </div>
                            <div className='services-mission_content-text'>
                                <label className='services-mission_label'>Digital Advertising Planning</label>
                                <p className='services-mission-text'>
                                    We can help you formulate keywords, target demographics,
                                    and decipher which digital platforms to spend money on
                                    for your audience. From PPC, reach, CPM, or location
                                    targeted marketing, we can make an ad plan that works for you.
                                </p>
                            </div>
                        </div>
                        <div className='services-mission_content'>
                            <div className='services-mission_content-text'>
                                <label className='services-mission_label'>Website Recommendations</label>
                                <p className='services-mission-text'>
                                    We offer you the option for us to evaluate your website
                                    and give you feedback on how to best optimize your content
                                    for SEO and for your customers. We also provide you with a
                                    technical audit to make your website run well which in turn
                                    will help your page rankings.
                                </p>
                            </div>
                            <div className="services-mission_image">
                                <object data={SocialMedia} type="image/svg+xml">Website Recommendations</object>
                            </div>
                        </div>
                    </Carousel>
                </div>

                <Zoom>
                    <div className='services-mission-addition'>
                        <div>
                            <div className='services-mission-header'>Branding Direction</div>
                            <div className='services-mission-text'>
                                If you are starting a new business, we understand how tough it can
                                be to do everything! Branding is one of the most important parts
                                of setting your business apart from competition and we want to help.
                                We offer a branding package that includes meetings to discuss what
                                direction you want your marketing to take, content suggestions and
                                mock-ups, creation of marketing tactics for your niche, and any other
                                branding elements you need to get your business off the ground
                                successfully.
                            </div>
                        </div>
                        <div className="services-mission_image-addition">
                            <object data={Branding} type="image/svg+xml">Complete Marketing Redirect or
                            Revamp
                            </object>
                        </div>
                    </div>

                    <div className='services-mission-addition'>
                        <div className="services-mission_image-addition">
                            <object data={Tweet} type="image/svg+xml">Complete Marketing Redirect or
                            Revamp
                            </object>
                        </div>
                        <div>
                            <div className='services-mission-header'>Social Media Management</div>
                            <div className='services-mission-text'>
                                Beyond offering you a plan to run your social media accounts in
                                house, we also offer social media management through us. We have
                                run a few different local Quad Cities businesses social channels,
                                all seeing growth in the first few months we took over. We can
                                discuss a posting schedule and fit your business' need for online
                                content. This includes both organic and paid advertising.
                            </div>
                        </div>
                    </div>

                    <div className='services-mission-addition'>
                        <div>
                            <div className='services-mission-header'>Search Engine Optimization</div>
                            <div className='services-mission-text'>
                                Search engine optimization is one of the most important parts of
                                building a discoverable website. From the technical end to the
                                content within the website, we can complete redesign your website
                                to make it more search friendly. From keyword research to blog
                                creation, we have the skills and expertise to get your business
                                first page results.
                            </div>
                        </div>
                        <div className="services-mission_image-addition">
                            <object data={SEO} type="image/svg+xml">Complete Marketing Redirect or
                            Revamp
                            </object>
                        </div>
                    </div>

                    <div className='services-mission-addition'>
                        <div className="services-mission_image-addition">
                            <object data={Video} type="image/svg+xml">Complete Marketing Redirect or
                            Revamp
                            </object>
                        </div>
                        <div>
                            <div className='services-mission-header'>Video Production</div>
                            <div className='services-mission-text'>
                                Video is king when it comes to social media visibility. The algorithms
                                of social sites ranks video as a higher quality content so your
                                business is more likely to be seen organically with videos. We
                                have proven results that both organically and with paid ads, our
                                video content has performed better than regular posts. Let us show
                                you what a high quality video can do for your company.
                            </div>
                        </div>
                    </div>

                    <div className='services-mission-addition'>
                        <div>
                            <div className='services-mission-header'>General Content Creation</div>
                            <div className='services-mission-text'>
                                We offer many different forms of content creation from graphics,
                                email marketing, and blogs. If you are looking for a project to
                                project assistance, we are here to help.
                            </div>
                        </div>
                        <div className="services-mission_image-addition">
                            <object data={Creation} type="image/svg+xml">Complete Marketing Redirect or
                            Revamp
                            </object>
                        </div>
                    </div>

                </Zoom>
            </div>
        </Fragment>
    );
}

export default Services;