import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const GetCv = () => {
    const [data,setData] = useState("");

    const navigate = useNavigate();
    const idCandidate = JSON.parse(localStorage.getItem("profile"));
    const fileCV = JSON.parse(localStorage.getItem("FileCv"));
    const accessToken = localStorage.getItem("currentUser");

    useEffect(() => {
        const handleGetCv = async () => {
            try{
                const res = await axios.get(`https://pharmacyonline.azurewebsites.net/api/Profile/candidate/getprofile?idCandidate=${idCandidate.id}`,
               {
                 headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                  },
                }
                )
               setData(res.data);
               localStorage.setItem("idCadidate", JSON.stringify(res.data))
               console.log(res);
            }
            catch(errors){
                console.log("LOI");
            }
        }
        handleGetCv();
    },[])

//     const idCandidateData = localStorage.getItem("idCadidate");
  
// const mappedData = idCandidateData.map((item) => {
//     // Thực hiện mapping trên từng phần tử của mảng
//     return item; // Thay đổi logic mapping tại đây
//     console.log(mappedData);
//   });
const [selectedOrderId, setSelectedOrderId] = useState(null);

const orderId = selectedOrderId;
const handleSubmitCv = async (orderId) => {
    try{
        const res = await axios.post(`https://pharmacyonline.azurewebsites.net/api/Profile/candidate/submit?idCandidate=
        ${fileCV.candidateId}&idProfileDetail=${orderId}`,
        {
            headers: {
               "Content-Type": "application/json",
               Authorization: `Bearer ${accessToken}`,
             },
      }
        )
        if(res.data) {
            toast.success("success");
            navigate("/thankyou")
            console.log(res);
        }
    }
    catch(errors){
       toast.error(errors);
    }

}

    return (
        <div class="container-xl">
    <div class="table-responsive">
        <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-8"><h2>Customer <b>Details</b></h2></div>
                    <div class="col-sm-4">
                        <div class="search-box">
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
                        <button  class="edit" title="Edit" onSubmit={() => handleSubmitCv(i.id)} ><i class="fa-solid fa-check"></i></button>
                        <a href="#" class="delete" title="Delete" ><i class="fa-solid fa-trash"></i></a>
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