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
                    <button type = "button" class = "filter-btn"      onClick={() => filterProduct("Capsule/Encapsulation")}> Capsule/Encapsulation</button>
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
    </div>

    );
};

export default Product;
