import React from 'react';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { logOut } from 'sever/service';
import { googleLogout } from '@react-oauth/google';


const Header = () => {


const navigate = useNavigate();
   const googleLogout =  () => {
   if( googleLogout())
   localStorage.removeItem("google");
window.reload("/")
    toast.success('Đã đăng xuất thành công');
   }


    const email = JSON.parse(localStorage.getItem("google") ,"");
    const handleLogout = async () => {
      try {
        const email = JSON.parse(localStorage.getItem("dataUser"), "");
         const accessToken = localStorage.getItem("currentUser");
        const response = await logOut(email.id,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
          )
        console.log("logOut",response)
        if (response.status === 200) {
          toast.success('Đã đăng xuất thành công');
          localStorage.clear();
          localStorage.removeItem("currentUser");
          localStorage.removeItem("cart");
          navigate("/");
        } else {
          toast.error('Đăng xuất không thành công');
        }
      } catch (error) {
        toast.error("Đã xảy ra lỗi");
      }
    };

    return (
        <div>
                        {/* <!-- Header --> */}
    <nav id="main_nav" className="navbar navbar-expand-lg navbar-light bg-white shadow z-3  fixed-top ">
        <div className="container d-flex justify-content-between align-items-center">
            <NavLink className="navbar-brand h1" to="/">
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


                    {email ? (
                  <div className="dropdown">
                  <button className=" dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {email.name}
                  </button>
                  <ul class="dropdown-menu border border-secondary ">
                    <li className="border-bottom border-secondary p-1"><NavLink className="dropdown-item " to='/profile'>Profile</NavLink></li>
                    <li className="p-1 border-bottom border-secondary"><NavLink className="dropdown-item " to="/orderhistory">Order </NavLink></li>
                    <li className=" p-1"><NavLink class="dropdown-item "onClick={googleLogout} 
                    // onClick={handleLogout}
                    > Log Out</NavLink></li>
                  </ul>
                </div>
                ) : (
                    <NavLink className="nav-link" to="login"><i className='bx bx-user-circle bx-sm text-primary'></i></NavLink>
                  
                )}


                </div>
            </div>
        </div>
    </nav>
    {/* <!-- Close Header --> */}

        </div>
    );
};

export default Header;