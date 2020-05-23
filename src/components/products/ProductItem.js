import React from "react";
import './Product.css';

const ProductItem = ({product}) => {
    const { id, name, price, image, shop } = product;

  return (
    <div className="col-3 inside2-box">
      <div className="inside2-box-content">
        <div className="content-img" style={{backgroundImage:`url(${image})`, backgroundSize: 'cover' }}>
          <span>Boosted Ad</span>
          <i className="fa fa-user-circle"></i>
        </div>
        <div className="content-text">
          <h4>{name}</h4>
          {/* <p>Alaba Ojo Market</p> */}
            <p>{shop.name}</p>
          <span>
            <i className="fa fa-map-marker"></i> {shop.market.state}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
