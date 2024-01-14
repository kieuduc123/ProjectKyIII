import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import url from "sever/url";
// import Api from "sever/Api";
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
          <h4 class=" text-dark">
          {product.productName}
          </h4>
          <h6>Sold by:</h6>
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
        </div>
    );
};

export default ProductDetail;
