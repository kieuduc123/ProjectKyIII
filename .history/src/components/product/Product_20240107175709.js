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

                    <div class="row product-list">
                        {filter.length > 0 &&
                            filter.map((product, index) => {
                                return (
                                    <div class="col-md-4 border" key={index}>
                                        <section class="panel">
                                            <div class="pro-img-box">
                                                <img
                                                    style={{
                                                        height: "350px",
                                                        width: "300px",
                                                    }}
                                                    src={product.thumbnail}
                                                    alt=""
                                                />
                                            </div>

                                            <div class="panel-body text-center">
                                                <p>
                                                    {product.productName.slice(
                                                        0,
                                                        25
                                                    )}
                                                    ....
                                                </p>
                                                <h4>
                                                    <NavLink
                                                        to={`/product/${product.id}`}
                                                        className="call-btn button gradient-bg mt-3 mt-md-0"
                                                    >
                                                        Details
                                                    </NavLink>
                                                </h4>
                                            </div>
                                        </section>
                                        {/* <div class = "item-img">
                            <img   style={{   height: "350px",  width: "300px", }} src={product.thumbnail}  alt=""/>
                            <span class = "discount  button gradient-bg">{product.isNew}</span>
                        </div>
                        <div class = "item-info mt-3">
                            <p>{product.productName.slice(0,25)}....</p>
                            <NavLink  to={`/product/${product.id}`} className="call-btn button gradient-bg mt-3 mt-md-0">Details</NavLink>
                        </div> */}
                                    </div>
                                );
                            })}
                    </div>


                    <div className="product">
                        <div className="product-item" >
                            <img  style={{  height: "350px",
                                                        width: "350px",
                                                    }} src="https://bostonpharma.com.vn/vnt_upload/File/Image/ser1_min_new.jpg" alt=""/> 
                                                    <span >New</span>
                            <div className="my-4"> 
                            <h1 className="text-center"> titile </h1>
                            <NavLink to="/" className="product-link"> Details</NavLink>
                            </div>
                        </div>
                        <div  >
                            <img  style={{
                                                        height: "350px",
                                                        width: "350px",
                                                    }} src="https://bostonpharma.com.vn/vnt_upload/File/Image/ser1_min_new.jpg" alt=""/> 
                            <div> 

<h1> titile </h1>
<NavLink to="/"> xem them </NavLink>
</div>
                        </div>
                        <div className=""  >
                            <img  style={{
                                                        height: "350px",
                                                        width: "350px",
                                                    }} src="https://bostonpharma.com.vn/vnt_upload/File/Image/ser1_min_new.jpg" alt=""/> 
                            <div> 

<h1> titile </h1>
<NavLink to="/"> xem them </NavLink>
</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Product;
