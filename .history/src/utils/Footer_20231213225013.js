import React from 'react';
import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <div>
                {/* <!-- Start Footer --> */}
    <footer className="bg-secondary pt-4">
        <div className="container">
            <div className="row py-4">

                <div className="col-lg-3 col-12 align-left">
                    <NavLink className="navbar-brand" to="index.html">
                        <i className='bx bx-buildings bx-sm text-light'></i>
                        <span className="text-light h5">Purple</span> <span className="text-light h5 semi-bold-600">Buzz</span>
                    </NavLink>
                    <p className="text-light my-lg-4 my-2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut.
                    </p>
                    <ul className="list-inline footer-icons light-300">
                        <li className="list-inline-item m-0">
                            <NavLink className="text-light" target="_blank" to="http://facebook.com/">
                                <i className='bx bxl-facebook-square bx-md'></i>
                            </NavLink>
                        </li>
                        <li className="list-inline-item m-0">
                            <NavLink className="text-light" target="_blank" to="https://www.linkedin.com/">
                                <i className='bx bxl-linkedin-square bx-md'></i>
                            </NavLink>
                        </li>
                        <li className="list-inline-item m-0">
                            <NavLink className="text-light" target="_blank" to="https://www.whatsapp.com/">
                                <i className='bx bxl-whatsapp-square bx-md'></i>
                            </NavLink>
                        </li>
                        <li className="list-inline-item m-0">
                            <NavLink className="text-light" target="_blank" to="https://www.flickr.com/">
                                <i className='bx bxl-flickr-square bx-md'></i>
                            </NavLink>
                        </li>
                        <li className="list-inline-item m-0">
                            <NavLink className="text-light" target="_blank" to="https://www.medium.com/">
                                <i className='bx bxl-medium-square bx-md' ></i>
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="col-lg-3 col-md-4 my-sm-0 mt-4">
                    <h3 className="h4 pb-lg-3 text-light light-300">Our Company</h3>
                        <ul className="list-unstyled text-light light-300">
                            <li className="pb-2">
                                <i className='bx-fw bx bxs-chevron-right bx-xs'></i><NavLink className="text-decoration-none text-light" to="index.html">Home</NavLink>
                            </li>
                            <li className="pb-2">
                                <i className='bx-fw bx bxs-chevron-right bx-xs'></i><NavLink className="text-decoration-none text-light py-1" to="about.html">About Us</NavLink>
                            </li>
                            <li className="pb-2">
                                <i className='bx-fw bx bxs-chevron-right bx-xs'></i><NavLink className="text-decoration-none text-light py-1" to="work.html">Work</NavLink>
                            </li>
                            <li className="pb-2">
                                <i className='bx-fw bx bxs-chevron-right bx-xs'></i>
                                <NavLink className="text-decoration-none text-light py-1" to="pricing.html">Price</NavLink>
                            </li>
                            <li className="pb-2">
                                <i className='bx-fw bx bxs-chevron-right bx-xs'></i><NavLink className="text-decoration-none text-light py-1" to="contact.html">Contact</NavLink>
                            </li>
                        </ul>
                </div>

                <div className="col-lg-3 col-md-4 my-sm-0 mt-4">
                    <h2 className="h4 pb-lg-3 text-light light-300">Our Works</h2>
                    <ul className="list-unstyled text-light light-300">
                        <li className="pb-2">
                            <i className='bx-fw bx bxs-chevron-right bx-xs'></i><NavLink className="text-decoration-none text-light py-1" to="#">Branding</NavLink>
                        </li>
                        <li className="pb-2">
                            <i className='bx-fw bx bxs-chevron-right bx-xs'></i><NavLink className="text-decoration-none text-light py-1" to="#">Business</NavLink>
                        </li>
                        <li className="pb-2">
                            <i className='bx-fw bx bxs-chevron-right bx-xs'></i><NavLink className="text-decoration-none text-light py-1" to="#">Marketing</NavLink>
                        </li>
                        <li className="pb-2">
                            <i className='bx-fw bx bxs-chevron-right bx-xs'></i><NavLink className="text-decoration-none text-light py-1" to="#">Social Media</NavLink>
                        </li>
                        <li className="pb-2">
                            <i className='bx-fw bx bxs-chevron-right bx-xs'></i><NavLink className="text-decoration-none text-light py-1" to="#">Digital Solution</NavLink>
                        </li>
                        <li className="pb-2">
                            <i className='bx-fw bx bxs-chevron-right bx-xs'></i><NavLink className="text-decoration-none text-light py-1" to="#">Graphic</NavLink>
                        </li>
                    </ul>
                </div>

                <div className="col-lg-3 col-md-4 my-sm-0 mt-4">
                    <h2 className="h4 pb-lg-3 text-light light-300">For Client</h2>
                    <ul className="list-unstyled text-light light-300">
                        <li className="pb-2">
                            <i className='bx-fw bx bx-phone bx-xs'></i><NavLink className="text-decoration-none text-light py-1" to="tel:010-020-0340">010-020-0340</NavLink>
                        </li>
                        <li className="pb-2">
                            <i className='bx-fw bx bx-mail-send bx-xs'></i><NavLink className="text-decoration-none text-light py-1" to="mailto:info@company.com">info@company.com</NavLink>
                        </li>
                    </ul>
                </div>

            </div>
        </div>

        <div className="w-100 bg-primary py-3">
            <div className="container">
                <div className="row pt-2">
                    <div className="col-lg-6 col-sm-12">
                        <p className="text-lg-start text-center text-light light-300">
                            © Copyright 2021 Purple Buzz Company. All Rights Reserved.
                        </p>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <p className="text-lg-end text-center text-light light-300">
                            Designed by <NavLink rel="sponsored" className="text-decoration-none text-light" to="https://templatemo.com/" target="_blank"><strong>TemplateMo</strong></NavLink>    
                                            </p>
                    </div>
                </div>
            </div>
        </div>

    </footer>
    {/* <!-- End Footer --> */}
        </div>
    );
};

export default Footer;