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
            <div className="col-12 col-lg-12">
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
                                    <NavLink className="button gradient-bg" to="/profileCv">Recruitment</NavLink>
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
                                <NavLink className="button gradient-bg" to="/profileCv">Recruitment</NavLink>

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
                                <NavLink className="button gradient-bg" to="/profileCv">Recruitment</NavLink>

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
                                    <p> Are you a creative and innovative thinker with a passion for [specific skills/qualifications]? We are seeking talented individuals to join our team as [Job Title 3]. In this role, you will be responsible for [job responsibilities]. If you excel in [specific skills/qualifications] and thrive in a collaborative and fast-paced environment, we would love to hear from you.. </p>
                                </div>

                                <footer className="entry-footer mt-5">
                                <NavLink className="button gradient-bg" to="/profileCv">Recruitment</NavLink>

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
                                    <p>We are looking for detail-oriented individuals with expertise in [specific skills/qualifications]. In this role, you will be responsible for [job responsibilities]. If you are highly organized, possess strong analytical skills, and have a customer-centric mindset, we invite you to apply for this position. </p>
                                </div>

                                <footer className="entry-footer mt-5">
                                <NavLink className="button gradient-bg" to="/profileCv">Recruitment</NavLink>

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
                                    <p> We are seeking experienced professionals with a proven track record in [specific skills/qualifications]. As a member of our team, you will be responsible for [job responsibilities]. If you are a strategic thinker with excellent problem-solving abilities and a drive for achieving outstanding results, this position offers an exciting opportunity for professional growth and advancement. </p>
                                </div>

                                <footer className="entry-footer mt-5">
                                <NavLink className="button gradient-bg" to="/profileCv">Recruitment</NavLink>
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