import React from 'react';
import { NavLink } from 'react-router-dom';

const Work = () => {
    return (
        <>
        <div>
              <div id="work_banner" className="banner-wrapper bg-light w-100 py-5 my-3">
        <div className="banner-vertical-center-work container text-dark d-flex justify-content-center align-items-center py-5 p-0">
            <div className="banner-content col-lg-8 col-12 m-lg-auto text-center">
                <h1 className="banner-heading h2 display-3 pb-5 semi-bold-600 typo-space-line-center light-300 text-dark">Công Việc</h1>
                {/* <h3 className="h4 pb-2 light-100 text-dark">Elit, sed do eiusmod tempor incididunt</h3> */}
                {/* <p className="banner-body pb-2 light-300">
                    Vector illustration <NavLink className="text-white" to="http://freepik.com/" target="_blank">Freepik</NavLink>.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus.
                </p>
                <button type="submit" className="btn rounded-pill btn-outline-light px-4 me-4 light-300 text-dark">Learn More</button> */}
                {/* <button type="submit" className="btn rounded-pill btn-secondary  px-4 light-300 light-300 text-dark">Contact Us</button> */}
            </div>
        </div>
    </div>
    {/* <!-- End Banner Hero --> */}

    {/* <!-- Start Our Work --> */}
    <section className="container py-5">
        <div className="row justify-content-center my-5">
            <div className="filter-btns shadow-md rounded-pill text-center col-auto">
                <NavLink className="filter-btn btn rounded-pill btn-outline-primary border-0 m-md-2 px-md-4 active" data-filter=".project" to="#">All</NavLink>
                <NavLink className="filter-btn btn rounded-pill btn-outline-primary border-0 m-md-2 px-md-4" data-filter=".business" to="#">Business</NavLink>
                <NavLink className="filter-btn btn rounded-pill btn-outline-primary border-0 m-md-2 px-md-4" data-filter=".marketing" to="#">Marketing</NavLink>
                <NavLink className="filter-btn btn rounded-pill btn-outline-primary border-0 m-md-2 px-md-4" data-filter=".social" to="#">Social Media</NavLink>
                <NavLink className="filter-btn btn rounded-pill btn-outline-primary border-0 m-md-2 px-md-4" data-filter=".graphic" to="#">Graphic</NavLink>
            </div>
        </div>

        <div className="row projects gx-lg-5">
            <NavLink to="work" className="col-sm-6 col-lg-4 text-decoration-none project marketing social business">
                <div className="service-work overflow-hidden card mb-5 mx-5 m-sm-0">
                    <img className="card-img-top" src="./assets/img/our-work-01.jpg" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title light-300 text-dark">Digital Marketing</h5>
                        <p className="card-text light-300 text-dark">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolor.
                        </p>
                        <span className="text-decoration-none text-primary light-300">
                              Read more <i className='bx bxs-hand-right ms-1'></i>
                          </span>
                    </div>
                </div>
            </NavLink>
            <NavLink to="work" className="col-sm-6 col-lg-4 text-decoration-none project graphic social">
                <div className="service-work overflow-hidden card mx-5 mx-sm-0 mb-5">
                    <img className="card-img-top" src="./assets/img/our-work-02.jpg" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title light-300 text-dark">Corporate Branding</h5>
                        <p className="card-text light-300 text-dark">
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <span className="text-decoration-none text-primary light-300">
                              Read more <i className='bx bxs-hand-right ms-1'></i>
                          </span>
                    </div>
                </div>
            </NavLink>
            <NavLink to="work" className="col-sm-6 col-lg-4 text-decoration-none project marketing graphic business">
                <div className="service-work overflow-hidden card mx-5 mx-sm-0 mb-5">
                    <img className="card-img-top" src="./assets/img/our-work-03.jpg" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title light-300 text-dark">Leading Digital Solution</h5>
                        <p className="card-text light-300 text-dark">
                            Duis aute irure dolor in reprehenderit in voluptate velit
                            esse cillum dolore eu fugiatdolore eu fugiat nulla pariatur.
                        </p>
                        <span className="text-decoration-none text-primary light-300">
                              Read more <i className='bx bxs-hand-right ms-1'></i>
                          </span>
                    </div>
                </div>
            </NavLink>
            <NavLink to="work" className="col-sm-6 col-lg-4 text-decoration-none project social business">
                <div className="service-work overflow-hidden card mx-5 mx-sm-0 mb-5">
                    <img className="card-img-top" src="./assets/img/our-work-04.jpg" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title light-300 text-dark">Smart Applications</h5>
                        <p className="card-text light-300 text-dark">
                            Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <span className="text-decoration-none text-primary light-300">
                              Read more <i className='bx bxs-hand-right ms-1'></i>
                          </span>
                    </div>
                </div>
            </NavLink>
            <NavLink to="work" className="col-sm-6 col-lg-4 text-decoration-none project marketing">
                <div className="service-work overflow-hidden card mx-5 mx-sm-0 mb-5">
                    <img className="card-img-top" src="./assets/img/our-work-05.jpg" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title light-300 text-dark">Corporate Stationary</h5>
                        <p className="card-text light-300 text-dark">
                            Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <span className="text-decoration-none text-primary light-300">
                              Read more <i className='bx bxs-hand-right ms-1'></i>
                          </span>
                    </div>
                </div>
            </NavLink>
            <NavLink to="work" className="col-sm-6 col-lg-4 text-decoration-none project marketing graphic">
                <div className="service-work overflow-hidden card mx-5 mx-sm-0 mb-5">
                    <img className="card-img-top" src="./assets/img/our-work-06.jpg" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title light-300 text-dark">8 Financial Tips</h5>
                        <p className="card-text light-300 text-dark">
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <span className="text-decoration-none text-primary light-300">
                              Read more <i className='bx bxs-hand-right ms-1'></i>
                          </span>
                    </div>
                </div>
            </NavLink>
        </div>
        <div className="row">
            <div className="btn-toolbar justify-content-center pb-4" role="toolbar" aria-label="Toolbar with button groups">
                <div className="btn-group me-2" role="group" aria-label="First group">
                    <button type="button" className="btn btn-secondary text-white">Previous</button>
                </div>
                <div className="btn-group me-2" role="group" aria-label="Second group">
                    <button type="button" className="btn btn-light">1</button>
                </div>
                <div className="btn-group me-2" role="group" aria-label="Second group">
                    <button type="button" className="btn btn-secondary text-white">2</button>
                </div>
                <div className="btn-group" role="group" aria-label="Third group">
                    <button type="button" className="btn btn-secondary text-white">Next</button>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- End Our Work --> */}

    {/* <!-- Start Feature Work --> */}
    <section className="bg-light py-5">
        <div className="feature-work container my-4">
            <div className="row d-flex d-flex align-items-center">
                <div className="col-lg-5">
                    <h3 className="feature-work-title h4 text-muted light-300">Featured Work</h3>
                    <h1 className="feature-work-heading h2 py-3 semi-bold-600">Transform with us</h1>
                    <p className="feature-work-body text-muted light-300">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                        ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                    </p>
                    <p className="feature-work-footer text-muted light-300">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div className="col-lg-6 offset-lg-1 align-left">
                    <div className="row">
                        <NavLink className="col" data-type="image" data-fslightbox="gallery" to="./assets/img/feature-work-1-large.jpg">
                            <img className="img-fluid" src="./assets/img/feature-work-1.jpg" alt=''/>
                        </NavLink>
                        <NavLink className="col" data-type="image" data-fslightbox="gallery" to="./assets/img/feature-work-2-large.jpg">
                            <img className="img-fluid" src="./assets/img/feature-work-2.jpg" alt=''/>
                        </NavLink>
                    </div>
                    <div className="row pt-4">
                        <NavLink className="col" data-type="image" data-fslightbox="gallery" to=".assets/img/feature-work-3-large.jpg">
                            <img className="img-fluid" src="./assets/img/feature-work-3.jpg" alt=''/>
                        </NavLink>
                        <NavLink className="col" data-type="image" data-fslightbox="gallery" to=".assets/img/feature-work-4-large.jpg">
                            <img className="img-fluid" src="./assets/img/feature-work-4.jpg" alt=''/>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- End Feature Work --> */}

        </div>
        </>
    );
};

export default Work;