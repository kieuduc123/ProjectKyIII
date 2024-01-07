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
                setData(res.data.metaData);
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
    };
    return (
        <div class="wrapper">
            <div class="product">
                <div class="container">
                    <div class="title" >
                        <h1 className="site-navigation ul li.current-menu-item">
                            Featured Products
                        </h1>
                    </div>
                    <div className="d-flex justify-content-between items-center pt-5 pb-4 flex-column flex-lg-row">
                        <div>
                            <h1 className="fw-bold fs-3 mb-2">New Releases </h1>
                            <nav aria-label="breadcrumb">
                                <div class="filter-btns">
                                    <button
                                        type="button"
                                        onClick={() => setFilter(data)}
                                        class="filter-btn"
                                        id="all"
                                    >
                                        All
                                    </button>
                                    <button
                                        type="button"
                                        class="filter-btn"
                                        onClick={() => filterProduct("Tablet")}
                                        id="Tablet"
                                    >
                                        Tablet
                                    </button>
                                    <button
                                        type="button"
                                        class="filter-btn"
                                        onClick={() =>
                                            filterProduct("LiquidFilling")
                                        }
                                    >
                                        LiquidFilling
                                    </button>
                                    <button
                                        type="button"
                                        class="filter-btn"
                                        onClick={() =>
                                            filterProduct(
                                                "Capsule/Encapsulation"
                                            )
                                        }
                                    >
                                        {" "}
                                        Capsule/Encapsulation
                                    </button>
                                </div>
                            </nav>
                        </div>
                        <div className="d-flex justify-content-end align-items-center mt-4 mt-lg-0 flex-column flex-md-row">
                            <select
                                id="sort"
                                value="name"
                                // onChange={handleSort}
                                className="form-select form-select-sm border-0 bg-light p-3 pe-5 lh-1 fs-7 bg-light p-3 me-md-3 d-flex align-items-center fs-7 lh-1 w-100 mb-2 mb-md-0 w-md-auto "
                            >
                                <option selected>Sort By</option>
                                <option value="NAME_DESC">Tên Z-A</option>
                                <option value="PRICE_DESC">High to low</option>
                                <option value="PRICE_ASC">Low to high</option>
                            </select>
                        </div>
                    </div>

  
                        {filter.length > 0 &&
                            filter.map((product, index) => {
                                return (
                                    <div className="product">
                                    <div className="product-item" key={index}>
                                        <img  style={{  height: "350px",
                                                                    width: "350px",
                                                                }}  src={product.thumbnail}alt=""/> 
                                                                <span >New</span>
                                        <div className="my-4"> 
                                        <h3 className="text-center">  {product.productName.slice(                                0,25
                    
                                                    )} </h3>
                                        <NavLink to= {`product/${product.id}`}className="product-link"> Details</NavLink>
                                        </div>
                                    </div>
                                </div>
                                );
                            })}
                    </div>


                   
                </div>

            </div>
        
    );
};

export default Product;
