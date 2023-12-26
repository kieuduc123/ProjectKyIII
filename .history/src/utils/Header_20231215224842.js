import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div>
                        {/* <!-- Header --> */}
    <nav id="main_nav" className="navbar navbar-expand-lg navbar-light bg-white shadow z-3  fixed-top ">
        <div className="container d-flex justify-content-between align-items-center">
            <NavLink className="navbar-brand h1" to="index.html">
                <i className='bx bx-buildings bx-sm text-dark'></i>
                <span className="text-dark h4">PHARMAC</span> <span className="text-primary h4">EUTICALS</span>
            </NavLink>
            <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler-success" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="navbar-toggler-success">
                <div className="flex-fill mx-xl-5 mb-2">
                    <ul className="nav navbar-nav d-flex justify-content-between mx-xl-5 text-center text-dark">
                        <li className="nav-item">
                            <NavLink className="nav-link btn-outline-primary rounded-pill px-3" to="/">Trang Chủ</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link btn-outline-primary rounded-pill px-3" to="/about"> Về Chúng Tôi</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link btn-outline-primary rounded-pill px-3" to="/work"> Công Việc </NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <NavLink className="nav-link btn-outline-primary rounded-pill px-3" to="pricing.html">Pricing</NavLink>
                        </li> */}
                        <li className="nav-item">
                            <NavLink className="nav-link btn-outline-primary rounded-pill px-3" to="/contact">Liên Hệ </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar align-self-center d-flex">
                    <NavLink className="nav-link" to="#"><i className='bx bx-bell bx-sm bx-tada-hover text-primary'></i></NavLink>
                    <NavLink className="nav-link" to="#"><i className='bx bx-cog bx-sm text-primary'></i></NavLink>
                    <NavLink className="nav-link" to="login"><i className='bx bx-user-circle bx-sm text-primary'></i></NavLink>
                </div>
            </div>
        </div>
    </nav>
    {/* <!-- Close Header --> */}

        </div>
    );
};

export default Header;