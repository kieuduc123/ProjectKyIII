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
                setData(res.data.metaData                    );
                setFilter(res.data.metaData);
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
    //                             onClick={() => filterProduct("Capsule/Encapsulation")}
    //                         >
    //                             Capsule/Encapsulation
    //                         </button>
    //                     </li>
    //                 </ul>
    //             </div>
    //         </div>
    //     );
    // };
    return (
        // <section id="portfolio" class="portfolio">
        // <div class="container">
        //      <div class="row">
        //         <div
        //             class="col-lg-12 d-flex justify-content-center"
        //             data-aos="fade-up"
        //         >
        //             <ul id="portfolio-flters" className="d-flex">
        //                 <li data-filter="*" class="filter">
        //                     <button
        //                         className="btn "
        //                         onClick={() => setFilter(data)}
        //                     >
        //                         All
        //                     </button>
        //                 </li>
        //                 <li class="filter">
        //                     <button
        //                         className="btn  "
        //                         onClick={() => filterProduct("Tablet")}
        //                     >
        //                         Tablet
        //                     </button>
        //                     </li>
        //                     <li class="filter">
        //                     <button
        //                         className="btn  "
        //                         onClick={() => filterProduct("LiquidFilling")}
        //                     >
        //                         LiquidFilling
        //                     </button>
        //                     </li>
        //                     <li class="filter">
        //                     <button
        //                         className="btn  "
        //                         onClick={() => filterProduct("Capsule/Encapsulation")}
        //                     >
        //                         Capsule/Encapsulation
        //                     </button>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        //     <div class="row portfolio-container" data-aos="fade-up">
        //         {filter.length > 0 &&
        //             filter.map((product, index) => {
        //                 return (
        //                     <div
        //                         key={index}
        //                         class="col-lg-4 col-md-6 portfolio-item filter-app"
        //                     >
        //                         <div class="portfolio-wrap">
        //                             <img
        //                                 src={product.thumbnail}
        //                                 class="img-fluid"
        //                                 alt=""
        //                             />
        //                             <div class="portfolio-info">
        //                                 <h4>{product.productName}</h4>
        //                                 <p>{product.productName}</p>
        //                                 <div class="portfolio-links">
        //                                     <a
        //                                         href="images/blog/blog-1.jpg"
        //                                         data-gallery="portfolioGallery"
        //                                         class="portfolio-lightbox"
        //                                         title="App 1"
        //                                     >
        //                                         <i class="bx bx-plus"></i>
        //                                     </a>
        //                                     <NavLink
        //                                         to={`/product/${product.id}`}
        //                                         title="More Details"
        //                                     >
        //                                        <i class="fa-solid fa-plus"></i>
        //                                        More
        //                                     </NavLink>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 );
        //             })}
        //     </div>
        // </div>


        // </section>



  <div class = "wrapper">
        <div class = "category-filter">
            <div class = "container">
                <div class = "title">
                    <h1>Featured Products</h1>
                </div>

                <div class = "filter-btns">
                    <button type = "button"   onClick={() => setFilter(data)} class = "filter-btn" id = "all">All</button>
                    <button type = "button" class = "filter-btn"  onClick={() => filterProduct("Tablet")} id = "Tablet">Tablet</button>
                    <button type = "button" class = "filter-btn"  onClick={() => filterProduct("LiquidFilling")}>LiquidFilling</button>
                    <button type = "button" class = "filter-btn"      onClick={() => filterProduct("Capsule/Encapsulation")}> Capsule/Encapsulation</button>
                </div>

                <div class = "row filter-items">
                {filter.length > 0 &&
                    filter.map((product, index) => {
                        return(
                    <div class = "col-3 filter-item all new" key={index}>
                        <div class = "item-img">
                            <img src={product.thumbnail}  alt=""/>
                            <span class = "discount">{product.isNew}</span>
                        </div>
                        <div class = "item-info">
                            <p>{product.productName}</p>
                            <NavLink  to={`/product/${product.id}`} className="btn btn-main-2 btn-icon btn-round-full">Details</NavLink>
                        </div>
                    </div>

                        );
                    })}             
                </div>
            </div>
        </div>
    </div>

    );
};

export default Product;
