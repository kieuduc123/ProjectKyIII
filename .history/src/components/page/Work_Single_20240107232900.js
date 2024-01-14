import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

const Work_Single = () => {
   
    {/* <!-- End Related Post --> */}
    <div class="nav-bar">
                <div class="container">
                    <div class="row">
                        <div class="col-12 d-flex flex-wrap justify-content-between align-items-center">
                            <div class="site-branding d-flex align-items-center">
                                <NavLink class="d-block" to="/" rel="home">
                                    <img
                                        class="d-block"
                                        src="images/logo.png"
                                        alt="logo"
                                    />
                                </NavLink>
                            </div>
                            {/* <!-- .site-branding --> */}

                            <nav class="site-navigation d-flex justify-content-end align-items-center">
                                <ul class="d-flex flex-column flex-lg-row justify-content-lg-end align-items-center">
                                    <li >
                                        <NavLink class="current-menu-item active"  to="/">Home</NavLink>
                                    </li>
                                    <li >
                                        <NavLink class="current-menu-item active" to="/about">About us</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/Product">Product</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/new">News</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/contact">Contact</NavLink>
                                    </li>

                                    <li class="">
                                    <div class="action">
      <div class="profile"  onClick={()=>{setShow(!show)}}>
        <img src="https://file.hstatic.net/1000343028/file/nu-dien-vien-jav-03_46986a05d87b4118a9e954c70d236399.jpg"  alt=""/>
      </div>
      <div className={`menu ${show ? "active" : ""}`}>
        <h3>Someone Famous<br /><span>Website Designer</span></h3>
        <ul>
          <li>
            <img src="./assets/icons/user.png" /><a href="#">My profile</a>
          </li>
          <li>
            <img src="./assets/icons/edit.png" /><a href="#">Edit profile</a>
          </li>
          <li>
            <img src="./assets/icons/envelope.png" /><a href="#">Inbox</a>
          </li>
          <li>
            <img src="./assets/icons/settings.png" /><a href="#">Setting</a>
          </li>
          <li><img src="./assets/icons/question.png" /><a href="#">Help</a></li>
          <li>
            <img src="./assets/icons/log-out.png" /><a href="#">Logout</a>
          </li>
        </ul>
      </div>
    </div>
                                        
                                    {/* {user ? (
                    <div class="content">
                        <nav>
                            <ul className="btn btn-main-2 btn-icon btn-round-full">
                                <NavLink> {user.username}</NavLink>

                                <div class="tooltipMenu bottomSide">
                                    <ul>
                                        <li>
                                            <NavLink
                                                class=" dropdown-toggle  "
                                                className="text-black"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                                to="/profile"
                                            >
                                                Profile
                                            </NavLink>
                                        </li>
                                        <li onClick={handleLogout}>Logout</li>
                                        <li>CV</li>
                                    </ul>
                                </div>
                            </ul>
                        </nav>
                        
                        <ul class="dropdown-menu border border-secondary">
                            <li className="border-bottom border-secondary p-1">
                                <NavLink class="dropdown-item " to="/profile">
                                    Profile
                                </NavLink>
                            </li>
                            <li className="border-bottom border-secondary p-1">
                                <NavLink
                                    class="dropdown-item "
                                    onClick={handleLogout}
                                >
                                    Logout
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <NavLink
                        to="/login"
                        className=" btn btn-main-2 btn-round-full btn-icon "
                    >
                        Login
                    </NavLink>
                )}
                                        */}
                                    </li>
                                </ul>
                            </nav>
                            {/* <!-- .site-navigation --> */}

                            <div class="hamburger-menu d-lg-none">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            {/* <!-- .hamburger-menu --> */}
                        </div>
                        {/* <!-- .col --> */}
                    </div>
                    {/* <!-- .row --> */}
                </div>
                {/* <!-- .container --> */}
            </div>
           

    );
};

export default Work_Single;