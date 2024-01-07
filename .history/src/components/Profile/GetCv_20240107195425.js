// import axios from 'axios';
import React, { useEffect, useState } from "react";
import { orderCannel, orderHistory } from "sever/service";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { toast } from "react-toastify";
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
            if (rs?.data) {
                toast.success("Thành công");;
                 setText(rs);
                 console.log("Cancel",rs);
           
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
            if(rs?.data){
                toast.success("Thành Công");
                setOrder(rs);
                console.log("handleOrderDetail",rs)
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
        getProfile("EDIT");
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
            <div className="container contact product">
                <div className="row ">
                    <div className="col table-responsive">
                        <table className="table table-striped table-border-less text-center">
                            <thead>
                                <tr className="text-center">
                                    <th scope="col">Order Date</th>
                                    <th scope="col ">Order Number</th>
                                    <th scope="col">Total</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Shipping</th>
                                    <th scope="col" className="text-center ">
                                        Huỷ
                                    </th>
                                    <th scope="col" className="text-center ">
                                        Xác Nhận
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.length >= 0  &&
                                data.map((data, i) => {
                                    return (
                                        <tr className="text-center" key={i}>
                                            <td>${data.id}</td>
                                            <td>{data.email}</td>
                                            <td>{data.fullname}</td>
                                            <td>{data.number}</td>
                                            <td>{data.status}</td>
                                            <td>
                                                <Button
                                                   className="bg-danger" type="submit" onClick={() => handleSubmit(data.id) }
                                                >
                                                    Huỷ
                                                </Button>
                                            </td>
                                            <td>
                                                <Button type="submit"  onClick={() => handleOrderDetail(data.id)    } className="bg-primary">SUCCESS </Button>
                                            </td>
                                        </tr>
                                    );
                                })}

                            </tbody>
                        </table><div>
                                <button onClick={() => getProfile('EDIT')}>Get Edit Profile</button>
                                <button onClick={() => getProfile('SUBMITTED')}>Get Submit Profile</button>
    </div>

                    </div>
                </div>
            </div>
         
        </div>
        
    );
};

export default  GetCv;
