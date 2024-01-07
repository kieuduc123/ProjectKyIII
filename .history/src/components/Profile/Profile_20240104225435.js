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
        <div>
            <div class="container">
    <div class="main-body">
        
          <nav aria-label="breadcrumb" class="main-breadcrumb p-3">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="/">Home</a></li>
              <li class="breadcrumb-item active" aria-current="/">User Profile</li>
            </ol>
          </nav>
          <div class="row gutters-sm">
         
            <div class="col-md-4 mb-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img src={data.thumbnail} alt="Admin" class="rounded-circle" width="150"/>
                    <div class="mt-5">
                      <h4>{data.username}</h4>
                   
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-8">
              <div class="card mb-3">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3 ">
                      <h6 class="mb-0">Full Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                    {data.username}
                    </div>
                  </div>
                
                  <div class="row mt-5">
                    <div class="col-sm-3 ">
                      <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                    {data.email}
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