import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
    return (
        <>
		 <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>About us</h1>

                    <div class="breadcrumbs">
                        <ul class="d-flex flex-wrap align-items-center p-0 m-0">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li>About Us</li>
                        </ul>
                    </div>
						{/* !-- .breadcrumbs --> */}

                </div>
            </div>
        </div>

        <img class="header-img" src="images/about-bg.png" alt=""></img>
              <div class="faq-stuff">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2>Faq & Stuff</h2>
                </div>

                <div class="col-12 col-lg-6 mb-5 mb-lg-0">
                    <div class="accordion-wrap type-accordion">
                        <h3 class="entry-title d-flex justify-content-between align-items-center active">Elit mir congue ligula et efficitur pellentesqu<span class="arrow-r"></span></h3>

                        <div class="entry-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris.</p>
                        </div>

                        <h3 class="entry-title d-flex justify-content-between align-items-center">Pulvinar elit mi. Integer congue ligula et efficitur <span class="arrow-r"></span></h3>

                        <div class="entry-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris.</p>
                        </div>

                        <h3 class="entry-title d-flex justify-content-between align-items-center">Pellentesque pulvinar elit mi. Integer congue<span class="arrow-r"></span></h3>

                        <div class="entry-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris.</p>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-lg-6 mt-5 mt-lg-0">
                    <div class="row">
                        <div class="col-12 col-md-6">
                            <div class="professional-box">
                                <h2 class="d-flex align-items-center">Professional</h2>

                                <img src="images/cardiogram-2.png" alt=""/>

                                <p>Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Donec males uada lorem.</p>
                            </div>
                        </div>

                        <div class="col-12 col-md-6">
                            <div class="quality-box">
                                <h2 class="d-flex align-items-center">Quality</h2>

                                <img src="images/hospital.png" alt=""/>

                                <p>Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Donec males uada lorem.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="medical-team">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2>The Medical Team</h2>
                </div>

                <div class="col-12 col-md-6 col-lg-3">
                    <div class="medical-team-wrap">
                        <img src="images/team-1.jpg" alt=""/>

                        <h4>Christinne Smith</h4>
                        <h5>PHD Surgeon</h5>
                    </div>
                </div>

                <div class="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">
                    <div class="medical-team-wrap">
                        <img src="images/team-2.jpg" alt=""/>

                        <h4>Anna Gustav</h4>
                        <h5>PHD Surgeon</h5>
                    </div>
                </div>

                <div class="col-12 col-md-6 col-lg-3 mt-5 mt-lg-0">
                    <div class="medical-team-wrap">
                        <img src="images/team-3.jpg" alt=""/>

                        <h4>Phillip Williams</h4>
                        <h5>PHD Surgeon</h5>
                    </div>
                </div>

                <div class="col-12 col-md-6 col-lg-3 mt-5 mt-lg-0">
                    <div class="medical-team-wrap">
                        <img src="images/team-4.jpg" alt=""/>

                        <h4>Gina James</h4>
                        <h5>PHD Surgeon</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="subscribe-banner">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-8 offset-lg-2">
                    <h2>Subscribe to our newsletter</h2>

                    <form>
                        <input type="email" placeholder="E-mail address"/>
                        <input class="button gradient-bg" type="submit" value="Subscribe"/>
                    </form>
                </div>
            </div>
        </div>
    </div>
            {/* <!-- End Aim --> */}
        </>
    );
};

export default About;
