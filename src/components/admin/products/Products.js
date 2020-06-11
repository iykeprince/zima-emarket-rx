import React from "react";
import ProductItem from "./ProductItem";
import { Spinner } from "evergreen-ui";

const Products = ({ products }) => {
  
  return (
    <div className="">
      <a href="/add-product" className="btn btn-outline-primary">
        <i className="fa fa-add"></i> Add Products{" "}
        <span className="badge badge-default">
          ({products.length})
        </span>
      </a>
      <hr class="p-1"/>
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
