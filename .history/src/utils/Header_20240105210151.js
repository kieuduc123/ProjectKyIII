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
        //     toast.error("Đã xảy ra lỗi", error);
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
                    console.log("profile", rs);
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
    console.log(user);
    return (
        <header class="site-header">
            <div class="nav-bar">
                <div class="container">
                    <div class="row">
                        <div class="col-12 d-flex flex-wrap justify-content-between align-items-center">
                            <div class="site-branding d-flex align-items-center">
                                <a class="d-block" href="index.html" rel="home">
                                    <img
                                        class="d-block"
                                        src="images/logo.png"
                                        alt="logo"
                                    />
                                </a>
                            </div>
                            {/* <!-- .site-branding --> */}

                            <nav class="site-navigation d-flex justify-content-end align-items-center">
                                <ul class="d-flex flex-column flex-lg-row justify-content-lg-end align-items-center">
                                    <li class="current-menu-item">
                                        <a href="/">Home</a>
                                    </li>
                                    <li>
                                        <a href="/about">About us</a>
                                    </li>
                                    <li>
                                        <a href="services.html">Services</a>
                                    </li>
                                    <li>
                                        <a href="news.html">News</a>
                                    </li>
                                    <li>
                                        <a href="/contact">Contact</a>
                                    </li>

                                    <li class="call-btn button gradient-bg mt-3 mt-md-0">
                                        <a
                                            class="d-flex justify-content-center align-items-center"
                                            href="#"
                                        >
                                            <img
                                                src="images/emergency-call.png"
                                                alt=""
                                            />{" "}
                                            +34 586 778 8892
                                        </a>
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
            {/* <!-- .nav-bar --> */}

            <div class="swiper-container hero-slider">
                <div class="swiper-wrapper">
                    <div
                        class="swiper-slide hero-content-wrap"
                        // style="background-image: url('images/hero.jpg')"
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
                                            <a
                                                href="#"
                                                class="button gradient-bg"
                                            >
                                                Read More
                                            </a>
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
                        // style="background-image: url('images/hero.jpg')"
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
                                            <a
                                                href="#"
                                                class="button gradient-bg"
                                            >
                                                Read More
                                            </a>
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
                                            <a
                                                href="#"
                                                class="button gradient-bg"
                                            >
                                                Read More
                                            </a>
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
                {user ? (
                    <div class="content">
                        <nav>
                            <ul className="btn btn-main-2 btn-icon btn-round-full">
                                {/* <li class="tooltip text-black"> */}
                                {/* <img className="w-100" src={user.thumbnail} alt=""/>	 */}
                                {/* <i class="fa-solid fa-user">User </i>
            UseName */}
                                {/* </li> */}
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
                        {/* </div> */}

                        <NavLink
                            class=" dropdown-toggle  "
                            className="text-white"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            to="/profile"
                        >
                            {user.username}
                        </NavLink>
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

                <div class="pagination-wrap position-absolute w-100">
                    <div class="swiper-pagination d-flex flex-row flex-md-column"></div>
                </div>
                {/* <!-- .pagination-wrap --> */}
            </div>
            {/* <!-- .hero-slider --> */}
        </header>
    );
};

export default Header;
