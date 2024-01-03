import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import url from 'sever/url';
import Api from "sever/Api"
import { productDetail } from 'sever/service';

const ProductDetail = () => {

const {id} = useParams();
const [product, setProduct] = useState(
    {tabletP: {}},
    {liquidP : {}},
);


useEffect(() => {
    const ProductDetailId = async(id) => {
        try {
            const res = await productDetail(id);
            // const res = await Api.get(url.PRODUCT.DETAIL
            //     +`?idProduct=${id}`);
            setProduct(res.data)
            console.log(res);
        }
        catch(error) {
            console.log(error);
        }
    }
    ProductDetailId(id);

},[id])



    return (
        <div>
            <section class="page-title bg-1">
  <div class="overlay"></div>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="block text-center">
          <span class="text-white">Department Details</span>
          <h1 class="text-capitalize mb-5 text-lg">Single Department</h1>
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
					<img src={product.thumbnail} alt="" class="img-fluid"/>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-lg-8">
				<div class="department-content mt-5">
					<h3 class="text-md">{product.productName}</h3>
					<div class="divider my-4"></div>
					<p class="lead">{product.title}</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum recusandae dolor autem laudantium, quaerat vel dignissimos. Magnam sint suscipit omnis eaque unde eos aliquam distinctio, quisquam iste, itaque possimus . Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet alias modi eaque, ratione recusandae cupiditate dolorum repellendus iure eius rerum hic minus ipsa at, corporis nesciunt tempore vero voluptas. Tempore.</p>


					<h3 class="mt-5 mb-4">Services features</h3>
					<div class="divider my-4"></div>
					<ul class="list-unstyled department-service">
                    {
  product ? (
    <div>
      <li><i class="icofont-check mr-2"></i>{product.tabletP.modelNumber}</li>
      <li><i class="icofont-check mr-2"></i>{product.tabletP.dies}</li>
      <li><i class="icofont-check mr-2"></i>{product.tabletP.maxPressure}</li>
      <li><i class="icofont-check mr-2"></i>{product.tabletP.maxDiameterOfTablet}</li>
      <li><i class="icofont-check mr-2"></i>{product.tabletP.maxDepthOfFill}</li>
      <li><i class="icofont-check mr-2"></i>{product.tabletP.productionCapacity}</li>
    </div>
  ) : (
    <div>
      <li><i class="icofont-check mr-2"></i>{product.liquidP.liquidP}</li>
      <li><i class="icofont-check mr-2"></i>{product.liquidP.airVolume}</li>
      <li><i class="icofont-check mr-2"></i>{product.liquidP.fillingSpeed}</li>
      <li><i class="icofont-check mr-2"></i>{product.liquidP.fillingRange}</li>
    </div>
  )
}

					</ul>

					<a href="appoinment.html" class="btn btn-main-2 btn-round-full">Make an Appoinment<i class="icofont-simple-right ml-2  "></i></a>
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

        </div>
    );
};

export default ProductDetail;