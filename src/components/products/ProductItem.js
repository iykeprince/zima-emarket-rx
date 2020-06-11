import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const ProductItem = ({ product }) => {
  const { id, name, price, image, shop } = product;

  return (
    <div className="col-md-3 inside2-box">
      <div className="inside2-box-content">
        <div
          className="content-img"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
          }}
        >
          <span>Boosted Ad</span>
          <i className="fa fa-user-circle"></i>
        </div>
        <Link to={"/product/" + id}>
          <div className="content-text">
            <h4>{name}</h4>
            <p>{shop.name}</p>
            <span>
              <i className="fa fa-map-marker"></i> {shop.market.state}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
