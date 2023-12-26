import React from 'react';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
    return (
        <>
 

    {/* <!-- Start Banner Hero --> */}
    <div className="banner-wrapper bg-light">
        <div id="index_banner" className="banner-vertical-center-index container-fluid pt-5">

            {/* <!-- Start slider --> */}
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">

                        <div className="py-5 row d-flex align-items-center">
                            <div className="banner-content col-lg-8 col-8 offset-2 m-lg-auto text-left py-5 pb-5">
                                <h1 className="banner-heading h1 text-secondary display-3 mb-0 pb-5 mx-0 px-0 light-300 typo-space-line">
                                    Develop <strong>Strategies</strong> for 
                                  {/* <br>your business */}
                              </h1>
                                <p className="banner-body text-muted py-3 mx-0 px-0">
                                    Purple Buzz is NavLinkcorporate HTML template with Bootstrap 5 BetNavLink1. This CSS template is 100% free to download provided by
                                     <NavLink rel="nofollow" to="https://templatemo.com/page/1" target="_parent">TemplateMo</NavLink> 6 HTML pages included in this template. Icon fonts by <NavLink rel="nofollow" to="https://boxicons.com/" target="_blank">Boxicons</NavLink> tos are from <NavLink rel="nofollow" to="https://unsplash.com/" target="_blank">Unsplash</NavLink><NavLink rel="nofollow" to="https://icons8.com/" target="_blank">Icons 8</NavLink>       </p>
                                <NavLink className="banner-button btn rounded-pill btn-outline-primary btn-lg px-4" to="#" role="button">Get Started</NavLink>
                            </div>
                        </div>

                    </div>
                    <div className="carousel-item">

                        <div className="py-5 row d-flex align-items-center">
                            <div className="banner-content col-lg-8 col-8 offset-2 m-lg-auto text-left py-5 pb-5">
                                <h1 className="banner-heading h1 text-secondary display-3 mb-0 pb-3 mx-0 px-0 light-300">
                                    HTML CSS Template with Bootstrap 5 BetNavLink1
                                </h1>
                                <p className="banner-body text-muted py-3">
                                    You are not allowed to re-distribute this Purple Buzz HTML template as NavLinkdownloadable ZIP file on any kind of Free CSS collection websites. This is strongly prohibited. Please contact TemplateMo for more information.
                                </p>
                                <NavLink className="banner-button btn rounded-pill btn-outline-primary btn-lg px-4" to="#" role="button">Get Started</NavLink>
                            </div>
                        </div>

                    </div>
                    <div className="carousel-item">

                        <div className="py-5 row d-flex align-items-center">
                            <div className="banner-content col-lg-8 col-8 offset-2 m-lg-auto text-left py-5 pb-5">
                                <h1 className="banner-heading h1 text-secondary display-3 mb-0 pb-3 mx-0 px-0 light-300">
                                    Cupidatat non proident, sunt in culpNavLinkqui officia
                                </h1>
                                <p className="banner-body text-muted py-3">
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex eNavLinkcommodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum
                                    dolore eu fugiat nullNavLinkpariatur. Excepteur sint occaecat.
                                </p>
                                <NavLink className="banner-button btn rounded-pill btn-outline-primary btn-lg px-4" to="#" role="button">Get Started</NavLink>
                            </div>
                        </div>

                    </div>
                </div>
                {/* <NavLink className="carousel-control-prev text-decoration-none" to="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                    <i className='bx bx-chevron-left'></i>
                    <span className="visually-hidden">Previous</span>
                </NavLink>
                <NavLink className="carousel-control-next text-decoration-none" to="#carouselExampleIndicators" role="button" data-bs-slide="next">
                    <i className='bx bx-chevron-right'></i>
                    <span className="visually-hidden">Next</span>
                </NavLink> */}
            </div>
            {/* <!-- End slider --> */}

        </div>
    </div>
    {/* <!-- End Banner Hero --> */}



    {/* <!-- Start Service --> */}
    <section className="service-wrapper py-3">
        <div className="container-fluid pb-3">
            <div className="row">
                <h2 className="h2 text-center col-12 py-5 semi-bold-600">Services</h2>
                <div className="service-header col-2 col-lg-3 text-end light-300">
                    <i className='bx bx-gift h3 mt-1'></i>
                </div>
                <div className="service-heading col-10 col-lg-9 text-start float-end light-300">
                    <h2 className="h3 pb-4 typo-space-line">Make Success for future</h2>
                </div>
            </div>
            <p className="service-footer col-10 offset-2 col-lg-9 offset-lg-3 text-start pb-3 text-muted px-2">
                You are free to use this template for your commercial or business websites. You are not allowed to re-distribute this template ZIP file on any template collection websites. It is too easy to illegally copy and repost this template.
            </p>
        </div>

        <div className="service-tag py-5 bg-secondary">
            <div className="col-md-12">
                <ul className="nav d-flex justify-content-center">
                    <li className="nav-item mx-lg-4">
                        <NavLink className="filter-btn nav-link btn-outline-primary active shadow rounded-pill text-light px-4 light-300" to="#" data-filter=".project">All</NavLink>
                    </li>
                    <li className="nav-item mx-lg-4">
                        <NavLink className="filter-btn nav-link btn-outline-primary rounded-pill text-light px-4 light-300" to="#" data-filter=".graphic">Graphics</NavLink>
                    </li>
                    <li className="filter-btn nav-item mx-lg-4">
                        <NavLink className="filter-btn nav-link btn-outline-primary rounded-pill text-light px-4 light-300" to="#" data-filter=".ui">UI/UX</NavLink>
                    </li>
                    <li className="nav-item mx-lg-4">
                        <NavLink className="filter-btn nav-link btn-outline-primary rounded-pill text-light px-4 light-300" to="#" data-filter=".branding">Branding</NavLink>
                    </li>
                </ul>
            </div>
        </div>

    </section>

    <section className="container overflow-hidden py-5">
        <div className="row gx-5 gx-sm-3 gx-lg-5 gy-lg-5 gy-3 pb-3 projects">

            {/* <!-- Start Recent Work --> */}
            <div className="col-xl-3 col-md-4 col-sm-6 project ui branding">
                <NavLink to="#" className="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0">
                    <img className="service card-img" src="./assets/img/services-01.jpg" alt=""/>
                    <div className="service-work-vertical card-img-overlay d-flex align-items-end">
                        <div className="service-work-content text-left text-light">
                            <span className="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300">UI/UX design</span>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                        </div>
                    </div>
                </NavLink>
                         </div>
                {/* <!-- End Recent Work --> */}

            {/* <!-- Start Recent Work --> */}
            <div className="col-xl-3 col-md-4 col-sm-6 project ui graphic">
                <NavLink to="#" className="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0">
                    <img className="card-img" src="./assets/img/services-02.jpg" alt=""/>
                    <div className="service-work-vertical card-img-overlay d-flex align-items-end">
                        <div className="service-work-content text-left text-light">
                            <span className="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300">Social Media</span>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                        </div>
                    </div>
                </NavLink>  
                       </div>
            {/* <!-- End Recent Work --> */}

            {/* <!-- Start Recent Work --> */}
            <div className="col-xl-3 col-md-4 col-sm-6 project branding">
                <NavLink to="#" className="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0">
                    <img className="card-img" src="./assets/img/services-03.jpg" alt=""/>
                    <div className="service-work-vertical card-img-overlay d-flex align-items-end">
                        <div className="service-work-content text-left text-light">
                            <span className="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300">Marketing</span>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                        </div>
                    </div>
                </NavLink>
                         </div>
            {/* <!-- End Recent Work --> */}

            {/* <!-- Start Recent Work --> */}

            <div className="col-xl-3 col-md-4 col-sm-6 project ui graphic">
                <NavLink to="#" className="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0">
                    <img className="card-img" src="./assets/img/services-04.jpg" alt=""/>
                    <div className="service-work-vertical card-img-overlay d-flex align-items-end">
                        <div className="service-work-content text-left text-light">
                            <span className="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300">Graphic</span>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                        </div>
                    </div>
                </NavLink>
                         </div>
            {/* <!-- End Recent Work --> */}

            {/* <!-- Start Recent Work --> */}
            <div className="col-xl-3 col-md-4 col-sm-6 project ui graphic">
                <NavLink to="#" className="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0">
                    <img className="card-img" src="./assets/img/services-05.jpg" alt=""/>
                    <div className="service-work-vertical card-img-overlay d-flex align-items-end">
                        <div className="service-work-content text-left text-light">
                            <span className="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300">Digtal Marketing</span>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                        </div>
                    </div>
                </NavLink>
                         </div>
            {/* <!-- End Recent Work --> */}

            {/* <!-- Start Recent Work --> */}
            <div className="col-xl-3 col-md-4 col-sm-6 project branding">
                <NavLink to="#" className="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0">
                    <img className="card-img" src="./assets/img/services-06.jpg" alt=""/>
                    <div className="service-work-vertical card-img-overlay d-flex align-items-end">
                        <div className="service-work-content text-left text-light">
                            <span className="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300">Market Research</span>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                        </div>
                    </div>
                </NavLink>
                         </div>
            {/* <!-- End Recent Work --> */}


            {/* <!-- Start Recent Work --> */}
            <div className="col-xl-3 col-md-4 col-sm-6 project branding">
                <NavLink to="#" className="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0">
                    <img className="card-img" src="./assets/img/services-07.jpg" alt=""/>
                    <div className="service-work-vertical card-img-overlay d-flex align-items-end">
                        <div className="service-work-content text-left text-light">
                            <span className="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300">Business</span>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                        </div>
                    </div>
                </NavLink>
                         </div>
            {/* <!-- End Recent Work --> */}

            {/* <!-- Start Recent Work --> */}
            <div className="col-xl-3 col-md-4 col-sm-6 project ui graphic branding">
                <NavLink to="#" className="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0">
                    <img className="card-img" src="./assets/img/services-08.jpg" alt=""/>
                    <div className="service-work-vertical card-img-overlay d-flex align-items-end">
                        <div className="service-work-content text-left text-light">
                            <span className="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300">Branding</span>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                        </div>
                    </div>
                </NavLink>
                         </div>
            {/* <!-- End Recent Work --> */}

        </div>
    </section>
    {/* <!-- End Service --> */}






    {/* <!-- Start View Work --> */}
    <section className="bg-secondary">
        <div className="container py-5">
            <div className="row d-flex justify-content-center text-center">
                <div className="col-lg-2 col-12 text-light align-items-center">
                    <i className='display-1 bx bxs-box bx-lg'></i>
                </div>
                <div className="col-lg-7 col-12 text-light pt-2">
                    <h3 className="h4 light-300">Great transformations successful</h3>
                    <p className="light-300">Quis ipsum suspendisse ultrices gravida.</p>
                </div>
                <div className="col-lg-3 col-12 pt-4">
                    <NavLink to="#" className="btn btn-primary rounded-pill btn-block shadow px-4 py-2">View Our Work</NavLink>
                                 </div>
            </div>
       </div>
    </section>
    {/* <!-- End View Work --> */}

    {/* <!-- Start Recent Work --> */}
    <section className="py-5 mb-5">
        <div className="container">
            <div className="recent-work-header row text-center pb-5">
                <h2 className="col-md-6 m-auto h2 semi-bold-600 py-5">Recent Works</h2>
            </div>
            <div className="row gy-5 g-lg-5 mb-4">

                {/* <!-- Start Recent Work --> */}
                <div className="col-md-4 mb-3">
                    <NavLink to="#" className="recent-work card border-0 shadow-lg overflow-hidden">
                        <img className="recent-work-img card-img" src="./assets/img/recent-work-01.jpg" alt=""/>
                        <div className="recent-work-vertical card-img-overlay d-flex align-items-end">
                            <div className="recent-work-content text-start mb-3 ml-3 text-dark">
                                <h3 className="card-title light-300">Social Media</h3>
                                <p className="card-text">Ullamco laboris nisi ut aliquip ex</p>
                            </div>
                        </div>
                    </NavLink>
                                 </div>
                {/* <!-- End Recent Work --> */}

                {/* <!-- Start Recent Work --> */}
                <div className="col-md-4 mb-3">
                    <NavLink to="#" className="recent-work card border-0 shadow-lg overflow-hidden">
                        <img className="recent-work-img card-img" src="./assets/img/recent-work-02.jpg" alt=""/>
                        <div className="recent-work-vertical card-img-overlay d-flex align-items-end">
                            <div className="recent-work-content text-start mb-3 ml-3 text-dark">
                                <h3 className="card-title light-300">Web Marketing</h3>
                                <p className="card-text">Psum officiNavLinkanim id est laborum.</p>
                            </div>
                        </div>
                    </NavLink>
                                 </div>
                {/* <!-- End Recent Work --> */}

                {/* <!-- Start Recent Work --> */}
                <div className="col-md-4 mb-3">
                    <NavLink to="#" className="recent-work card border-0 shadow-lg overflow-hidden">
                        <img className="recent-work-img card-img" src="./assets/img/recent-work-03.jpg" alt=""/>
                        <div className="recent-work-vertical card-img-overlay d-flex align-items-end">
                            <div className="recent-work-content text-start mb-3 ml-3 text-dark">
                                <h3 className="card-title light-300">R & D</h3>
                                <p className="card-text">Sum dolor sit consencutur</p>
                            </div>
                        </div>
                    </NavLink>
                                 </div>
                {/* <!-- End Recent Work --> */}

                {/* <!-- Start Recent Work --> */}
                <div className="col-md-4 mb-3">
                    <NavLink to="#" className="recent-work card border-0 shadow-lg overflow-hidden">
                        <img className="recent-work-img card-img" src="./assets/img/recent-work-04.jpg" alt=""/>
                        <div className="recent-work-vertical card-img-overlay d-flex align-items-end">
                            <div className="recent-work-content text-start mb-3 ml-3 text-dark">
                                <h3 className="card-title light-300">Public Relation</h3>
                                <p className="card-text">Lorem ipsum dolor sit amet</p>
                            </div>
                        </div>
                    </NavLink>
                                 </div>
                {/* <!-- End Recent Work --> */}

                {/* <!-- Start Recent Work --> */}
                <div className="col-md-4 mb-3">
                    <NavLink to="#" className="recent-work card border-0 shadow-lg overflow-hidden">
                        <img className="recent-work-img card-img" src="./assets/img/recent-work-05.jpg" alt=""/>
                        <div className="recent-work-vertical card-img-overlay d-flex align-items-end">
                            <div className="recent-work-content text-start mb-3 ml-3 text-dark">
                                <h3 className="card-title light-300">Branding</h3>
                                <p className="card-text">Put enim ad minim veniam</p>
                            </div>
                        </div>
                    </NavLink>
                                 </div>
                {/* <!-- End Recent Work --> */}

                {/* <!-- Start Recent Work --> */}
                <div className="col-md-4 mb-3">
                    <NavLink to="#" className="recent-work card border-0 shadow-lg overflow-hidden">
                        <img className="recent-work-img card-img" src="./assets/img/recent-work-06.jpg" alt=""/>
                        <div className="recent-work-vertical card-img-overlay d-flex align-items-end">
                            <div className="recent-work-content text-start mb-3 ml-3 text-dark">
                                <h3 className="card-title light-300">Creative Design</h3>
                                <p className="card-text">Mollit anim id est laborum.</p>
                            </div>
                        </div>
                    </NavLink>
                                 </div>
                {/* <!-- End Recent Work --> */}

            </div>
        </div>
    </section>
    {/* <!-- End Recent Work --> */}




        </>
    );
};

export default HomePage;