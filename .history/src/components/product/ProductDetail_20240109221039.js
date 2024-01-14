import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
// import url from "sever/url";
// import Api from "sever/Api";
import ProductRelated from "./ProductRelated";
import { productDetail } from "sever/service";

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
      // Capsule_Encapsulation: {
      //   title:"Capsule/Encapsulation",
      //   value:""
      // }
        const ProductDetailId = async (id) => {
            try {
                const res = await productDetail(id);
                setProduct(res.data);
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        };       
        useEffect(() => {
            ProductDetailId(id);

          
    }, [id]);

    return (
      <div>
      {product && (
        <div>


            <section class="py-5 category-filter">
  <div class="container">
    <div class="row gx-5">
      <aside class="col-lg-6">
        <div class="border rounded-4 mb-3 d-flex justify-content-center">
         
            <img style={{
      maxWidth: "100%",
      maxHeight: "100vh",
      margin: "auto"
    }} class="rounded-4 fit" alt="" src={product.thumbnail} />
        </div>
      
      </aside>
      <main class="col-lg-6 border border rounded-2 shadow-0 px-3 pt-3">
        <div class="ps-lg-3">
          <h4 class="text-drank">
          {product.productName}
          </h4>
          <h6 className="text-muted">Sold by:</h6>
          <h3 className="text-secondary">Jornen Pharmacuticals Co., Ltd</h3>
          <p>
        Title:  {product.title}
          </p>
        
        </div>
      </main>
    </div>
  </div>
</section>


<section class="bg-light border-top py-4">
  <div class="container">
   {/* Hiển thị thông tin sản phẩm */}
   
        <div>
          {/* Nội dung dựa trên giá trị của cateId */}
          {product.cateId === 3 && (
            <div class="row gx-4">
            <div class="col-lg-7 mb-4">
              <div class="border rounded-2 px-3 py-2 bg-white">
                <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                  <li class="nav-item d-flex" role="presentation">
                    <a class="nav-link d-flex align-items-center justify-content-center w-100 active" id="ex1-tab-1" data-mdb-toggle="pill" href="#ex1-pills-1" role="tab" aria-controls="ex1-pills-1" aria-selected="true">Detail</a>
                  </li>
                </ul>
      
                <div class="" id="ex1-content">
                  <div class="tab-pane fade show active" id="ex1-pills-1" role="tabpanel" aria-labelledby="ex1-tab-1">
                    <p>
                      With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                      enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur.
                    </p>
                    <table class="table border mt-3 mb-2">
                      <tr>
                        <th  class="w-25 py-2"> Model Number:</th>
                        <td class="py-2">{product.tabletP.modelNumber}S</td>
                      </tr>
                      <tr>
                        <th class="w-25 py-2">Dies :</th>
                        <td class="py-2">  {product.tabletP.dies}</td>
                      </tr>
                      <tr>
                        <th class="w-25 py-2">Max Pressure :</th>
                        <td class="py-2"> {product.tabletP.maxPressure}</td>
                      </tr>
                      <tr>
                        <th class="w-25 py-2">Memory :</th>
                        <td class="py-2"> {product.tabletP.maxDiameterOfTablet
                                                      }</td>
                      </tr>
                      <tr>
                        <th class="w-25 py-2">Max DepthOfFill :</th>
                        <td class="py-2"> {product.tabletP.maxDepthOfFill}</td>
                      </tr>
                      <tr>
                        <th class="w-25 py-2">Production Capacity :</th>
                        <td class="py-2">  { product.tabletP.productionCapacity }</td>
                      </tr>
                      <tr>
                        <th class="w-25 py-2">Machine Size :</th>
                        <td class="py-2">  { product.tabletP.machineSize }</td>
                      </tr>
                      <tr>
                        <th class="w-25 py-2">Net Weight :</th>
                        <td class="py-2">  { product.tabletP.netWeight }</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="px-0 border rounded-2 shadow-0">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">DESCRIPTION</h5>
                  <p>This series of Capsule fillling Machines adopts a programmable control system, touch screen panel, speed-shift and electronic automatic counter.
      Fully automatic, it can complete the actions of position, separation, filling and locking of capsules. All models are machined by advanced high precision CNC tooling machines that guarantee reliable interchangeability of different capsule models.
      It is suitable for conventional pharmaceutical products such as powder, pellets, granules, as well as for nutriceutical products such as herbs, vitamins or even special products with sticky, abrasive, fibrous or other properties. This space-saving machine provides a straightforward operation, format changeover and dosage accuracy.
      </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          )}
          {product.cateId === 2 && (
            <div class="row gx-4">
            <div class="col-lg-7 mb-4">
              <div class="border rounded-2 px-3 py-2 bg-white">
                <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                  <li class="nav-item d-flex" role="presentation">
                    <a class="nav-link d-flex align-items-center justify-content-center w-100 active" id="ex1-tab-1" data-mdb-toggle="pill" href="#ex1-pills-1" role="tab" aria-controls="ex1-pills-1" aria-selected="true">Specification</a>
                  </li>
                </ul>
      
                <div class="" id="ex1-content">
                  <div class="tab-pane fade show active" id="ex1-pills-1" role="tabpanel" aria-labelledby="ex1-tab-1">
                    <p>
                      With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                      enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur.
                    </p>
                    <table class="table border mt-3 mb-2">
                      <tr>
                        <th class="w-25 py-2">Air Pressure:</th>
                        <td class="py-2">   {product.liquidP.airPressure}</td>
                      </tr>
                      <tr>
                        <th class="w-25 py-2">Air Volume:</th>
                        <td class="py-2">{product.liquidP.airVolume}</td>
                      </tr>
                      <tr>
                        <th class="w-25 py-2">Filling Speed</th>
                        <td class="py-2">  {product.liquidP.fillingSpeed}</td>
                      </tr>
                      <tr>
                        <th class="w-25 py-2">FillingRange</th>
                        <td class="py-2"> {product.liquidP.fillingRange}</td>
                      </tr>  
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="px-0 border rounded-2 shadow-0">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">DESCRIPTION</h5>
                  <p>This series of Capsule fillling Machines adopts a programmable control system, touch screen panel, speed-shift and electronic automatic counter.
      Fully automatic, it can complete the actions of position, separation, filling and locking of capsules. All models are machined by advanced high precision CNC tooling machines that guarantee reliable interchangeability of different capsule models.
      It is suitable for conventional pharmaceutical products such as powder, pellets, granules, as well as for nutriceutical products such as herbs, vitamins or even special products with sticky, abrasive, fibrous or other properties. This space-saving machine provides a straightforward operation, format changeover and dosage accuracy.
      </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          )}
          {product.cateId === 1 && (
              <div class="row gx-4">
              <div class="col-lg-7 mb-4">
                <div class="border rounded-2 px-3 py-2 bg-white">
                  <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                    <li class="nav-item d-flex" role="presentation">
                      <a class="nav-link d-flex align-items-center justify-content-center w-100 active" id="ex1-tab-1" data-mdb-toggle="pill" href="#ex1-pills-1" role="tab" aria-controls="ex1-pills-1" aria-selected="true">Specification</a>
                    </li>
                  </ul>
        
                  <div class="" id="ex1-content">
                    <div class="tab-pane fade show active" id="ex1-pills-1" role="tabpanel" aria-labelledby="ex1-tab-1">
                      <p>
                        With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur.
                      </p>
                      <table class="table border mt-3 mb-2">
            <tr>
              <th class="w-25 py-2">Capsule Size:</th>
              <td class="py-2">{product.capsuleP.capsuleSize}</td>
            </tr>
            <tr>
              <th class="w-25 py-2">Machine Dimension:</th>
              <td class="py-2">{product.capsuleP.machineDimension}</td>
            </tr>
            <tr>
              <th class="w-25 py-2">Output:</th>
              <td class="py-2">{product.capsuleP.output}</td>
            </tr>
            <tr>
              <th class="w-25 py-2">Shipping Weight:</th>
              <td class="py-2">{product.capsuleP.shippingWeight}</td>
            </tr>  
          </table>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-5">
                <div class="px-0 border rounded-2 shadow-0">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">DESCRIPTION</h5>
                    <p>This series of Capsule fillling Machines adopts a programmable control system, touch screen panel, speed-shift and electronic automatic counter.
        Fully automatic, it can complete the actions of position, separation, filling and locking of capsules. All models are machined by advanced high precision CNC tooling machines that guarantee reliable interchangeability of different capsule models.
        It is suitable for conventional pharmaceutical products such as powder, pellets, granules, as well as for nutriceutical products such as herbs, vitamins or even special products with sticky, abrasive, fibrous or other properties. This space-saving machine provides a straightforward operation, format changeover and dosage accuracy.
        </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        </div>
        </section>
        
        </div>
        )}
          <div className="row g-0">
            {/* <!-- Related Products--> */}
            <div className="col-12" data-aos="fade-up">
              <h3 className="fs-4 fw-bolder mt-7 mb-4">You May Also Like</h3>
              {/* <!-- Swiper Latest --> */}
              {/* <div className="swiper-container"> */}{" "}
              <ProductRelated></ProductRelated>
              {/* <!-- / Swiper Latest--> */}
            </div>

            {/* <!-- Reviews--> */}
            <div className="col-12" data-aos="fade-up">
              <h3 className="fs-4 fw-bolder mt-7 mb-4 reviews">Reviews</h3>

              {/* <!-- Review Summary--> */}
              <div className="bg-light p-5 justify-content-between d-flex flex-column flex-lg-row">
                <div className="d-flex flex-column align-items-center mb-4 mb-lg-0">
                  <div className="bg-dark text-white f-w-24 f-h-24 d-flex rounded-circle align-items-center justify-content-center fs-2 fw-bold mb-3">
                    4.3
                  </div>
                  {/* <!-- Review Stars Medium--> */}
                  <div className="rating position-relative d-table">
                    <div
                      className="position-absolute stars"
                      style={{ width: "88%" }}>
                      <i className="ri-star-fill text-dark ri-2x mr-1"></i>
                      <i className="ri-star-fill text-dark ri-2x mr-1"></i>
                      <i className="ri-star-fill text-dark ri-2x mr-1"></i>
                      <i className="ri-star-fill text-dark ri-2x mr-1"></i>
                      <i className="ri-star-fill text-dark ri-2x mr-1"></i>
                    </div>
                    <div className="stars">
                      <i className="ri-star-fill ri-2x mr-1 text-muted opacity-25"></i>
                      <i className="ri-star-fill ri-2x mr-1 text-muted opacity-25"></i>
                      <i className="ri-star-fill ri-2x mr-1 text-muted opacity-25"></i>
                      <i className="ri-star-fill ri-2x mr-1 text-muted opacity-25"></i>
                      <i className="ri-star-fill ri-2x mr-1 text-muted opacity-25"></i>
                    </div>
                  </div>{" "}
                </div>
                <div className="d-flex flex-grow-1 flex-column ms-lg-8">
                  <div className="d-flex align-items-center justify-content-start mb-2">
                    <div className="f-w-20">
                      {/* <!-- Review Stars Small--> */}
                      <div className="rating position-relative d-table">
                        <div
                          className="position-absolute stars"
                          style={{ width: " 100%" }}>
                          <i className="ri-star-fill text-dark mr-1"></i>
                          <i className="ri-star-fill text-dark mr-1"></i>
                          <i className="ri-star-fill text-dark mr-1"></i>
                          <i className="ri-star-fill text-dark mr-1"></i>
                          <i className="ri-star-fill text-dark mr-1"></i>
                        </div>
                        <div className="stars">
                          <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                          <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                          <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                          <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                          <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                        </div>
                      </div>{" "}
                    </div>
                    <div className="progress d-flex flex-grow-1 mx-4 f-h-1">
                      <div
                        className="progress-bar bg-dark"
                        role="progressbar"
                        style={{ width: " 80%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                    <span className="fw-bold small d-block f-w-4 text-end">
                      55
                    </span>
                  </div>
                  <div className="d-flex align-items-center justify-content-start mb-2">
                    <div className="f-w-20">
                      {/* <!-- Review Stars Small--> */}
                      <div className="rating position-relative d-table">
                        <div
                          className="position-absolute stars"
                          style={{ width: " 80%" }}>
                          <i className="ri-star-fill text-dark mr-1"></i>
                          <i className="ri-star-fill text-dark mr-1"></i>
                          <i className="ri-star-fill text-dark mr-1"></i>
                          <i className="ri-star-fill text-dark mr-1"></i>
                          <i className="ri-star-fill text-dark mr-1"></i>
                        </div>
                        <div className="stars">
                          <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                          <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                          <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                          <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                          <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                        </div>
                      </div>{" "}
                    </div>
                    <div className="progress d-flex flex-grow-1 mx-4 f-h-1">
                      <div
                        className="progress-bar bg-dark"
                        role="progressbar"
                        style={{ width: " 60%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                    <span className="fw-bold small d-block f-w-4 text-end">
                      32
                    </span>
                  </div>
                  <div className="d-flex align-items-center justify-content-start mb-2">
                    <div className="f-w-20">
                      {/* <!-- Review Stars Small--> */}
                      <div className="rating position-relative d-table">
                        <div
                          className="position-absolute stars"
                          style={{ width: " 60%" }}>
                          <i className="ri-star-fill text-dark mr-1"></i>
                          <i className="ri-star-fill text-dark mr-1"></i>
                          <i className="ri-star-fill text-dark mr-1"></i>
                          <i className="ri-star-fill text-dark mr-1"></i>
                          <i className="ri-star-fill text-dark mr-1"></i>
                        </div>
                        <div className="stars">
                          <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                          <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                          <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                          <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                          <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                        </div>
                      </div>{" "}
                    </div>
                    <div className="progress d-flex flex-grow-1 mx-4 f-h-1">
                      <div
                        className="progress-bar bg-dark"
                        role="progressbar"
                        style={{ width: " 30%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                    <span className="fw-bold small d-block f-w-4 text-end">
                      15
                    </span>
                  </div>
                  <div className="d-flex align-items-center justify-content-start mb-2">
                    <div className="f-w-20">
                      {/* <!-- Review Stars Small--> */}
                      <div className="rating position-relative d-table">
                        <div
                          className="position-absolute stars"
                          style={{ width: " 40%" }}>
                          <i className="ri-star-fill text-dark mr-1"></i>
                          <i className="ri-star-fill text-dark mr-1"></i>
                          <i className="ri-star-fill text-dark mr-1"></i>
                          <i className="ri-star-fill text-dark mr-1"></i>
                          <i className="ri-star-fill text-dark mr-1"></i>
                        </div>
                        <div className="stars">
                          <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                          <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                          <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                          <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                          <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                        </div>
                      </div>{" "}
                    </div>
                    <div className="progress d-flex flex-grow-1 mx-4 f-h-1">
                      <div
                        className="progress-bar bg-dark"
                        style={{ width: " 8%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                    <span className="fw-bold small d-block f-w-4 text-end">
                      5
                    </span>
                  </div>
                  <div className="d-flex align-items-center justify-content-start mb-2">
                    <div className="f-w-20">
                      {/* <!-- Review Stars Small--> */}
                      <div className="rating position-relative d-table">
                        <div
                          className="position-absolute stars"
                          style={{ width: " 20%" }}>
                          <i className="ri-star-fill text-dark mr-1"></i>
                          <i className="ri-star-fill text-dark mr-1"></i>
                          <i className="ri-star-fill text-dark mr-1"></i>
                          <i className="ri-star-fill text-dark mr-1"></i>
                          <i className="ri-star-fill text-dark mr-1"></i>
                        </div>
                        <div className="stars">
                          <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                          <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                          <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                          <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                          <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                        </div>
                      </div>{" "}
                    </div>
                    <div className="progress d-flex flex-grow-1 mx-4 f-h-1">
                      <div
                        className="progress-bar bg-dark"
                        style={{ width: " 5%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                    <span className="fw-bold small d-block f-w-4 text-end">
                      1
                    </span>
                  </div>
                  <p className="mt-3 mb-0 d-flex align-items-start">
                    <i className="ri-chat-voice-line me-2"></i> 105 customers
                    have reviewed this product
                  </p>
                </div>
              </div>
              {/* <!-- / Rewview Summary--> */}

              {/* <!-- Reviews--> */}
              <div className="row g-6 g-md-8 g-lg-10 my-3">
                <div className="col-12 col-lg-6 col-xxl-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    {/* <!-- Review Stars Small--> */}
                    <div className="rating position-relative d-table">
                      <div
                        className="position-absolute stars"
                        style={{ width: " 80%" }}>
                        <i className="ri-star-fill text-dark mr-1"></i>
                        <i className="ri-star-fill text-dark mr-1"></i>
                        <i className="ri-star-fill text-dark mr-1"></i>
                        <i className="ri-star-fill text-dark mr-1"></i>
                        <i className="ri-star-fill text-dark mr-1"></i>
                      </div>
                      <div className="stars">
                        <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                        <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                        <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                        <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                        <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                      </div>
                    </div>{" "}
                    <div className="text-muted small">
                      20th September 2020 by DaveD
                    </div>
                  </div>
                  <p className="fw-bold mb-2">Great fit, great price</p>
                  <p className="fs-7">
                    Worth buying this for value for money. But be warned: get
                    one size larger as the medium is closer to small medium!
                  </p>
                </div>
                <div className="col-12 col-lg-6 col-xxl-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    {/* <!-- Review Stars Small--> */}
                    <div className="rating position-relative d-table">
                      <div
                        className="position-absolute stars"
                        style={{ width: " 40%" }}>
                        <i className="ri-star-fill text-dark mr-1"></i>
                        <i className="ri-star-fill text-dark mr-1"></i>
                        <i className="ri-star-fill text-dark mr-1"></i>
                        <i className="ri-star-fill text-dark mr-1"></i>
                        <i className="ri-star-fill text-dark mr-1"></i>
                      </div>
                      <div className="stars">
                        <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                        <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                        <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                        <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                        <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                      </div>
                    </div>{" "}
                    <div className="text-muted small">
                      18th September 2020 by Sandra K
                    </div>
                  </div>
                  <p className="fw-bold mb-2">Not worth the money</p>
                  <p className="fs-7">
                    Loose and poor stiching on the sides. Won&#x27;t buy this
                    again.
                  </p>
                </div>
                <div className="col-12 col-lg-6 col-xxl-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    {/* <!-- Review Stars Small--> */}
                    <div className="rating position-relative d-table">
                      <div
                        className="position-absolute stars"
                        style={{ width: " 90%" }}>
                        <i className="ri-star-fill text-dark mr-1"></i>
                        <i className="ri-star-fill text-dark mr-1"></i>
                        <i className="ri-star-fill text-dark mr-1"></i>
                        <i className="ri-star-fill text-dark mr-1"></i>
                        <i className="ri-star-fill text-dark mr-1"></i>
                      </div>
                      <div className="stars">
                        <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                        <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                        <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                        <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                        <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                      </div>
                    </div>{" "}
                    <div className="text-muted small">
                      16th September 2020 by MikeS
                    </div>
                  </div>
                  <p className="fw-bold mb-2">Decent for the price</p>
                  <p className="fs-7">
                    I buy these often as they are good quality and value for
                    money.
                  </p>
                </div>
                <div className="col-12 col-lg-6 col-xxl-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    {/* <!-- Review Stars Small--> */}
                    <div className="rating position-relative d-table">
                      <div
                        className="position-absolute stars"
                        style={{ width: " 85%" }}>
                        <i className="ri-star-fill text-dark mr-1"></i>
                        <i className="ri-star-fill text-dark mr-1"></i>
                        <i className="ri-star-fill text-dark mr-1"></i>
                        <i className="ri-star-fill text-dark mr-1"></i>
                        <i className="ri-star-fill text-dark mr-1"></i>
                      </div>
                      <div className="stars">
                        <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                        <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                        <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                        <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                        <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                      </div>
                    </div>{" "}
                    <div className="text-muted small">
                      14th September 2020 by Frankie
                    </div>
                  </div>
                  <p className="fw-bold mb-2">Great little T</p>
                  <p className="fs-7">
                    Wore this to my local music festival - went down well.
                  </p>
                </div>
                <div className="col-12 col-lg-6 col-xxl-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    {/* <!-- Review Stars Small--> */}
                    <div className="rating position-relative d-table">
                      <div
                        className="position-absolute stars"
                        style={{ width: " 70%" }}>
                        <i className="ri-star-fill text-dark mr-1"></i>
                        <i className="ri-star-fill text-dark mr-1"></i>
                        <i className="ri-star-fill text-dark mr-1"></i>
                        <i className="ri-star-fill text-dark mr-1"></i>
                        <i className="ri-star-fill text-dark mr-1"></i>
                      </div>
                      <div className="stars">
                        <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                        <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                        <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                        <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                        <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                      </div>
                    </div>{" "}
                    <div className="text-muted small">
                      20th September 2020 by Kevin
                    </div>
                  </div>
                  <p className="fw-bold mb-2">Great for the BBQ</p>
                  <p className="fs-7">
                    Bought this on the off chance it would work well with my
                    skinny jeans, was a great decision. Would recommend.
                  </p>
                </div>
                <div className="col-12 col-lg-6 col-xxl-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    {/* <!-- Review Stars Small--> */}
                    <div className="rating position-relative d-table">
                      <div
                        className="position-absolute stars"
                        style={{ width: " 20%" }}>
                        <i className="ri-star-fill text-dark mr-1"></i>
                        <i className="ri-star-fill text-dark mr-1"></i>
                        <i className="ri-star-fill text-dark mr-1"></i>
                        <i className="ri-star-fill text-dark mr-1"></i>
                        <i className="ri-star-fill text-dark mr-1"></i>
                      </div>
                      <div className="stars">
                        <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                        <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                        <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                        <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                        <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                      </div>
                    </div>{" "}
                    <div className="text-muted small">
                      20th September 2020 by Holly
                    </div>
                  </div>
                  <p className="fw-bold mb-2">
                    Nothing special but it&#x27;s okay
                  </p>
                  <p className="fs-7">
                    It&#x27;s a t-shirt. What can I say, it does the job.
                  </p>
                </div>
              </div>
              {/* <!-- / Reviews--> */}

              {/* <!-- Review Pagination--> */}
              <div className="d-flex flex-column f-w-44 mx-auto my-5 text-center">
                <small className="text-muted">Showing 6 of 105 reviews</small>
                <div className="progress f-h-1 mt-3">
                  <div
                    className="progress-bar bg-dark"
                    role="progressbar"
                    style={{ width: " 25%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"></div>
                </div>
                <NavLink
                  to="#"
                  className="btn btn-outline-dark btn-sm mt-5 align-self-center py-3 px-4 border-2">
                  Load More
                </NavLink>
              </div>
              {/* <!-- / Review Pagination--> */}
            </div>
            {/* <!-- / Reviews--> */}
          </div>
        </div>
    );
};

export default ProductDetail;
