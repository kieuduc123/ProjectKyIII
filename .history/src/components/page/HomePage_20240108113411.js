import Product from 'components/\bproduct/Product';
import React from 'react';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
    return (
        <>
 


 {/* <!-- Slider Start --> */}
 <div class="swiper-container hero-slider">
                <div class="swiper-wrapper">
                    <div
                        class="swiper-slide hero-content-wrap"
                        style={{backgroundImage: "url('/images/hero.jpg')"}}
                    >
                        <div class="hero-content-overlay position-absolute w-100 h-100">
                            <div class="container h-100">
                                <div class="row h-100">
                                    <div class="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-start">
                                        <header class="entry-header">
                                            <h1>The Best Medical Services</h1>
                                        </header>
                                        {/* <!-- .entry-header --> */}

                                        <div class="entry-content mt-4">
                                            <p>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit.
                                                Donec malesuada lorem maximus
                                                mauris scelerisque, at rutrum
                                                nulla dictum. Ut ac ligula
                                                sapien. Suspendisse cursus
                                                faucibus finibus.
                                            </p>
                                        </div>
                                        {/* <!-- .entry-content --> */}

                                        <footer class="entry-footer d-flex flex-wrap align-items-center mt-4">
                                            <NavLink
                                                to="/new"
                                                class="button gradient-bg"
                                            >
                                                Read More
                                            </NavLink>
                                        </footer>
                                        {/* <!-- .entry-footer --> */}
                                    </div>
                                    {/* <!-- .col --> */}
                                </div>
                                {/* <!-- .row --> */}
                            </div>
                            {/* <!-- .container --> */}
                        </div>
                        {/* <!-- .hero-content-overlay --> */}
                    </div>
                    {/* <!-- .hero-content-wrap --> */}

                    <div
                        class="swiper-slide hero-content-wrap"
                        style={{ backgroundImage: "url('images/hero.jpg')" }}
                    >
                        <div class="hero-content-overlay position-absolute w-100 h-100">
                            <div class="container h-100">
                                <div class="row h-100">
                                    <div class="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-start">
                                        <header class="entry-header">
                                            <h1>
                                                The Best <br />
                                                Medical Services
                                            </h1>
                                        </header>
                                        {/* <!-- .entry-header --> */}

                                        <div class="entry-content mt-4">
                                            <p>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit.
                                                Donec malesuada lorem maximus
                                                mauris scelerisque, at rutrum
                                                nulla dictum. Ut ac ligula
                                                sapien. Suspendisse cursus
                                                faucibus finibus.
                                            </p>
                                        </div>
                                        {/* <!-- .entry-content --> */}

                                        <footer class="entry-footer d-flex flex-wrap align-items-center mt-4">
                                            <NavLink
                                                to="/new"
                                                class="button gradient-bg"
                                            >
                                                Read More
                                            </NavLink>
                                        </footer>
                                        {/* <!-- .entry-footer --> */}
                                    </div>
                                    {/* <!-- .col --> */}
                                </div>
                                {/* <!-- .row --> */}
                            </div>
                            {/* <!-- .container --> */}
                        </div>
                        {/* <!-- .hero-content-overlay --> */}
                    </div>
                    {/* <!-- .hero-content-wrap --> */}

                    <div class="swiper-slide hero-content-wrap">
                        <div class="hero-content-overlay position-absolute w-100 h-100">
                            <div class="container h-100">
                                <div class="row h-100">
                                    <div class="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-start">
                                        <header class="entry-header">
                                            <h1>
                                                The Best <br />
                                                Medical Services
                                            </h1>
                                        </header>
                                        {/* <!-- .entry-header --> */}

                                        <div class="entry-content mt-4">
                                            <p>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit.
                                                Donec malesuada lorem maximus
                                                mauris scelerisque, at rutrum
                                                nulla dictum. Ut ac ligula
                                                sapien. Suspendisse cursus
                                                faucibus finibus.
                                            </p>
                                        </div>
                                        {/* <!-- .entry-content --> */}

                                        <footer class="entry-footer d-flex flex-wrap align-items-center mt-4">
                                            <NavLink
                                                to="/"
                                                class="button gradient-bg"
                                            >
                                                Read More
                                            </NavLink>
                                        </footer>
                                        {/* <!-- .entry-footer --> */}
                                    </div>
                                    {/* <!-- .col --> */}
                                </div>
                                {/* <!-- .row --> */}
                            </div>
                            {/* <!-- .container --> */}
                        </div>
                        {/* <!-- .hero-content-overlay --> */}
                    </div>
                    {/* <!-- .hero-content-wrap --> */}
                </div>
                {/* <!-- .swiper-wrapper --> */}

                <div class="pagination-wrap position-absolute w-100">
                    <div class="swiper-pagination d-flex flex-row flex-md-column"></div>
                </div>
                {/* <!-- .pagination-wrap --> */}
            </div>
{/* <section class="features">
	<div class="container">
		<div class="row">
			<div class="col-lg-12">
				<div class="feature-block d-lg-flex">
					<div class="feature-item mb-5 mb-lg-0">
						<div class="feature-icon mb-4">
							<i class="icofont-surgeon-alt"></i>
						</div>
						<span>24 Hours Service</span>
						<h4 class="mb-3">Online Appoinment</h4>
						<p class="mb-4">Get ALl time support for emergency.We have introduced the principle of family medicine.</p>
						<a href="appoinment.html" class="btn btn-main btn-round-full">Make a appoinment</a>
					</div>
				
					<div class="feature-item mb-5 mb-lg-0">
						<div class="feature-icon mb-4">
							<i class="icofont-ui-clock"></i>
						</div>
						<span>Timing schedule</span>
						<h4 class="mb-3">Working Hours</h4>
						<ul class="w-hours list-unstyled">
							<li class="d-flex justify-content-between">Sun - Wed : <span>8:00 - 17:00</span></li>
							<li class="d-flex justify-content-between">Thu - Fri : <span>9:00 - 17:00</span></li>
							<li class="d-flex justify-content-between">Sat - sun : <span>10:00 - 17:00</span></li>
						</ul>
					</div>
				
					<div class="feature-item mb-5 mb-lg-0">
						<div class="feature-icon mb-4">
							<i class="icofont-support"></i>
						</div>
						<span>Emegency Cases</span>
						<h4 class="mb-3">1-800-700-6200</h4>
						<p>Get ALl time support for emergency.We have introduced the principle of family medicine.Get Conneted with us for any urgency .</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section> */}


<div class="homepage-boxes">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6 col-lg-8">
                    <div class="opening-hours">
                        <h2 class="d-flex align-items-center">Opening Hours</h2>

                        <ul class="p-0 m-0">
                            <li>Monday - Thursday <span>8.00 - 19.00</span></li>
                            <li>Friday <span>8.00 - 18.30</span></li>
                            <li>Saturday <span>9.30 - 17.00</span></li>
                            <li>Sunday <span>9.30 - 15.00</span></li>
                        </ul>
                    </div>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mt-5 mt-md-0">
                    <div class="emergency-box">
                        <h2 class="d-flex align-items-center">Contact Him</h2>

                        <div class="call-btn button gradient-bg">
                            <a class="d-flex justify-content-center align-items-center" href="#"><img src="images/emergency-call.png"/> +34 586 778 8892</a>
                        </div>

                        <p>If you have any questions, please contact us via our hotline. Our specialists will respond to all your questions as quickly as possible.</p>
                    </div>
                </div>

                {/* <div class="col-12 col-md-6 col-lg-5 mt-5 mt-lg-0">
                    <div class="appointment-box">
                        <h2 class="d-flex align-items-center">Make an Appointment</h2>

                        <form class="d-flex flex-wrap justify-content-between">
                            <select class="select-department">
                                <option value="value1">Select Department</option>
                                <option value="value2">Select Department 1</option>
                                <option value="value3">Select Department 2</option>
                            </select>

                            <select class="select-doctor">
                                <option>Select Doctor</option>
                                <option>Select Doctor 1</option>
                                <option>Select Doctor 2</option>
                            </select>

                            <input type="text" placeholder="Name"/>

                            <input type="number" placeholder="Phone No"/>

                            <input class="button gradient-bg" type="submit" value="Boom Appoitnment"/>
                        </form>
                    </div>

                </div> */}
            </div>
        </div>
    </div>

    <div class="our-departments">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="our-departments-wrap">
                        <h2>Virtue</h2>

                        <div class="row">
                            <div class="col-12 col-md-6 col-lg-4">
                                <div class="our-departments-cont">
                                    <header class="entry-header d-flex flex-wrap align-items-center">
                                        <img src="images/cardiogram.png" alt=""/>

                                        <h3>Cardioology</h3>
                                    </header>

                                    <div class="entry-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris.</p>
                                    </div>

                                    <footer class="entry-footer">
                                       
                                    </footer>
                                </div>
                            </div>

                            <div class="col-12 col-md-6 col-lg-4">
                                <div class="our-departments-cont">
                                    <header class="entry-header d-flex flex-wrap align-items-center">
                                        <img src="images/stomach-2.png" alt=""/>

                                        <h3>Gastroenterology</h3>
                                    </header>

                                    <div class="entry-content">
                                        <p>Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien.</p>
                                    </div>

                                    <footer class="entry-footer">
                                       
                                    </footer>
                                </div>
                            </div>

                            <div class="col-12 col-md-6 col-lg-4">
                                <div class="our-departments-cont">
                                    <header class="entry-header d-flex flex-wrap align-items-center">
                                        <img src="images/blood-sample-2.png" alt=""/>

                                        <h3>Medical Lab</h3>
                                    </header>

                                    <div class="entry-content">
                                        <p>Lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus.</p>
                                    </div>

                                    <footer class="entry-footer">
                                       
                                    </footer>
                                </div>
                            </div>

                            <div class="col-12 col-md-6 col-lg-4">
                                <div class="our-departments-cont">
                                    <header class="entry-header d-flex flex-wrap align-items-center">
                                        <img src="images/teeth.png" alt=""/>

                                        <h3>Dental Care</h3>
                                    </header>

                                    <div class="entry-content">
                                        <p>Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien.</p>
                                    </div>

                                    <footer class="entry-footer">
                                       
                                    </footer>
                                </div>
                            </div>

                            <div class="col-12 col-md-6 col-lg-4">
                                <div class="our-departments-cont">
                                    <header class="entry-header d-flex flex-wrap align-items-center">
                                        <img src="images/stretcher.png" alt=""/>

                                        <h3>Surgery</h3>
                                    </header>

                                    <div class="entry-content">
                                        <p>Lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus.</p>
                                    </div>

                                    <footer class="entry-footer">
                                       
                                    </footer>
                                </div>
                            </div>

                            <div class="col-12 col-md-6 col-lg-4">
                                <div class="our-departments-cont">
                                    <header class="entry-header d-flex flex-wrap align-items-center">
                                        <img src="images/scanner.png" alt=""/>

                                        <h3>Neurology</h3>
                                    </header>

                                    <div class="entry-content">
                                        <p>Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien.</p>
                                    </div>

                                    <footer class="entry-footer">
                                       
                                    </footer>
                                </div>
                            </div>

                            <div class="col-12 col-md-6 col-lg-4 mb-md-0">
                                <div class="our-departments-cont">
                                    <header class="entry-header d-flex flex-wrap align-items-center">
                                        <img src="images/bones.png" alt=""/>

                                        <h3>Orthopaedy</h3>
                                    </header>

                                    <div class="entry-content">
                                        <p>Lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus.</p>
                                    </div>

                                    <footer class="entry-footer">
                                       
                                    </footer>
                                </div>
                            </div>

                            <div class="col-12 col-md-6 col-lg-4 mb-lg-0">
                                <div class="our-departments-cont">
                                    <header class="entry-header d-flex flex-wrap align-items-center">
                                        <img src="images/blood-donation-2.png" alt=""/>

                                        <h3>Pediatry</h3>
                                    </header>

                                    <div class="entry-content">
                                        <p>Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien.</p>
                                    </div>

                                    <footer class="entry-footer">
                                       
                                    </footer>
                                </div>
                            </div>

                            <div class="col-12 col-md-6 col-lg-4 mb-0">
                                <div class="our-departments-cont">
                                    <header class="entry-header d-flex flex-wrap align-items-center">
                                        <img src="images/glasses.png" alt=""/>

                                        <h3>Ophthalmology</h3>
                                    </header>

                                    <div class="entry-content">
                                        <p>Lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus.</p>
                                    </div>

                                    <footer class="entry-footer">
                                       
                                    </footer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  
	{/* <!-- .testimonial-section --> */}

    <div class="the-news">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2>The News</h2>

                    <div class="row">
                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="the-news-wrap">
                                <figure class="post-thumbnail">
                                    <a href="#"><img src="images/news-1.png" alt=""/></a>
                                </figure>

                                <header class="entry-header">
                                    <h3>The latest in Medicine</h3>

                                    <div class="post-metas d-flex flex-wrap align-items-center">
                                        <div class="posted-date"><label>Date: </label><a href="#">April 12, 2018</a></div>

                                        <div class="posted-by"><label>By: </label><a href="#">Dr. Jake Williams</a></div>

                                        <div class="post-comments"><a href="#">2 Comments</a></div>
                                    </div>
                                </header>

                                <div class="entry-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus. </p>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="the-news-wrap">
                                <figure class="post-thumbnail">
                                    <a href="#"><img src="images/news-2.png" alt=""/></a>
                                </figure>

                                <header class="entry-header">
                                    <h3>All you need to know about pills</h3>

                                    <div class="post-metas d-flex flex-wrap align-items-center">
                                        <div class="posted-date"><label>Date: </label><a href="#">April 12, 2018</a></div>

                                        <div class="posted-by"><label>By: </label><a href="#">Dr. Jake Williams</a></div>

                                        <div class="post-comments"><a href="#">2 Comments</a></div>
                                    </div>
                                </header>

                                <div class="entry-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus. </p>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="the-news-wrap">
                                <figure class="post-thumbnail">
                                    <a href="#"><img src="images/news-3.png" alt=""/></a>
                                </figure>

                                <header class="entry-header">
                                    <h3>Marketing and Medicine</h3>

                                    <div class="post-metas d-flex flex-wrap align-items-center">
                                        <div class="posted-date"><label>Date: </label><a href="#">April 12, 2018</a></div>

                                        <div class="posted-by"><label>By: </label><a href="#">Dr. Jake Williams</a></div>

                                        <div class="post-comments"><a href="#">2 Comments</a></div>
                                    </div>
                                </header>

                                <div class="entry-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

{/* <section id="portfolio" class="portfolio">

   <Product></Product>
</section> */}


{/* <!-- ======= Breadcrumbs ======= --> */}


{/* <!-- ======= Portfolio Section ======= --> */}



{/* <!-- End #main --> */}



        </>
    );
};

export default HomePage;