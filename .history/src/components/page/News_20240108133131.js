import React from 'react';
import { NavLink } from 'react-router-dom';

const News = () => {
    return (

        <div>
            <header className="site-header">
            <img className="header-img" src="images/news-bg.png" alt=""/>
            </header>
              <div className="container">
        <div className="row">
            <div className="col-12 col-lg-8">
                <div className="the-news">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="the-news-wrap">
                                <figure className="post-thumbnail">
                                    <NavLink to="#"><img src="images/news-1.png" alt=""/></NavLink>
                                </figure>

                                <header className="entry-header">
                                    <h3>The latest in Medicine</h3>

                                    <div className="post-metas d-flex flex-wrap align-items-center">
                                        <div className="posted-date"><label>Date: </label><NavLink to="#">April 12, 2018</NavLink></div>

                                        <div className="posted-by"><label>By: </label><NavLink to="#">Dr. Jake Williams</NavLink></div>

                                        <div className="post-comments"><NavLink to="/">2 Comments</NavLink></div>
                                    </div>
                                </header>

                                <div className="entry-content">
                                    <p> We are looking for a skilled professional with experience in [specific skills/qualifications]. In this role, you will be responsible for [job responsibilities]. If you are a proactive problem solver and thrive in a fast-paced environment, this position is for you. </p>
                                </div>

                                <footer className="entry-footer mt-5">
                                    <NavLink className="button gradient-bg" to="/profileCv">Read More</NavLink>
                                </footer>
                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            <div className="the-news-wrap">
                                <figure className="post-thumbnail">
                                    <NavLink toto="#"><img src="images/news-2.png" alt=""/></NavLink>
                                </figure>

                                <header className="entry-header">
                                    <h3>All you need to know about pills</h3>

                                    <div className="post-metas d-flex flex-wrap align-items-center">
                                        <div className="posted-date"><label>Date: </label><NavLink toto="#">April 12, 2018</NavLink></div>

                                        <div className="posted-by"><label>By: </label><NavLink toto="#">Dr. Jake Williams</NavLink></div>

                                        <div className="post-comments"><NavLink toto="#">2 Comments</NavLink></div>
                                    </div>
                                </header>

                                <div className="entry-content">
                                    <p>We are seeking a dedicated individual with expertise in [specific skills/qualifications]. As a member of our team, you will be responsible for [job responsibilities]. If you are detail-oriented, organized, and have excellent communication skills, we encourage you to apply. </p>
                                </div>

                                <footer className="entry-footer mt-5">
                                    <NavLink className="button gradient-bg" toto="#">Read More</NavLink>
                                </footer>
                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            <div className="the-news-wrap">
                                <figure className="post-thumbnail">
                                    <NavLink toto="#"><img src="images/news-6.png" alt=""/></NavLink>
                                </figure>

                                <header className="entry-header">
                                    <h3>Marketing and Medicine</h3>

                                    <div className="post-metas d-flex flex-wrap align-items-center">
                                        <div className="posted-date"><label>Date: </label><NavLink toto="#">April 12, 2018</NavLink></div>

                                        <div className="posted-by"><label>By: </label><NavLink toto="#">Dr. Jake Williams</NavLink></div>

                                        <div className="post-comments"><NavLink toto="#">2 Comments</NavLink></div>
                                    </div>
                                </header>

                                <div className="entry-content">
                                    <p>Are you a creative and innovative thinker with a passion for [specific skills/qualifications]? We are seeking a talented individual to join our team as a [Job Title 3]. In this role, you will be responsible for [job responsibilities]. If you are adept at [specific skills/qualifications] and thrive in a collaborative and fast-paced environment, we would love to hear from you.. </p>
                                </div>

                                <footer className="entry-footer mt-5">
                                    <NavLink className="button gradient-bg" toto="#">Read More</NavLink>
                                </footer>
                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            <div className="the-news-wrap">
                                <figure className="post-thumbnail">
                                    <NavLink toto="#"><img src="images/news-4.png" alt=""/></NavLink>
                                </figure>

                                <header className="entry-header">
                                    <h3>Marketing and Medicine</h3>

                                    <div className="post-metas d-flex flex-wrap align-items-center">
                                        <div className="posted-date"><label>Date: </label><NavLink  toto="#">April 12, 2018</NavLink></div>

                                        <div className="posted-by"><label>By: </label><NavLink toto="#">Dr. Jake Williams</NavLink></div>

                                        <div className="post-comments"><NavLink toto="#">2 Comments</NavLink></div>
                                    </div>
                                </header>

                                <div className="entry-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuadNavLinklorem maximus mauris scelerisque, at rutrum nullNavLinkdictum. Ut ac ligulNavLinksapien. Suspendisse cursus faucibus finibus. </p>
                                </div>

                                <footer className="entry-footer mt-5">
                                    <NavLink className="button gradient-bg" toto="#">Read More</NavLink>
                                </footer>
                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            <div className="the-news-wrap">
                                <figure className="post-thumbnail">
                                    <NavLink to="#"><img src="images/news-5.png" alt=""/></NavLink>
                                </figure>

                                <header className="entry-header">
                                    <h3>Marketing and Medicine</h3>

                                    <div className="post-metas d-flex flex-wrap align-items-center">
                                        <div className="posted-date"><label>Date: </label><NavLink toto="#">April 12, 2018</NavLink></div>

                                        <div className="posted-by"><label>By: </label><NavLink toto="#">Dr. Jake Williams</NavLink></div>

                                        <div className="post-comments"><NavLink to="#">2 Comments</NavLink ></div>
                                    </div>
                                </header>

                                <div className="entry-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuadNavLinklorem maximus mauris scelerisque, at rutrum nullNavLinkdictum. Ut ac ligulNavLinksapien. Suspendisse cursus faucibus finibus. </p>
                                </div>

                                <footer className="entry-footer mt-5">
                                    <NavLink className="button gradient-bg" to="#">Read More</NavLink>
                                </footer>
                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            <div className="the-news-wrap">
                                <figure className="post-thumbnail">
                                    <NavLink to="#"><img src="images/news-3.png" alt=""/></NavLink>
                                </figure>

                                <header className="entry-header">
                                    <h3>Marketing and Medicine</h3>

                                    <div className="post-metas d-flex flex-wrap align-items-center">
                                        <div className="posted-date"><label>Date: </label><NavLink toto="#">April 12, 2018</NavLink ></div>

                                        <div className="posted-by"><label>By: </label><NavLink to="#">Dr. Jake Williams</NavLink></div>

                                        <div className="post-comments"><NavLink to="#">2 Comments</NavLink></div>
                                    </div>
                                </header>

                                <div className="entry-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuadNavLinklorem maximus mauris scelerisque, at rutrum nullNavLinkdictum. Ut ac ligulNavLinksapien. Suspendisse cursus faucibus finibus. </p>
                                </div>

                                <footer className="entry-footer mt-5">
                                    <NavLink className="button gradient-bg" to="#">Read More</NavLink>
                                </footer>
                            </div>
                        </div>

                        <div className="col-12">
                            <ul className="pagination d-flex flex-wrap align-items-center p-0">
                                <li className="active"><NavLink to="#">01</NavLink></li>
                                <li><NavLink to="#">02</NavLink></li>
                                <li><NavLink to="#">03</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-12 col-lg-4">
                <div className="sidebar">
                    <div className="search-widget">
                        <form className="flex flex-wrap align-items-center">
                            <input type="search" placeholder="Search..."/>
                            <button type="submit" className="flex justify-content-center align-items-center">Search</button>
                        </form>
                    </div>

                    <div className="sidebar-cats">
                        <h2 className="widget-title">Categories</h2>

                        <ul className="p-0 m-0">
                            <li><NavLink to="#">Radiology</NavLink></li>
                            <li><NavLink to="#">Cardiology</NavLink></li>
                            <li><NavLink to="#">Gastroenterology</NavLink></li>
                            <li><NavLink to="#">Neurology</NavLink></li>
                            <li><NavLink to="#">General surgery</NavLink></li>
                        </ul>
                    </div>

                    <div className="popular-posts">
                        <h2 className="widget-title">Latest Posts</h2>

                        <ul className="p-0 m-0">
                            <li className="d-flex flex-wrap justify-content-between">
                                <figure><NavLink to="#"><img src="images/p-1.jpg" alt=""/></NavLink></figure>

                                <div className="entry-content">
                                    <h3 className="entry-title"><NavLink to="#">NavLinkbig discovery for medicine worldwide</NavLink></h3>

                                    <div className="posted-date">Feb 05, 2018</div>
                                </div>
                            </li>

                            <li className="d-flex flex-wrap justify-content-between">
                                <figure><NavLink to="#"><img src="images/p-2.jpg" alt=""/></NavLink></figure>

                                <div className="entry-content">
                                    <h3 className="entry-title"><NavLink to="#">Dentistry for everybody under 18</NavLink></h3>

                                    <div className="posted-date">Feb 05, 2018</div>
                                </div>
                            </li>

                            <li className="d-flex flex-wrap justify-content-between">
                                <figure><NavLink to="#"><img src="images/p-3.jpg" alt=""/></NavLink></figure>

                                <div className="entry-content">
                                    <h3 className="entry-title"><NavLink to="#">When it’s time to take pills</NavLink></h3>

                                    <div className="posted-date">Feb 05, 2018</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/* <!-- .cat-links --> */}

                    <div className="opening-hours">
                        <h2 className="d-flex align-items-center">Opening Hours</h2>

                        <ul className="p-0 m-0">
                            <li>Monday - Thursday <span>8.00 - 19.00</span></li>
                            <li>Friday <span>8.00 - 18.30</span></li>
                            <li>Saturday <span>9.30 - 17.00</span></li>
                            <li>Sunday <span>9.30 - 15.00</span></li>
                        </ul>
                    </div>

                    <div className="emergency-box">
                        <h2 className="d-flex align-items-center">Emergency</h2>

                        <div className="call-btn text-center">
                            <NavLink className="d-flex justify-content-center align-items-center button gradient-bg" to="#">
                                <img src="images/emergency-call.png"/> 
                                +34 586 778 8892
                                </NavLink>
                        </div>

                        <p>Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Donec males uadNavLinklorem maximus mauris sceler isque, at rutrum nulla.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="subscribe-banner">
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-8 offset-lg-2">
                    <h2>Subscribe to our newsletter</h2>

                    <form>
                        <input type="email" placeholder="E-mail address"/>
                        <input className="button gradient-bg" type="submit" value="Subscribe"/>
                    </form>
                </div>
            </div>
        </div>
    </div>

        </div>
    );
};

export default News;