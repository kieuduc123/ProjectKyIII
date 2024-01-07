import React from 'react';
import { NavLink } from 'react-router-dom';

const Contact = () => {
    return (
    <>
 
 <header class="site-header">
        <img className="header-img" src="images/contact-bg.png" alt=""/>
		  </header>
    {/* <!-- .site-header --> */}

    <div className="contact-page-short-boxes">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-4">
                    <div className="contact-info h-100">
                        <h2 className="d-flex align-items-center">Contact Info</h2>

                        <ul className="p-0 m-0">
                            <li><span>Addtress:</span>Mitlton Str. 26-27 London UK</li>
                            <li><span>Phone:</span>+53 345 7953 32453</li>
                            <li><span>Email:</span>yourmail@gmail.com</li>
                        </ul>
                    </div>
                </div>

                <div className="col-12 col-md-4 mt-5 mt-lg-0">
                    <div className="opening-hours h-100">
                        <h2 className="d-flex align-items-center">Opening Hours</h2>

                        <ul className="p-0 m-0">
                            <li>Monday - Thursday <span>8.00 - 19.00</span></li>
                            <li>Friday <span>8.00 - 18.30</span></li>
                            <li>Saturday <span>9.30 - 17.00</span></li>
                            <li>Sunday <span>9.30 - 15.00</span></li>
                        </ul>
                    </div>
                </div>

                <div className="col-12 col-md-4 mt-5 mt-lg-0">
                    <div className="emergency-box h-100">
                        <h2 className="d-flex align-items-center">Emergency</h2>

                        <div className="call-btn text-center">
                            <a className="d-flex justify-content-center align-items-center button gradient-bg" href="#"><img src="images/emergency-call.png"/> +34 586 778 8892</a>
                        </div>

                        <p>Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Donec males uada lorem maximus mauris sceler isque, at rutrum nulla.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="contact-form">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2>Get in Touch</h2>
                </div>

                <div className="col-12  col-md-4">
                    <input type="text" placeholder="Name"/>
                </div>
                {/* <!-- col-4 --> */}

                <div className="col-12 col-md-4">
                    <input type="email" placeholder="E-mail"/>
                </div>
                {/* <!-- col-6 --> */}

                <div className="col-12 col-md-4">
                    <input type="text" placeholder="Subject"/>
                </div>

                <div className="col-12">
                    <textarea name="name" rows="12" cols="80" placeholder="Message"></textarea>
                </div>

                <div className="col-12">
                    <input type="submit" name="" value="Send Message" className="button gradient-bg"/>
                </div>
            </div>
            {/* <!-- row --> */}
        </div>
    </div>
    {/* <!-- contact-form --> */}

    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="contact-page-map">
                    <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=university of san francisco&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div>
                {/* <!-- map --> */}
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
        
        </>
    );
};

export default Contact;