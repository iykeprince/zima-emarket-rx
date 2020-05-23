import React from "react";
import ProductItem from "./ProductItem";
import { Spinner } from "evergreen-ui";

const Products = ({ products }) => {
  return (
    <div className="card-body">
      <a href="/add-product" className="btn btn-outline-primary btn-block">
        <i className="fa fa-add"></i> Add Products{" "}
        <span className="badge badge-primary"></span>
      </a>
      <div className="product-list-layout">
        <span className="badge badge-secondary">
          Products({products.length})
        </span>
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
