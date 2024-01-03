import React from 'react';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { logOut } from 'sever/service';
import {router} from 'constans/constans.router'
// import { clsx } from 'clsx';

// import { googleLogout } from '@react-oauth/google';


const Header = () => {

	const menuItems=[{
		id:1,
		name:'home',
		path:router.home,
		active:false
	},
	{
		id:2,
		name:'about',
		path:router.about,
		active:false

	},
	{
		id:3,
		name:'Product',
		path:router.Product,
		active:false

	},
	{
		id:4,
		name:'contact',
		path:router.contact,
		active:false

	},
	
]


// const navigate = useNavigate();
//    const googleLogout =  () => {
//    if( googleLogout())
//    localStorage.removeItem("google");
// window.reload("/")
//     toast.success('Đã đăng xuất thành công');
//    }


    // const email = JSON.parse(localStorage.getItem("google") ,"");
	const email = JSON.stringify(localStorage.getItem("currentUser"));
	const user  = JSON.stringify(localStorage.getItem("profile"));
	console.log(user);
  const userId = JSON.stringify(localStorage.getItem("userID"))

    const handleLogout = async () => {
      try {
         const accessToken = localStorage.getItem("currentUser");
        const response = await logOut(userId,
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
          localStorage.removeItem("userID");
        //   navigate("/");
        } else {
          toast.error('Đăng xuất không thành công');
        }
      } catch (error) {
        toast.error("Đã xảy ra lỗi");
      }
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

    return (
    
<header>
	<div class="header-top-bar">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-lg-6">
					<ul class="top-bar-info list-inline-item pl-0 mb-0">
						<li class="list-inline-item"><a href="mailto:support@gmail.com"><i class="icofont-support-faq mr-2"></i>support@novena.com</a></li>
						<li class="list-inline-item"><i class="icofont-location-pin mr-2"></i>Address Ta-134/A, New York, USA </li>
					</ul>
				</div>
				<div class="col-lg-6">
					<div class="text-lg-right top-right-bar mt-2 mt-lg-0">
						<a href="tel:+23-345-67890">
							<span>Call Now : </span>
							<span class="h4">823-4565-13456</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<nav class="navbar navbar-expand-lg navigation" id="navbar">
		<div class="container">
			<a class="navbar-brand" href="index">
				<img src="images/logo.png" alt="" class="img-fluid"/>
			</a>

			<button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarmain"
				aria-controls="navbarmain" aria-expanded="false" aria-label="Toggle navigation">
				<span class="icofont-navigation-menu"></span>
			</button>

			<div class="collapse navbar-collapse justify-content-center" id="navbarmain">
				<ul class="navbar-nav ">

				{/* {menuItems.map((item)=>(
					<li className= {clsx('nav-item',{"active":item.active})} 
					 ><NavLink key={item.id} className={clsx('nav-link')} 
					  onClick={()=>handleActive(item.id)}  to={item.path}>{item.name}</NavLink></li>

				))} */}
			      
					<li class="nav-item active" 
					 ><NavLink class=" nav-link "  to="/">Home</NavLink></li>

					<li class="nav-item">
						<NavLink class="nav-link" to="/about">About</NavLink></li>

					<li class="nav-item">
						<NavLink class="nav-link" to="/product">Product</NavLink></li>
				
					<li class="nav-item">
						<NavLink class="nav-link" to="/contact">Contact</NavLink></li>
				</ul>
			</div>

			<div>
			{user ? (
                  <div class="dropdown  btn btn-main-2 btn-round-full btn-icon">
                  <NavLink class=" dropdown-toggle  "  className= "text-white"type="button" data-bs-toggle="dropdown" aria-expanded="false" to="/profile">
                       {user}
                  </NavLink>
                  <ul class="dropdown-menu border border-secondary">
                    <li className="border-bottom border-secondary p-1"><NavLink class="dropdown-item " to='/profile'>Profile</NavLink></li>
					<li className="border-bottom border-secondary p-1"><NavLink class="dropdown-item " onClick={handleLogout}>Logout</NavLink></li>
                  </ul>
                </div>
                ) : (
				<NavLink to="/login" className= " btn btn-main-2 btn-round-full btn-icon ">Login</NavLink>
                )}
			</div>
		</div>
	</nav>
</header>

    );
};

export default Header;