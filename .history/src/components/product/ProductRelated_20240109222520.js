import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
import axios from "axios";

const ProductRelated = () => {
    const { id } = useParams();
    const [related, setRelated] = useState([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const relatedProduct = async () => {
        try {
            const rs = await axios.get(
                `https://pharmacyonline.azurewebsites.net/api/Product/candidate/related?idProduct=${id}`
            );
            console.log("product-related", rs);
            setRelated(rs.data);
        } catch (error) {
            console.log("loi roi");
        }
    };
    useEffect(() => {
        relatedProduct();
    }, [id]);
    return (
        <Swiper
            className="swiper-container overflow-hidden overflow-lg-visible"
            spaceBetween={20}
            slidesPerView={4}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
        >
            <div className="swiper-wrapper">
                        <SwiperSlide key={k}>
                            {/* <!-- Card Product--> */}
                            <div className="container">
                {related.map((i, k) => {
                    return (
                    <div className="product-list" key={k}>
                   
                        <div className="product-item" key={index}>
                            <img  style={{  height: "350px",
                                                        width: "350px",
                                                    }}   src={i.thumbnail} alt=""/> 
                                                    <span >{i.isNew}</span>
                            <div className="my-4"> 
                            <h4 className="text-center">  {i.iName.slice(
                                                        0,
                                                        25
                                                    )}
                                                    .... </h4>
                            <NavLink  to={`/product/${i.id}`} className="product-link"> Details</NavLink>
                            </div>
                        </div>
                    </div>
                );
            })}
                </div>
                            {/* <!--/ Card Product--> */}
                        </SwiperSlide>

                {/* <!--/ Card Product--> */}
            </div>
            <div className="swiper-prev top-50  start-0 z-index-30 cursor-pointer transition-all bg-white px-3 py-4 position-absolute z-index-30 top-50 start-0 mt-n8 d-flex justify-content-center align-items-center opacity-50-hover">
                <i className="ri-arrow-left-s-line ri-lg"></i>
            </div>
            <div className="swiper-next top-50 end-0 z-index-30 cursor-pointer transition-all bg-white px-3 py-4 position-absolute z-index-30 top-50 end-0 mt-n8 d-flex justify-content-center align-items-center opacity-50-hover">
                <i className="ri-arrow-right-s-line ri-lg"></i>
            </div>
        </Swiper>
    );
};

export default ProductRelated;
