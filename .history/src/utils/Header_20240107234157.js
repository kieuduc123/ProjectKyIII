import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logOut } from "sever/service";
import { router } from "constans/constans.router";
import axios from "axios";
// import { clsx } from 'clsx';

// import { googleLogout } from '@react-oauth/google';

const Header = () => {
    const menuItems = [
        {
            id: 1,
            name: "home",
            path: router.home,
            active: false,
        },
        {
            id: 2,
            name: "about",
            path: router.about,
            active: false,
        },
        {
            id: 3,
            name: "Product",
            path: router.Product,
            active: false,
        },
        {
            id: 4,
            name: "contact",
            path: router.contact,
            active: false,
        },
    ];
    const [data, setData] = useState([]);
    const [show,setShow] = useState(false);
    // const user = JSON.parse(localStorage.getItem("dataUser")) || {};
    // const accessToken = localStorage.getItem("currentUser");
    const navigate = useNavigate();
    //    const googleLogout =  () => {
    //    if( googleLogout())
    //    localStorage.removeItem("google");
    // window.reload("/")
    //     toast.success('Đã đăng xuất thành công');
    //    }

    // const email = JSON.parse(localStorage.getItem("google") ,"");
    // const email = JSON.stringify(localStorage.getItem("currentUser"));
    // const user  =  JSON.stringify(localStorage.getItem("profile"));
    //  const userID = user.id ;
    // console.log(userID);
    const accessToken = localStorage.getItem("currentUser");
    // useEffect(() => {
    //     if(!localStorage === accessToken) {
    // 		navigator("/")
    // 	}
    // },[])
    const handleLogout = async () => {
            toast.success("success")
           localStorage.clear();
            localStorage.removeItem("currentUser");
            localStorage.removeItem("userID");
           navigate("/");
        // try {
        //     console.log(accessToken);
        //     const response = await logOut(user.id, {
        //         headers: {
        //             "Content-Type": "application/json",
        //             Authorization: `Bearer ${accessToken}`,
        //         },
        //     });
        //     console.log("logOut", response);
        //     if (response.status === 200) {
        //         toast.success(response.statusMessage);
        //         localStorage.clear();
        //         localStorage.removeItem("currentUser");
        //         localStorage.removeItem("userID");
        //         navigate("/");
        //     } else {
        //         toast.error("Đăng xuất không thành công");
        //     }
        // } catch (error) {
        //     toast.error("Đã xảy rNavLink lỗi", error);
        // }
    };

    // const handleActive= (id)=>{
    // 	menuItems.filter((item) => {
    // 		if(item.id===id){
    // 			return{
    // 				...item,
    // 				active:true
    // 			}
    // 		}
    // 	})
    // }

    useEffect(() => {
        const handleProfile = async () => {
            if (!accessToken) return;
            try {
                const rs = await axios.get(
                    "https://pharmacyonline.azurewebsites.net/api/ManageCandidates/candidate/getinforms/token",
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

                                   
                                    <div class="fixed user">
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

export default Header;
