import axios from 'axios';
import React, { useEffect, useState } from 'react';

const GetCv = () => {
    const [data,setData] = useState("");

    const idCandidate = JSON.parse(localStorage.getItem("profile"));
    const accessToken = localStorage.getItem("currentUser");
    useEffect(() => {
        const handleGetCv = async () => {
            try{
                const res = await axios.get(`https://pharmacyonline.azurewebsites.net/api/Profile/candidate/getprofile?idCandidate=${idCandidate.id}`,
               { headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                  },
                }
                )
               setData(res.data);
               console.log(res);
            }
            catch(errors){
                console.log("LOI");
            }
        }
        handleGetCv();
    },[])



    return (
        <div class="container-xl">
    <div class="table-responsive">
        <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-8"><h2>Customer <b>Details</b></h2></div>
                    <div class="col-sm-4">
                        <div class="search-box">
                            {/* <i class="material-icons">&#xE8B6;</i> */}
                            <input type="text" class="form-control" placeholder="Search&hellip;"/>
                        </div>
                    </div>
                </div>
            </div>
            <table class="table table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Full Name <i class="fa fa-sort"></i></th>
                        <th>Email</th>
                        <th>University</th>
                        <th>Number</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {data.length > 0 &&
                data.map((i,k) => {
               return (
                <tbody key={k}>
                <tr>
                    <td>{i.id}</td>
                    <td>{i.fullname}</td>
                    <td>{i.email}</td>
                    <td>{i.university}</td>
                    <td>{i.number}</td>
                    <td>
                        <a href="#" class="view" title="View" data-toggle="tooltip"><i class="material-icons">&#xE417;</i></a>
                        <a href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                        <a href="#" class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
                    </td>
                </tr>       
            </tbody>
               )

                })}
            </table>
     
        </div>
    </div>  
</div>   
    );
};

export default GetCv;