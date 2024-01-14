import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

const Product = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const delay = setTimeout(() => {
        setIsLoading(false);
      }, 5000);
  
      return () => clearTimeout(delay);
    }, []);
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
             {isLoading ? (
                <div className="loading-overlay">
                <div className="loading-spinner"></div>
              </div>
                ) : (
            <div class="product">
                <div className="container-fluid">
                    <div class="title" >
                        <h1 className="site-navigation ul li.current-menu-item">
                            Featured Products
                        </h1>
                    </div>

                </div>
                <div class="container">
                    <div className="d-flex justify-content-between items-center pt-5 pb-4 flex-column flex-lg-row">
                        <div>
                            <h1 className="fw-bold fs-3 mb-2">New Releases </h1>
                            <nav aria-label="breadcrumb">
                                <div class="filter-btns">
                                    <button
                                        type="button"
                                        onClick={() => setFilter(data)}
                                        class="ml-1 btn-3 custom-btn"
                                        id="all"
                                        >
                                        <span>
                                        All
                                    </span>
                                    </button>
                                    <button
                                        type="button"
                                        class="ml-1 btn-3 custom-btn"
                                        onClick={() => filterProduct("Tablet")}
                                        id="Tablet"
                                        >
                                        <span>
                                        Tablet
                                    </span>
                                    </button>


                                    <button
                                        type="button"
                                        class="ml-1 btn-3 custom-btn "
                                        onClick={() =>
                                            filterProduct("LiquidFilling")
                                        }
                                        >
                                        <span>
                                        LiquidFilling
                                    </span>
                                    </button>
                                    <button
                                        type="button"
                                        class="ml-1 btn-3 custom-btn "
                                        onClick={() =>
                                            filterProduct(
                                                "Capsule/Encapsulation"
                                            )
                                        }
                                        >
                                        <span>
                                        Capsule/Encapsulation
                                    </span>
                                    </button>
                                 

                                </div>
                            </nav>
                        </div>
                        {/* <div className="d-flex justify-content-end align-items-center mt-4 mt-lg-0 flex-column flex-md-row">
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
                        </div> */}
                    </div>

              

<div className="container">
                    <div className="product-list">
                    {filter.length > 0 &&
                            filter.map((product, index) => {
                                return (
                        <div className="product-item" key={index}>
                            <img  style={{  height: "350px",
                                                        width: "350px",
                                                    }}   src={product.thumbnail} alt=""/> 
                                                    <span >{product.isNew}</span>
                            <div className="my-4"> 
                            <h4 className="text-center">  {product.productName.slice(
                                                        0,
                                                        25
                                                    )}
                                                    .... </h4>
                            <NavLink  to={`/product/${product.id}`} className="product-link"> Details</NavLink>
                            </div>
                        </div>
                                );
                            })}
                    </div>
                </div>
                </div>
            </div>
               )}
        </div>
    );
};

export default Product;
