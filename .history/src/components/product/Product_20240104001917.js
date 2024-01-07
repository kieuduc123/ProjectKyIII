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
    const ShowProducts = () => {
        return (
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
                                onClick={() => filterProduct("Capsule/Encapsulation")}
                            >
                                Capsule/Encapsulation
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        );
    };
    return (
        <section id="portfolio" class="portfolio">
        <div class="container">
             <div class="row">
                <div
                    class="col-lg-12 d-flex justify-content-center"
                    data-aos="fade-up"
                >
                    <ul id="portfolio-flters" className="d-flex">
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
                            <li class="filter">
                            <button
                                className="btn  "
                                onClick={() => filterProduct("LiquidFilling")}
                            >
                                LiquidFilling
                            </button>
                            </li>
                            <li class="filter">
                            <button
                                className="btn  "
                                onClick={() => filterProduct("Capsule/Encapsulation")}
                            >
                                Capsule/Encapsulation
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
                                            <NavLink
                                                to={`/product/${product.id}`}
                                                title="More Details"
                                            >
                                               <i class="fa-solid fa-plus"></i>
                                               More
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>






        <div class = "wrapper">
        <div class = "category-filter">
            <div class = "container">
                <div class = "title">
                    <h1>Featured Products</h1>
                </div>

                <div class = "filter-btns">
                    <button type = "button" 
                     onClick={() => setFilter(data)}
                     class = "filter-btn" id = "all">All</button>
                    <button type = "button" class = "filter-btn"  onClick={() => filterProduct("Tablet")} id = "Tablet">Tablet</button>
                    <button type = "button" class = "filter-btn"  onClick={() => filterProduct("LiquidFilling")}>LiquidFilling</button>
                    <button type = "button" class = "filter-btn"      onClick={() => filterProduct("Capsule/Encapsulation")}> Capsule/Encapsulation</button>
                </div>

                <div class = "filter-items">
                    <div class = "filter-item all new">
                        <div class = "item-img">
                            <img src = "images/1.jpg" alt = "Item image">
                            <span class = "discount">20%</span>
                        </div>
                        <div class = "item-info">
                            <p>Cool Item Name</p>
                            <div>
                                <span class = "old-price">$20.50</span>
                                <span class = "new-price">$16.70</span>
                            </div>
                            <a href = "#" class ="add-btn">Add to Cart</a>
                        </div>
                    </div>

                    <div class = "filter-item all best-sellers">
                        <div class = "item-img">
                            <img src = "images/2.jpg" alt = "Item image">
                            <span class = "discount">20%</span>
                        </div>
                        <div class = "item-info">
                            <p>Cool Item Name</p>
                            <div>
                                <span class = "old-price">$20.50</span>
                                <span class = "new-price">$16.70</span>
                            </div>
                            <a href = "#" class ="add-btn">Add to Cart</a>
                        </div>
                    </div>

                    <div class = "filter-item all specials">
                        <div class = "item-img">
                            <img src = "images/3.jpg" alt = "Item image">
                            <span class = "discount">20%</span>
                        </div>
                        <div class = "item-info">
                            <p>Cool Item Name</p>
                            <div>
                                <span class = "old-price">$20.50</span>
                                <span class = "new-price">$16.70</span>
                            </div>
                            <a href = "#" class ="add-btn">Add to Cart</a>
                        </div>
                    </div>

                    <div class = "filter-item all new">
                        <div class = "item-img">
                            <img src = "images/4.jpg" alt = "Item image">
                            <span class = "discount">20%</span>
                        </div>
                        <div class = "item-info">
                            <p>Cool Item Name</p>
                            <div>
                                <span class = "old-price">$20.50</span>
                                <span class = "new-price">$16.70</span>
                            </div>
                            <a href = "#" class ="add-btn">Add to Cart</a>
                        </div>
                    </div>

                    <div class = "filter-item all best-sellers">
                        <div class = "item-img">
                            <img src = "images/5.jpg" alt = "Item image">
                            <span class = "discount">20%</span>
                        </div>
                        <div class = "item-info">
                            <p>Cool Item Name</p>
                            <div>
                                <span class = "old-price">$20.50</span>
                                <span class = "new-price">$16.70</span>
                            </div>
                            <a href = "#" class ="add-btn">Add to Cart</a>
                        </div>
                    </div>

                    <div class = "filter-item all specials">
                        <div class = "item-img">
                            <img src = "images/6.jpg" alt = "Item image">
                            <span class = "discount">20%</span>
                        </div>
                        <div class = "item-info">
                            <p>Cool Item Name</p>
                            <div>
                                <span class = "old-price">$20.50</span>
                                <span class = "new-price">$16.70</span>
                            </div>
                            <a href = "#" class ="add-btn">Add to Cart</a>
                        </div>
                    </div>

                    <div class = "filter-item all new">
                        <div class = "item-img">
                            <img src = "images/7.jpg" alt = "Item image">
                            <span class = "discount">20%</span>
                        </div>
                        <div class = "item-info">
                            <p>Cool Item Name</p>
                            <div>
                                <span class = "old-price">$20.50</span>
                                <span class = "new-price">$16.70</span>
                            </div>
                            <a href = "#" class ="add-btn">Add to Cart</a>
                        </div>
                    </div>

                    <div class = "filter-item all best-sellers">
                        <div class = "item-img">
                            <img src = "images/8.jpg" alt = "Item image">
                            <span class = "discount">20%</span>
                        </div>
                        <div class = "item-info">
                            <p>Cool Item Name</p>
                            <div>
                                <span class = "old-price">$20.50</span>
                                <span class = "new-price">$16.70</span>
                            </div>
                            <a href = "#" class ="add-btn">Add to Cart</a>
                        </div>
                    </div>

                    <div class = "filter-item all specials">
                        <div class = "item-img">
                            <img src = "images/9.jpg" alt = "Item image">
                            <span class = "discount">20%</span>
                        </div>
                        <div class = "item-info">
                            <p>Cool Item Name</p>
                            <div>
                                <span class = "old-price">$20.50</span>
                                <span class = "new-price">$16.70</span>
                            </div>
                            <a href = "#" class ="add-btn">Add to Cart</a>
                        </div>
                    </div>

                    <div class = "filter-item all new">
                        <div class = "item-img">
                            <img src = "images/10.jpg" alt = "Item image">
                            <span class = "discount">20%</span>
                        </div>
                        <div class = "item-info">
                            <p>Cool Item Name</p>
                            <div>
                                <span class = "old-price">$20.50</span>
                                <span class = "new-price">$16.70</span>
                            </div>
                            <a href = "#" class ="add-btn">Add to Cart</a>
                        </div>
                    </div>

                    <div class = "filter-item all best-sellers">
                        <div class = "item-img">
                            <img src = "images/11.jpg" alt = "Item image">
                            <span class = "discount">20%</span>
                        </div>
                        <div class = "item-info">
                            <p>Cool Item Name</p>
                            <div>
                                <span class = "old-price">$20.50</span>
                                <span class = "new-price">$16.70</span>
                            </div>
                            <a href = "#" class ="add-btn">Add to Cart</a>
                        </div>
                    </div>

                    <div class = "filter-item all specials">
                        <div class = "item-img">
                            <img src = "images/12.jpg" alt = "Item image">
                            <span class = "discount">20%</span>
                        </div>
                        <div class = "item-info">
                            <p>Cool Item Name</p>
                            <div>
                                <span class = "old-price">$20.50</span>
                                <span class = "new-price">$16.70</span>
                            </div>
                            <a href = "#" class ="add-btn">Add to Cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

        </section>
    );
};

export default Product;
