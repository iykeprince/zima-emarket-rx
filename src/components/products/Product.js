import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import Pagination from "react-js-pagination";

const Product = ({ products }) => {
  const [activePage, setActivePage] = useState(1);
  const [perPage, setPerPage] = useState(8);
  const [activeProducts, setActiveProducts] = useState([]);
  const totalPages = products.length;
  const pageRangeDisplay = 5;

  useEffect(() => {
    setActiveProducts(products.slice((activePage - 1), perPage * activePage) );
  }, []); 

  const onHandlePageChange = (pageNumber) => {
    // console.log(`activate page: ${pageNumber}`);
    setActivePage(pageNumber);
    setActiveProducts(products.slice((pageNumber - 1) * perPage, perPage * pageNumber ));
  };

  return (
    <div>
      <div className="row">
        {activeProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div> 
      <Pagination
        activePage={activePage}
        itemsCountPerPage={perPage}
        totalItemsCount={totalPages}
        pageRangeDisplayed={pageRangeDisplay}
        onChange={onHandlePageChange}
        itemClass="page-item"
        linkClass="page-link"
      />
    </div>
  );
};
export default Product; 
