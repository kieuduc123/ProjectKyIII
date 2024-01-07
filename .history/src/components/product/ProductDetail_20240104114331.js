import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import url from "sever/url";
import Api from "sever/Api";
import { productDetail } from "sever/service";

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(
        { tabletP: {} },
        { liquidP: {} },
        { ['Capsule/Encapsulation']: {} }
    );

    useEffect(() => {
        const ProductDetailId = async (id) => {
            try {
                const res = await productDetail(id);
                setProduct(res.data);
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        };
        ProductDetailId(id);
    }, [id]);

    return (
        <div>
            <section class="page-title bg-1">
                <div class="overlay"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="block text-center">
                                <span class="text-white">
                                    Department Details
                                </span>
                                <h1 class="text-capitalize mb-5 text-lg">
                                    Single Department
                                </h1>
                                {/* 
          <!-- <ul class="list-inline breadcumb-nav">
            <li class="list-inline-item"><a href="index.html" class="text-white">Home</a></li>
            <li class="list-inline-item"><span class="text-white">/</span></li>
            <li class="list-inline-item"><a href="#" class="text-white-50">Department Details</a></li>
          </ul>
           --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section department-single">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="department-img">
                                <img
                                    src={product.thumbnail}
                                    alt=""
                                    class="img-fluid"
                                />
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-8">
                            <div class="department-content mt-5">
                                <h3 class="text-md">{product.productName}</h3>
                                <div class="divider my-4"></div>
                                <p class="lead">{product.title}</p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Cum recusandae dolor autem
                                    laudantium, quaerat vel dignissimos. Magnam
                                    sint suscipit omnis eaque unde eos aliquam
                                    distinctio, quisquam iste, itaque possimus .
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Eveniet alias modi eaque,
                                    ratione recusandae cupiditate dolorum
                                    repellendus iure eius rerum hic minus ipsa
                                    at, corporis nesciunt tempore vero voluptas.
                                    Tempore.
                                </p>

                                <h3 class="mt-5 mb-4">Services features</h3>
                                <div class="divider my-4"></div>
                                <ul class="list-unstyled department-service">
                                    {product && product.tabletP ? (
                                        <>
                                            <li>
                                                <i className="icofont-check mr-2"></i>
                                                {product.tabletP.modelNumber}
                                            </li>
                                            <li>
                                                <i className="icofont-check mr-2"></i>
                                                {product.tabletP.dies}
                                            </li>
                                            <li>
                                                <i className="icofont-check mr-2"></i>
                                                {product.tabletP.maxPressure}
                                            </li>
                                            <li>
                                                <i className="icofont-check mr-2"></i>
                                                {
                                                    product.tabletP
                                                        .maxDiameterOfTablet
                                                }
                                            </li>
                                            <li>
                                                <i className="icofont-check mr-2"></i>
                                                {product.tabletP.maxDepthOfFill}
                                            </li>
                                            <li>
                                                <i className="icofont-check mr-2"></i>
                                                {
                                                    product.tabletP
                                                        .productionCapacity
                                                }
                                            </li>
                                        </>
                                    ) : product && product.liquidP ? (
                                        <>
                                            <li>
                                                <i className="icofont-check mr-2"></i>
                                                {product.liquidP.liquidP}
                                            </li>
                                            <li>
                                                <i className="icofont-check mr-2"></i>
                                                {product.liquidP.airVolume}
                                            </li>
                                            <li>
                                                <i className="icofont-check mr-2"></i>
                                                {product.liquidP.fillingSpeed}
                                            </li>
                                            <li>
                                                <i className="icofont-check mr-2"></i>
                                                {product.liquidP.fillingRange}
                                            </li>
                                        </>
                                    ) : product && product.Capsule ? (
                                        <>
                                            <li>
                                                <i className="icofont-check mr-2"></i>
                                                {product.Capsule.capsuleP.capsuleSize}
                                            </li>
                                            <li>
                                                <i className="icofont-check mr-2"></i>
                                                {product.Capsule.capsuleP.machineDimension}
                                            </li>
                                            <li>
                                                <i className="icofont-check mr-2"></i>
                                                {product.Capsule.fillingSpeed}
                                            </li>
                                            <li>
                                                <i className="icofont-check mr-2"></i>
                                                {product.Capsule.fillingRange}
                                            </li>
                                        </>
                                    ) : null}
                                </ul>

                                <a
                                    href="appoinment.html"
                                    class="btn btn-main-2 btn-round-full"
                                >
                                    Make an Appoinment
                                    <i class="icofont-simple-right ml-2  "></i>
                                </a>
                            </div>
                        </div>

                        <div class="col-lg-4">
                            <div class="sidebar-widget schedule-widget mt-5">
                                <h5 class="mb-4">Time Schedule</h5>

                                <ul class="list-unstyled">
                                    <li class="d-flex justify-content-between align-items-center">
                                        <span>Monday - Friday</span>
                                        <span>9:00 - 17:00</span>
                                    </li>
                                    <li class="d-flex justify-content-between align-items-center">
                                        <span>Saturday</span>
                                        <span>9:00 - 16:00</span>
                                    </li>
                                    <li class="d-flex justify-content-between align-items-center">
                                        <span>Sunday</span>
                                        <span>Closed</span>
                                    </li>
                                </ul>

                                <div class="sidebar-contatct-info mt-4">
                                    <p class="mb-0">Need Urgent Help?</p>
                                    <h3>+23-4565-65768</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="py-5">
  <div class="container">
    <div class="row gx-5">
      <aside class="col-lg-6">
        <div class="border rounded-4 mb-3 d-flex justify-content-center">
          <a data-fslightbox="mygalley" class="rounded-4" target="_blank" data-type="image" href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big.webp">
            <img style={{
      maxWidth: "100%",
      maxHeight: "100vh",
      margin: "auto"
    }} class="rounded-4 fit" alt="" src={product.thumbnail} />
          </a>
        </div>
        {/* <div class="d-flex justify-content-center mb-3">
          <a data-fslightbox="mygalley" class="border mx-1 rounded-2" target="_blank" data-type="image" href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big1.webp" class="item-thumb">
            <img width="60" height="60" class="rounded-2" src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big1.webp" />
          </a>
          <a data-fslightbox="mygalley" class="border mx-1 rounded-2" target="_blank" data-type="image" href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big2.webp" class="item-thumb">
            <img width="60" height="60" class="rounded-2" src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big2.webp" />
          </a>
          <a data-fslightbox="mygalley" class="border mx-1 rounded-2" target="_blank" data-type="image" href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big3.webp" class="item-thumb">
            <img width="60" height="60" class="rounded-2" src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big3.webp" />
          </a>
          <a data-fslightbox="mygalley" class="border mx-1 rounded-2" target="_blank" data-type="image" href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big4.webp" class="item-thumb">
            <img width="60" height="60" class="rounded-2" src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big4.webp" />
          </a>
          <a data-fslightbox="mygalley" class="border mx-1 rounded-2" target="_blank" data-type="image" href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big.webp" class="item-thumb">
            <img width="60" height="60" class="rounded-2" src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big.webp" />
          </a>
        </div> */}
      
      </aside>
      <main class="col-lg-6">
        <div class="ps-lg-3">
          <h4 class="title text-dark">
          {product.productName}
          </h4>
          <div class="d-flex flex-row my-3">
            <div class="text-warning mb-1 me-2">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
              <span class="ms-1">
                4.5
              </span>
            </div>
            <span class="text-muted"><i class="fas fa-shopping-basket fa-sm mx-1"></i>154 orders</span>
            <span class="text-success ms-2">In stock</span>
          </div>

          <p>
        Title:  {product.title}
          </p>

        

          <hr />

        
        </div>
      </main>
    </div>
  </div>
</section>


<section class="bg-light border-top py-4">
  <div class="container">
    <div class="row gx-4">
      <div class="col-lg-7 mb-4">
        <div class="border rounded-2 px-3 py-2 bg-white">
          <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
            <li class="nav-item d-flex" role="presentation">
              <a class="nav-link d-flex align-items-center justify-content-center w-100 active" id="ex1-tab-1" data-mdb-toggle="pill" href="#ex1-pills-1" role="tab" aria-controls="ex1-pills-1" aria-selected="true">Specification</a>
            </li>
          </ul>


          <div class="tab-content" id="ex1-content">
            <div class="tab-pane fade show active" id="ex1-pills-1" role="tabpanel" aria-labelledby="ex1-tab-1">
              <p>
                With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur.
              </p>
              <table class="table border mt-3 mb-2">
                <tr>
                  <th class="py-2">Display:</th>
                  <td class="py-2">13.3-inch LED-backlit display with IPS</td>
                </tr>
                <tr>
                  <th class="py-2">Processor capacity:</th>
                  <td class="py-2">2.3GHz dual-core Intel Core i5</td>
                </tr>
                <tr>
                  <th class="py-2">Camera quality:</th>
                  <td class="py-2">720p FaceTime HD camera</td>
                </tr>
                <tr>
                  <th class="py-2">Memory</th>
                  <td class="py-2">8 GB RAM or 16 GB RAM</td>
                </tr>
                <tr>
                  <th class="py-2">Graphics</th>
                  <td class="py-2">Intel Iris Plus Graphics 640</td>
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

Model CFM500 CFM800 CFM1200
No. of die orifice: 4 6 9
Max output (capsules/hour): 30000 48000 72000
Vacuum: 27 m³/h -0.02～0.08Mpa
Capsule number: No. 00-5
Filling percentage: ≥99.9﹪
Filling difference: ＜±3
Idle load noise dB(A): ＜70
Machine power: 380V 50HZ 3KW
Machine dimension: 800x750x1950mm
Machine weight: 850KG</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>







        </div>
    );
};

export default ProductDetail;
