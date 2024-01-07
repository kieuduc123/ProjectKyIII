import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Profile = () => {
const [data,setData] = useState([]);
// const user = JSON.parse(localStorage.getItem("dataUser")) || {};
// const accessToken = localStorage.getItem("currentUser");
const handleProfile =  async () => {
  const accessToken = localStorage.getItem("currentUser");
    try {
        const rs = await  axios.get("https://pharmacyonline.azurewebsites.net/api/ManageCandidates/candidate/getinforms/token",
        {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        if(rs?.data){
            setData(rs.data);
            // console.log("profile", rs);
            localStorage.setItem("profile", JSON.stringify(rs.data));
            // console.log(rs)
        }
    }
    catch(error){
        console.log("Profile",error)
    }
}
useEffect(() => {
  handleProfile();
},[])

    return (
      <div class= " container page-content page-container" id="page-content">
    <div class="padding">
        <div class="row container d-flex justify-content-center">
<div class="col-lg-12 col-md-12">
                                                <div class="card user-card-full">
                                                    <div class="row m-l-0 m-r-0">
                                                        <div class="col-sm-4 m-auto button gradient-bg  user-profile">
                                                            <div class="card-block text-center text-white">
                                                                <div class="m-b-25">
                                                                    <img className='w-75 rounded-circle' src={data.thumbnail} alt="User-Profile-Image" alt=""/>
                                                                </div>
                                                                <h6 class="f-w-600 ">{data.username}</h6>
                                                                <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-8">
                                                            <div class="card-block">
                                                                <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                                                <div class="row">
                                                                    <div class="col-sm-6">
                                                                        <p class="m-b-10 f-w-600">Email</p>
                                                                        <h6 class="text-muted f-w-400">{data.email}</h6>
                                                                    </div>
                                                                    <div class="col-sm-6">
                                                                        <p class="m-b-10 f-w-600">Full Name</p>
                                                                        <h6 class="text-muted f-w-400">{data.username}</h6>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                             </div>
                                                </div>
                                            </div>
    );
};

export default Profile;