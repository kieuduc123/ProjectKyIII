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
    return (
     
  <div class = "wrapper">
        <div class = "category-filter">
            <div class = "container">
                <div class = "title">
                    <h1 className="site-navigation ul li.current-menu-item">Featured Products</h1>
                </div>
                <div class = "filter-btns">
                    <button type = "button"   onClick={() => setFilter(data)} class = "filter-btn" id = "all">All</button>
                    <button type = "button" class = "filter-btn"  onClick={() => filterProduct("Tablet")} id = "Tablet">Tablet</button>
                    <button type = "button" class = "filter-btn"  onClick={() => filterProduct("LiquidFilling")}>LiquidFilling</button>
                    <button type = "button" class = "filter-btn"   onClick={() => filterProduct("Capsule/Encapsulation")}> Capsule/Encapsulation</button>
                </div>

                <div class = "row filter-items">
                {filter.length > 0 &&
                    filter.map((product, index) => {
                        return(
                    <div class = "col-4 " key={index}>
                        <div class = "item-img">
                            <img src={product.thumbnail}  alt=""/>
                            <span class = "discount  button gradient-bg">{product.isNew}</span>
                        </div>
                        <div class = "item-info mt-3">
                            <p>{product.productName}</p>
                            <NavLink  to={`/product/${product.id}`} className="call-btn button gradient-bg mt-3 mt-md-0">Details</NavLink>
                        </div>
                    </div>

                        );
                    })}             
                </div>
            </div>
        </div>

        <Fragment>
            <section className="mt-0 ">
                <div
                    className="py-10 bg-img-cover bg-overlay-dark position-relative overflow-hidden bg-pos-center-center rounded-0"
                    style={{
                        backgroundImage: `url(./assets/images/banners/banner-category-top.jpg)`,
                    }}
                >
                    <div
                        className="container-fluid position-relative z-index-20"
                        data-aos="fade-right"
                        data-aos-delay="300"
                    >
                        <h1 className="fw-bold display-6 mb-4 text-white">
                            Latest Arrivals
                        </h1>
                        <div className="col-12 col-md-6">
                            <p className="text-white mb-0 fs-5">
                                When it's time to head out and get your Kicks
                                on, have a look at our latest arrivals. Whether
                                you're into Nike, Adidas, Dunks or New Balance,
                                we really have something for everyone!
                            </p>
                        </div>
                    </div>
                </div>
                {/* <!-- Category Top Banner --> */}

                <div className="container-fluid" data-aos="fade-in">
                
                    {/* <!-- Category Toolbar--> */}
                    <div className="d-flex justify-content-between items-center pt-5 pb-4 flex-column flex-lg-row">
                        <div>
                            <h1 className="fw-bold fs-3 mb-2">New Releases </h1>
                            <p className="m-0 text-muted small">
                                Showing 1 - 9 of 121
                            </p>
                            <nav aria-label="breadcrumb">
                            <div class = "filter-btns">
                    <button type = "button"   onClick={() => setFilter(data)} class = "filter-btn" id = "all">All</button>
                    <button type = "button" class = "filter-btn"  onClick={() => filterProduct("Tablet")} id = "Tablet">Tablet</button>
                    <button type = "button" class = "filter-btn"  onClick={() => filterProduct("LiquidFilling")}>LiquidFilling</button>
                    <button type = "button" class = "filter-btn"   onClick={() => filterProduct("Capsule/Encapsulation")}> Capsule/Encapsulation</button>
                </div>
                            </nav>
                        </div>
                        <div className="d-flex justify-content-end align-items-center mt-4 mt-lg-0 flex-column flex-md-row">
                            {/* <!-- Filter Trigger--> */}

                            {/* <!-- / Filter Trigger--> */}

                            {/* <!-- Sort Options--> */}
                            <select
        id="sort"
        value="name"
        // onChange={handleSort}
        className="form-select form-select-sm border-0 bg-light p-3 pe-5 lh-1 fs-7 bg-light p-3 me-md-3 d-flex align-items-center fs-7 lh-1 w-100 mb-2 mb-md-0 w-md-auto ">
        <option selected>Sort By</option>
        <option value="NAME_DESC">Tên Z-A</option>
        <option value="PRICE_DESC">High to low</option>
        <option value="PRICE_ASC">Low to high</option>
      </select>
                        </div>
                    </div>
                    {/* <!-- /Category Toolbar--> */}

                    {/* <!-- Products--> */}
                    {testDate.length > 0 &&
                            testDate.map((product, index) => {
                                return (
                                    <div
                                        className="col-12 col-sm-6 col-lg-4"
                                        key={index}
                                    >
                                        {/* <!-- Card Product--> */}

                                        <div className="card border border-transparent position-relative overflow-hidden h-100 transparent">
                                            <div className="card-img position-relative">
                                                <div className="card-badges">
                                                    <span className="badge badge-card">
                                                        <span className="f-w-2 f-h-2 bg-danger rounded-circle d-block me-1"></span>{" "}
                                                        Sale
                                                    </span>
                                                </div>
                                                <picture className="position-relative overflow-hidden d-block bg-light">
                                                    <img
                                                        className=" position-relative z-index-10 object-fit-cover "
                                                        style={{
                                                            height: "350px",
                                                            width: "300px",
                                                        }}
                                                        title=""
                                                        src={product.thumbnail}
                                                        alt=""
                                                    />
                                                </picture>
                                                <div className="position-absolute start-0 bottom-0 end-0 z-index-40 p-2">
                                                    <NavLink
                                                        className="btn btn-quick-add"
                                                        to={`/products/${product.id}`}
                                                    >
                                                        By Now
                                                    </NavLink>
                                                </div>
                                            </div>
                                            <div className="card-body px-0">
                                                <NavLink
                                                    className="text-decoration-none link-cover"
                                                    to="/"
                                                >
                                                    {product.name}
                                                </NavLink>
                                                <small className="text-muted d-block">
                                                    {product.qty} item, 10 sizes
                                                </small>
                                                <p className="mt-2 mb-0 small">
                                                    <s className="text-muted">
                                                        $329.99
                                                    </s>
                                                    <span className="text-danger">
                                                        {product.price}jfandjdf
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                    </div>
         
                </div>

              
            </section>
        </Fragment>



    </div>

    );
};

export default Product;
