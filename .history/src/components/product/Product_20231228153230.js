import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

const Product = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);
    useEffect(() => {
        const productData = async () => {
            try {
                setLoading(true);
                const res = await axios.get(
                    "https://pharmacyonline.azurewebsites.net/api/Product?page=1"
                );
                setData(res.data);
                setFilter(res.data);
                console.log(res);
                setLoading(false);
            } catch (error) {
                toast.error("Loi roi");
            }
        };
        productData();
    }, []);

    const filterProduct = (cat) => {
        const updateList = data.filter((x) => x.cateGet.cateName === cat);
        setFilter(updateList);
    }
    // const ShowProducts = () => {
    //     return (
    //         <div class="row">
    //             <div
    //                 class="col-lg-12 d-flex justify-content-center"
    //                 data-aos="fade-up"
    //             >
    //                 <ul id="portfolio-flters">
    //                     <li data-filter="*" class="filter">
    //                         <button
    //                             className="btn "
    //                             onClick={() => setFilter(data)}
    //                         >
    //                             All
    //                         </button>
    //                     </li>
    //                     <li class="filter">
    //                         <button
    //                             className="btn  "
    //                             onClick={() => filterProduct("Tablet")}
    //                         >
    //                             Tablet
    //                         </button>
    //                         </li>
    //                         <li>
    //                         <button
    //                             className="btn  "
    //                             onClick={() => filterProduct("LiquidFilling")}
    //                         >
    //                             LiquidFilling
    //                         </button>
    //                         </li>
    //                         <li>
    //                         <button
    //                             className="btn  "
    //                             onClick={() => filterProduct("Trending")}
    //                         >
    //                             Trending
    //                         </button>
    //                     </li>
    //                 </ul>
    //             </div>
    //         </div>
    //     );
    // };
    return (
        <div class="container">
             <div class="row">
                <div
                    class="col-lg-12 d-flex justify-content-center"
                    data-aos="fade-up"
                >
                    <ul id="portfolio-flters">
                        <li data-filter="*" class="filter">
                            <button
                                className="btn "
                                onClick={() => setFilter(data)}
                            >
                                All
                            </button>
                        </li>
                        <li class="filter">
                            <button
                                className="btn  "
                                onClick={() => filterProduct("Tablet")}
                            >
                                Tablet
                            </button>
                            </li>
                            <li>
                            <button
                                className="btn  "
                                onClick={() => filterProduct("LiquidFilling")}
                            >
                                LiquidFilling
                            </button>
                            </li>
                            <li>
                            <button
                                className="btn  "
                                onClick={() => filterProduct("Trending")}
                            >
                                Trending
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row portfolio-container" data-aos="fade-up">
                {filter.length > 0 &&
                    filter.map((product, index) => {
                        return (
                            <div
                                key={index}
                                class="col-lg-4 col-md-6 portfolio-item filter-app"
                            >
                                <div class="portfolio-wrap">
                                    <img
                                        src={product.thumbnail}
                                        class="img-fluid"
                                        alt=""
                                    />
                                    <div class="portfolio-info">
                                        <h4>{product.productName}</h4>
                                        <p>{product.productName}</p>
                                        <div class="portfolio-links">
                                            <a
                                                href="images/blog/blog-1.jpg"
                                                data-gallery="portfolioGallery"
                                                class="portfolio-lightbox"
                                                title="App 1"
                                            >
                                                <i class="bx bx-plus"></i>
                                            </a>
                                            <a
                                                href="portfolio-details.html"
                                                title="More Details"
                                            >
                                               <i class="fa-solid fa-plus">More</i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default Product;
