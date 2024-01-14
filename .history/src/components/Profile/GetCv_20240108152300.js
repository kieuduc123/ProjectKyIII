// import axios from 'axios';
import React, { useEffect, useState } from "react";
import { orderCannel, orderHistory } from "sever/service";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";
import { tab } from "@testing-library/user-event/dist/tab";
const GetCv = () => {
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const [text, setText] = useState("");
    const [order,setOrder] = useState("");
    const [cancelReason, setCancelReason] = useState(); 
    const [selectedOrderId, setSelectedOrderId] = useState(null);

    const accessToken = localStorage.getItem("currentUser");
    const idCandidate = JSON.parse(localStorage.getItem("profile"));
   
    
    const orderId = selectedOrderId;
//xoa cv
    const handleSubmit = async (orderId) => {
        try {
            const rs = await axios.get(
                `https://pharmacyonline.azurewebsites.net/api/Profile/candidate/delete?idCandidate=${idCandidate.id}&idProfileDetail=${orderId}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );
            if (rs?.data.status === 200) {
                toast.success("Thành công");;
                 setText(rs);
                 console.log("Cancel",rs);
            }
            else if (rs.data.status === 401 || rs.data.status === 403 || rs.data.status === 404 ) {
                toast.warning(rs.data.statusMessage);
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error("Không Thể  Huỷ Được" )
        }
    };
//xac nhan don hang 
    const handleOrderDetail = async (orderId) => {
        try {
            const rs =  await axios.post (`https://pharmacyonline.azurewebsites.net/api/Profile/candidate/submit?idCandidate=${idCandidate.id}&idProfileDetail=${orderId}`,{ },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`, // Make sure accessToken is valid
                },
            }
        );
            if(rs?.data.status === 200){
                toast.success("Thành Công");
                setOrder(rs);
                navigator("/thankyou");
                console.log("handleOrderDetail",rs);
            } else if (rs.data.status === 401 || rs.data.status === 403 || rs.data.status === 404 ) {
                toast.warning(rs.data.statusMessage);
            } 
        }   catch(error) {
           toast.error("Thất Bại")
        }
    };

   
console.log("Profile",idCandidate.id);

    //hien thi ra các profile
    const getProfile = async (statusValue) => {
        try {
            const response = await axios.get(`https://pharmacyonline.azurewebsites.net/api/Profile/candidate/getprofile?idCandidate=${idCandidate.id}&status=${statusValue}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            setData(response.data);
            console.log("order", response);
        } catch (error) {
            console.error("Error:", error);
            // data([]);
        }
    };
///get ra lich su
    const getProfileHistory = async () =>{
      try{
        const res = await axios.get(`https://pharmacyonline.azurewebsites.net/api/Profile/candidate/gethistory?idCandidate=${idCandidate.id}`,{
          headers : {
            "Content-Type" : "application/json",
            Authorization: `Bearer ${accessToken}`,
          }
        })
        setData(res.data)
        console.log("history",res);
      }
      catch(error) {
        toast.error("Error")
      }
    }
//get ra details 
const getProfileDetails = async (orderId) => {
 try{
  const res = await axios.get(`https://pharmacyonline.azurewebsites.net/api/Profile/admin/getdetail?IdProfile=${orderId}`,{
   
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
    },
  })
    setText(res.data)
    console.log("detail",res);
 }catch(error){
  toast.error("Error")
 }
}

    useEffect(() => {
        getProfile();
    }, []);



    return (
        <div>
            <div class="container product">
        <div class="row flex-lg-nowrap">
          <div class="col-12 col-lg-auto mb-3" style={{width: "200px"}}>
            <div class="card p-3">
              <div class="site-navigation">
                <ul class="">
                  <li class="nav-item text-black" >

                    <NavLink  ><span className="text-black">Status</span>
                    </NavLink>
                    </li>
                  <li class="nav-item pl-3">
                    <NavLink  class="nav-link px-2" onClick={() => getProfile('EDIT')}>
                       <span  >Edit</span></NavLink></li>
                  <li class="nav-item pl-2">
                    <NavLink class="nav-link px-3" onClick={() => getProfile('SUBMITTED')} ><span>Submitted</span></NavLink></li>
                  <li class="nav-item pl-2">
                    <NavLink class="nav-link px-3" onClick={getProfileHistory} ><span>Profile History</span></NavLink></li>
                </ul>
              </div>
            </div>
          </div>
        
          <div class="col">
            <div class="e-tabs mb-3 px-3">
              <ul class="nav nav-tabs">
                <li class="nav-item"><a class="nav-link active" href="#">Users</a></li>
              </ul>
            </div>
        
            <div class="row flex-lg-nowrap">
              <div class="col mb-3">
                <div class="e-panel card">
                  <div class="card-body">
                    <div class="card-title">
                      <h6 class="mr-2"><span>Users</span><small class="px-1">list profile </small></h6>
                    </div>
                    <div class="e-table">
                      <div class="table-responsive table-lg mt-3">
                        <table class="table table-bordered">
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th class="max-width">Full Name</th>
                              <th class="max-width">Email</th>
                              <th class="sortable">Number</th>
                              <th> Status</th>
                              <th>Details</th>
                              <th>Actions</th>
                            </tr>
                          </thead>

                          <tbody>
                          {data.length >= 0  &&
                                data.map((data, i) => {
                                    return (
                            <tr>
                              <td class="text-nowrap align-middle">{data.id}</td>
                                            <td class="text-nowrap align-middle">{data.email}</td>
                                            <td class="text-nowrap align-middle">{data.fullname}</td>
                                            <td class="text-nowrap align-middle">{data.number}</td>
                                            <td class="text-nowrap align-middle">{data.isAccepted}</td> 
                                            <td class="text-nowrap align-middle">
                                            <button className="bg-primary "  data-toggle="modal" data-target="#user-form-modal" type="submit" onClick={() => getProfileDetails(data.id) }>Details</button>
                                              </td> 
                              <td class="text-center align-middle">
                                <div class="btn-group align-top">
                                    {/* <button class="btn btn-sm btn-outline-secondary badge" type="button" data-toggle="modal" data-target="#user-form-modal">Edit</button> */}
                                    <button className="bg-danger" type="submit" onClick={() => handleSubmit(data.id) }> Huỷ</button>
                                    <button class="btn btn-sm btn-outline-secondary badge" type="submit"  onClick={() => handleOrderDetail(data.id)}>Submit</button>
                                </div>
                              </td>
                            </tr>
                                );
                            })}

                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
           
            </div>
        
            {/* <!-- User Form Modal --> */}
            <div class="modal fade" role="dialog" tabindex="-1" id="user-form-modal">
              <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Details Profile</h5>
                    <button type="button" class="close" data-dismiss="modal">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div class="modal-body">
                  <form
                            class="contact__form row"
                            // enctype="multipart/form-data"
                        >
                            <div class="col-md-6 border-right">
                                <div class="p-3 py-5">
                                    <div class="d-flex justify-content-between align-items-center mb-3">
                                        <h4 class="text-right">
                                            Profile Settings
                                        </h4>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-md-6">
                                            <label class="labels">
                                                Full Name
                                            </label>
                                            <input
                                                name="Fullname"
                                                id="fullname"
                                                value={text.fullname}
                                               
                                                type="text"
                                                class="form-control"
                                                placeholder={text.fullname}
                                            />
                                        </div>
                                        <div class="col-md-6">
                                            <label class="labels">
                                                Number Phone
                                            </label>
                                            <input
                                                name="Number"
                                                id="number"
                                                value={text.number}
                                                type="number"
                                                class="form-control"
                                                placeholder={text.number}
                                            />
                                        </div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-md-6">
                                            <label class="labels">Age</label>
                                            <input
                                                name="age"
                                                id="age"
                                                type="text"
                                                class="form-control"
                                                placeholder={text.age}
                                            />
                                        </div>
                                        <div class="col-md-6">
                                            <label class="labels">
                                                DateOfBirth
                                            </label>
                                            <input
                                                name="dateOfBirth"
                                                type="text"
                                                class="form-control"
                                                placeholder={text.dateOfBirth}
                                            />
                                        </div>
                                        <div class="col-md-12">
                                           
                                            <label className="labels">
                                                Gender
                                            </label>
                                            <input
                                                    name="email"
                                                    type="text"
                                                    class="form-control"
                                                    placeholder={text.gender}
                                                />
                                            </div>
                                           
                                            <div class="col-md-12">
                                                <label class="labels">
                                                    Email
                                                </label>
                                                <input
                                                    name="email"
                                                    type="text"
                                                    class="form-control"
                                                    placeholder={text.email}
                                                />
                                            </div>
                                            <div class="col-md-12">
                                                <label class="labels">
                                                    Address
                                                </label>
                                                <input
                                                    name="address"
                                                    multiple
                                                    id="address"
                                                    type="text"
                                                    class="form-control"
                                                    placeholder={text.address || null}
                                                />
                                            </div>
                                            <div class="col-md-12">
                                                <label class="labels">
                                                    Thumbnail
                                                </label>
                                                <input
                                                    name="thumbnail"
                                                    multiple
                                                    id="thumbnail"
                                                    type="text"
                                                    class="form-control"
                                                    placeholder={text.thumbnail || null}
                                                />
                                            </div>
                                            <div class="col-md-12">
                                                <label class="labels">
                                                    File Cv
                                                </label>
                                                <input
                                                    name="fileCv"
                                                    multiple
                                                    id="fileCv"
                                                   
                                                    type="text"
                                                    class="form-control"
                                                    placeholder={text.fileCv || null}
                                                />
                                            </div>
                                            <div class="col-md-12">
                                                <label class="labels">
                                                    Skills
                                                </label>
                                                <input
                                                    name="skills"
                                                    id="skills"
                                                    value={text.skills}
                                                    
                                                    type="text"
                                                    class="form-control"
                                                    placeholder={text.skills}
                                                />
                                            </div>
                                            <div class="col-md-12">
                                                <label class="labels">
                                                    WorkExperiences
                                                </label>
                                                <input
                                                type="text"
                                                class="form-control"
                                                name="workExperiences"
                                                value={text.workExperiences}
                                               
                                                id="issuedDate"
                                                placeholder={text.workExperiences}
                                            />
                                            </div>
                                            <div class="col-md-12">
                                                <label class="labels">
                                                    Link Contact
                                                </label>
                                                <input
                                                    name="reference"
                                                    value={text.reference}
                                                  
                                                    id="reference"
                                                    type="text"
                                                    class="form-control"
                                                    placeholder={text.reference}
                                                />
                                            </div>
                                        </div>

                                    <div class="mt-5 text-center">
                                        <button
                                            class="btn btn-primary profile-button"
                                            type="submit"
                                        >
                                            Save Profile
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class=" py-5">
                                    <div class="d-flex justify-content-between align-items-center mb-3">
                                        <h4 class="text-right">School</h4>
                                    </div>

                                    <div class="col-md-12">
                                        <label class="labels">
                                            University Or College
                                        </label>
                                        <input
                                                type="text"
                                                class="form-control"
                                                name="issuedDate"
                                                value={text.universityOrCollege}
                                               
                                                id="universityOrCollege"
                                                placeholder={text.universityOrCollege}
                                            />
                                       
                                    </div>

                                    <div class="row mt-2">
                                        <div class="col-md-6">
                                            <label class="labels">
                                                IssuedDate
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                name="issuedDate"
                                                value={text.issuedDate}
                                               
                                                id="issuedDate"
                                                placeholder={text.issuedDate}
                                            />
                                        </div>
                                        <div class="col-md-6">
                                            <label class="labels">
                                                ExpiryDate
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                name="expiryDate"
                                                value={text.expiryDate}
                                                
                                                id="expiryDate"
                                                placeholder={text.expiryDate}
                                            />
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <label class="labels">Major</label>
                                        <input
                                                    name="major"
                                                    value={text.major}
                                                  
                                                    id="major"
                                                    type="text"
                                                    class="form-control"
                                                    placeholder={text.major}
                                                />
                                    </div>

                                    <div class="col-md-12">
                                        <label class="labels">
                                            ScientificAchievements
                                        </label>
                                        <input
                                            name="scientificAchievements"
                                            value={text.scientificAchievements}
                                            
                                            id="reference"
                                            type="text"
                                            class="form-control"
                                            placeholder={text.scientificAchievements}
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
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

export default  GetCv;
