import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logOut } from "sever/service";
import { router } from "constans/constans.router";
import axios from "axios";
// import { clsx } from 'clsx';

// import { googleLogout } from '@react-oauth/google';

const Header = () => {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
      };
    const [data, setData] = useState([]);
    const [show,setShow] = useState(false);
    const navigate = useNavigate();
    const accessToken = localStorage.getItem("currentUser");
    const handleLogout = async () => {
        try {
            const response = await logOut(user.id, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            console.log("logOut", response);
            if (response.data) {
                toast.success(response.data.statusMessage);
                localStorage.clear();
                localStorage.removeItem("currentUser");
                localStorage.removeItem("userID");
                navigate("/");
            }
        } catch (error) {
            toast.error(error.statusMessage);
        }
    };


    useEffect(() => {
        const handleProfile = async () => {
            if (!accessToken){
                navigate("/");
                return;
            };
            try {
                const rs = await axios.get(
                    `${process.env.REACT_APP_API_URL}/ManageCandidates/candidate/getinforms/token`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${accessToken}`,
                        },
                    }
                );
                if (rs?.data) {
                    setData(rs.data);
                    localStorage.setItem("profile", JSON.stringify(rs.data));
                    // console.log(rs)
                }
            } catch (error) {
                console.log("Profile", error);
            }
        };
        handleProfile();
    }, [accessToken]);

    const user = JSON.parse(localStorage.getItem("profile"));
   
    return (
       
            <div class="nav-bar">
                <div class="container">
                    <div class="row">
                        <div class="col-12 d-flex flex-wrap justify-content-between align-items-center">
                            <div class="site-branding d-flex align-items-center">
                                <NavLink class="d-block" to="/" rel="home">
                                    <img style={{width : "120px"}}
                                        class="d-block"
                                        src="images/logo.png"
                                        alt="logo"
                                    />
                                </NavLink>
                            </div>
                            {/* <!-- .site-branding --> */}

                            <nav class={`site-navigation ${open ? "show" : "" } d-flex justify-content-end align-items-center`}>
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
                                        <NavLink to="/career">Career</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/contact">Contact</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/quote">Quote us</NavLink>
                                    </li>

                          {/* <li className="call-btn button gradient-bg"> */}
                             {user ? (
                      <li>
           <img src={user.thumbnail} class="profile" alt="/"/>
          <ul className="">
            <li class="sub-item">
            <i class="fa-solid fa-user m"></i>
            <NavLink to="/profile"> My Profile</NavLink>
            </li>
            <li class="sub-item">
            <i class="fa-solid fa-clipboard m"></i>
            <NavLink to="/getCv">Status Cv </NavLink>
            </li>
            <li class="sub-item">
            <i class="fa-solid fa-right-from-bracket m"></i>
              <NavLink onClick={handleLogout}>Logout</NavLink>
            </li>
          </ul> 
                     
        </li>
                  
                ) : (
                    <li className="call-btn button gradient-bg">
                    <NavLink
                        to="/login"
                        className=" btn btn-main-2 btn-round-full btn-icon "
                    >
                        Login
                    </NavLink>
                    </li>
                )}
                                 {/* </li>   */}
                                </ul>
                            </nav>
                            {/* <!-- .site-navigation --> */}
                            <div class={`hamburger-menu ${open ? "open" :""} d-lg-none`}
                              onClick={handleClick}>
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

export default Header;
