import React from "react";
import ProductItem from "./ProductItem";
import { Spinner } from "evergreen-ui";
import { Link } from "react-router-dom";

const Products = ({ products }) => {
  console.log('products', products)
  return (
    <div className="">
      <Link to="/add-product" className="btn btn-outline-primary">
        <i className="fa fa-add"></i> Add Products{" "}
        <span className="badge badge-default">
          ({products.length})
        </span>
      </Link>
      <hr className="p-1"/>
      <div className="product-list-layout">
        <div>
          {products && products.length === 0 ? (
            <Spinner />
          ) : (
            <div className="row">
              {products.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  ); 
};

export default Products;
