import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const About = () => {
    const [show,setShow] = useState(false)
    return (
        <>
		 <header class="site-header">
		  <img class="header-img" src="images/about-bg.png" alt=""></img>
		  </header>
	    <div class="med-history">
        <div class="container">
            <div class="row align-items-end">
                <div class="col-12 col-lg-6">
                    <h2>MedArt History</h2>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Curabitur ut augue finibus, luctus tortor at, ornare erat. Nulla facilisi. Sed est risus, laoreet et quam non, viverra accumsan leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Curabitur ut augue finibus, luctus tortor at, ornare erat. </p>

                    <NavLink class="d-inline-block bg-primary text-white rounded" to="/aboutshistory">Read More</NavLink>
                </div>

                <div class="col-12 col-lg-6 mt-5 mt-lg-0">
                    <img class="responsive" src="images/about.jpg" alt=""/>
                </div>
            </div>
        </div>
    </div>
      
              <div class="faq-stuff">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2>Faq & Stuff</h2>
                </div>

                <div class="col-12 col-lg-6 mb-5 mb-lg-0">
                    <div class="accordion-wrap type-accordion">
                        <h3 class="entry-title d-flex justify-content-between align-items-center active" onClick={ () => setShow(!show)}>Elit mir congue ligula et efficitur pellentesqu<span class="arrow-r"></span></h3>

                        <div className={`entry-content ${show ? 'block' : 'hidden'}`}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris.</p>
                        </div>

                        <h3 onClick={ () => setShow(!show)} class="entry-title d-flex justify-content-between align-items-center">Pulvinar elit mi. Integer congue ligula et efficitur <span class="arrow-r"></span></h3>

                        <div class="entry-content" className={`entry-content ${show ? 'block' : 'hidden'}`}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris.</p>
                        </div>

                        <h3 onClick={ () => setShow(!show)} class="entry-title d-flex justify-content-between align-items-center">Pellentesque pulvinar elit mi. Integer congue<span class="arrow-r"></span></h3>

                        <div class="entry-content" className={`entry-content ${show ? 'block' : 'hidden'}`}>
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
   
        </>
    );
};

export default About;
