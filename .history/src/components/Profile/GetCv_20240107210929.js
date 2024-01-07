// import axios from 'axios';
import React, { useEffect, useState } from "react";
import { orderCannel, orderHistory } from "sever/service";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";
const GetCv = () => {
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const [text, setText] = useState("");
    const [order,setOrder] = useState("");
    const [cancelReason, setCancelReason] = useState(); 
    const [selectedOrderId, setSelectedOrderId] = useState(null);

    const accessToken = localStorage.getItem("currentUser");

    const handleClose = () => {
        setSelectedOrderId(null);
        setShow(false);
    };
    const handleShow = (orderId) => {
        setSelectedOrderId(orderId);
        setShow(true);
    };
   
    
    const orderId = selectedOrderId;
//ly do huy don hang
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
                console.log("handleOrderDetail",rs);
            } else if (rs.data.status === 401 || rs.data.status === 403 || rs.data.status === 404 ) {
                toast.warning(rs.data.statusMessage);
            } 
        }   catch(error) {
           toast.error("Thất Bại")
        }
    };

    const idCandidate = JSON.parse(localStorage.getItem("profile"));
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

    useEffect(() => {
        getProfile();
    }, []);

    // if (!data || data.length === 0) {
    //     return (
    //         <>
    //            <div>
    //         <div className="container contact">
    //             <div className="row">
    //                 <div className="col table-responsive">
    //                     <table className="table table-striped table-border-less text-center">
    //                         <thead>
    //                             <tr className="text-center">
    //                                 <th scope="col">Order Date</th>
    //                                 <th scope="col ">Order Number</th>
    //                                 <th scope="col">Total</th>
    //                                 <th scope="col">Status</th>
    //                                 <th scope="col">Shipping</th>
    //                                 <th scope="col" className="text-center ">
    //                                     Huỷ
    //                                 </th>
    //                                 <th scope="col" className="text-center ">
    //                                     Xác Nhận
    //                                 </th>
    //                             </tr>
    //                         </thead>
    //                         <tbody>
    //                                     <tr className="text-center">
    //                                         <td>0</td>
    //                                         <td>0</td>
    //                                         <td>0</td>
    //                                         <td>0</td>
    //                                         <td>0</td>
    //                                         <td>
    //                                             <button  className="bg-danger" onClick={() => handleShow(data.id)    }>     Huỷ
    //                                             </button>

    //                                             <Modal
    //                                                 show={show}
    //                                                 onHide={handleClose}
    //                                             >
    //                                                 <Modal.Header
    //                                                     closeButton
    //                                                 ></Modal.Header>
    //                                                 <Modal.Body>
    //                                                     <Form
    //                                                         onSubmit={
    //                                                             handleSubmit
    //                                                         }
    //                                                     >
    //                                                         <Form.Group
    //                                                             className="mb-3"
    //                                                             controlId="exampleForm.ControlInput1"
    //                                                         >
    //                                                             <Form.Label>
    //                                                                 Lí Do Huỷ
    //                                                             </Form.Label>

    //                                                             <Form.Control
    //                                                                 // type="text"
    //                                                                 // value={cancelReason}
    //                                                                 name="reason_cancel"
    //                                                                 placeholder="Lí Do Huỷ"
    //                                                                 onChange={(e) => setCancelReason(e.target.value)}
    //                                                                 autoFocus
    //                                                             />
    //                                                         </Form.Group>
    //                                                         <Form.Group
    //                                                             className="mb-3"
    //                                                             controlId="exampleForm.ControlTextarea1"
    //                                                         ></Form.Group>

    //                                                         <Modal.Footer>
    //                                                             <Button
    //                                                                 variant="secondary"
    //                                                                 onClick={
    //                                                                     handleClose
    //                                                                 }
    //                                                             >
    //                                                                 Close
    //                                                             </Button>
    //                                                             <Button
    //                                                                 variant="primary"
    //                                                                 type="submit"
    //                                                                 onSubmit={
    //                                                                     handleSubmit
    //                                                                 }
    //                                                             >
    //                                                                 Save Changes
    //                                                             </Button>
    //                                                         </Modal.Footer>
    //                                                     </Form>
    //                                                 </Modal.Body>
    //                                             </Modal>
    //                                         </td>
    //                                         <td>
    //                                             <Button type="submit"  onClick={() => handleOrderDetail(data.id)    } className="bg-primary">Đã Nhận Hàng </Button>
    //                                         </td>
    //                                     </tr>
                           
                            
    //                         </tbody>
    //                     </table>
    //                 </div>
    //             </div>
    //         </div>
    //         <nav
    //             id="sidebarMenu"
    //             className="collapse d-lg-block sidebar collapse bg-white"
    //         >
    //             <div className="position-sticky">
    //                 <div className="list-group list-group-flush mx-3 mt-4">
    //                     <a
    //                         href="/orderhistory"
    //                         className="list-group-item list-group-item-action py-2 ripple active"
    //                     >
    //                         <i className="fas fa-chart-area fa-fw me-3"></i>
    //                         <span>Order History</span>
    //                     </a>
    //                     <a
    //                         href="/order-status"
    //                         className="list-group-item list-group-item-action py-2 ripple "
    //                         aria-current="true"
    //                     >
    //                         <i className="fas fa-tachometer-alt fa-fw me-3 active "></i>
    //                         <span>Order Status</span>
    //                     </a>
    //                 </div>
    //             </div>
    //         </nav>
    //     </div>
    //            </>   
    //     );
    // }

    return (
        <div>
            <div class="container product">
        <div class="row flex-lg-nowrap">
          <div class="col-12 col-lg-auto mb-3" style={{width: "200px"}}>
            <div class="card p-3">
              <div class="e-navlist e-navlist--active-bg">
                <ul class="nav">
                  <li class="nav-item text-black"><a class="nav-link px-2 " href="#"><span className="text-black">Status</span></a></li>
                  <li class="nav-item pl-3">
                    <NavLink  class="nav-link px-2" onClick={() => getProfile('EDIT')}>
                       <span  >Edit</span></NavLink></li>
                  <li class="nav-item pl-2">
                    <NavLink class="nav-link px-3" onClick={() => getProfile('SUBMITTED')} ><span>Submitted</span></NavLink></li>
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
                              <th> isAccepted</th>
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
                                            <td class="text-nowrap align-middle">{data.status}</td> 
                                            <td class="text-nowrap align-middle">{data.isAccepted}</td> 
                              <td class="text-center align-middle">
                                <div class="btn-group align-top">
                                    <button class="btn btn-sm btn-outline-secondary badge" type="button" data-toggle="modal" data-target="#user-form-modal">Edit</button>
                                    <button
                                                   className="bg-danger" type="submit" onClick={() => handleSubmit(data.id) }
                                                >
                                                    Huỷ
                                                </button>
                                    <button class="btn btn-sm btn-outline-secondary badge" type="submit"  onClick={() => handleOrderDetail(data.id)}>Submit</button>
                                </div>
                              </td>
                            </tr>
                                );
                            })}

                          </tbody>
                        </table>
                      </div>
                      {/* <div class="d-flex justify-content-center">
                        <ul class="pagination mt-3 mb-0">
                          <li class="disabled page-item"><a href="#" class="page-link">‹</a></li>
                          <li class="active page-item"><a href="#" class="page-link">1</a></li>
                          <li class="page-item"><a href="#" class="page-link">2</a></li>
                          <li class="page-item"><a href="#" class="page-link">3</a></li>
                          <li class="page-item"><a href="#" class="page-link">4</a></li>
                          <li class="page-item"><a href="#" class="page-link">5</a></li>
                          <li class="page-item"><a href="#" class="page-link">›</a></li>
                          <li class="page-item"><a href="#" class="page-link">»</a></li>
                        </ul>
                      </div> */}
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
                    <h5 class="modal-title">Create User</h5>
                    <button type="button" class="close" data-dismiss="modal">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <div class="py-1">
                      <form class="form" novalidate="">
                        <div class="row">
                          <div class="col">
                            <div class="row">
                              <div class="col">
                                <div class="form-group">
                                  <label>Full Name</label>
                                  <input class="form-control" type="text" name="name" placeholder="John Smith" value="John Smith"/>
                                </div>
                              </div>
                              <div class="col">
                                <div class="form-group">
                                  <label>Username</label>
                                  <input class="form-control" type="text" name="username" placeholder="johnny.s" value="johnny.s"/>
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col">
                                <div class="form-group">
                                  <label>Email</label>
                                  <input class="form-control" type="text" placeholder="user@example.com"/>
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col mb-3">
                                <div class="form-group">
                                  <label>About</label>
                                  <textarea class="form-control" rows="5" placeholder="My Bio"></textarea>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-12 col-sm-6 mb-3">
                            <div class="mb-2"><b>Change Password</b></div>
                            <div class="row">
                              <div class="col">
                                <div class="form-group">
                                  <label>Current Password</label>
                                  <input class="form-control" type="password" placeholder="••••••"/>
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col">
                                <div class="form-group">
                                  <label>New Password</label>
                                  <input class="form-control" type="password" placeholder="••••••"/>
                                </div>
                              </div>
                              <div class="col">
                                <div class="form-group">
                                  <label>Confirm <span class="d-none d-xl-inline">Password</span></label>
                                  <input class="form-control" type="password" placeholder="••••••"/></div>
                              </div>
                            </div>
                          </div>
                          <div class="col-12 col-sm-5 offset-sm-1 mb-3">
                            <div class="mb-2"><b>Keeping in Touch</b></div>
                            <div class="row">
                              <div class="col">
                                <label>Email Notifications</label>
                                <div class="custom-controls-stacked px-2">
                                  <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="notifications-blog" checked=""/>
                                    <label class="custom-control-label" for="notifications-blog">Blog posts</label>
                                  </div>
                                  <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="notifications-news" checked=""/>
                                    <label class="custom-control-label" for="notifications-news">Newsletter</label>
                                  </div>
                                  <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="notifications-offers" checked=""/>
                                    <label class="custom-control-label" for="notifications-offers">Personal Offers</label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col d-flex justify-content-end">
                            <button class="btn btn-primary" type="submit">Save Changes</button>
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
       
        </div>
        
    );
};

export default  GetCv;
