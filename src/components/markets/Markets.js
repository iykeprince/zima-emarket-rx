import React, {useState, useEffect} from "react";
import MarketItem from "../markets/MarketItem";
import Pagination from "react-js-pagination";

const Market = ({ markets }) => {
  const [activePage, setActivePage] = useState(1);
  const [perPage, setPerPage] = useState(8);
  const [activeMarkets, setActiveMarkets] = useState([]);
  const totalPages = markets.length;
  const pageRangeDisplay = 5;

  useEffect(() => {
    setActiveMarkets(markets.slice((activePage - 1), perPage * activePage) );
  }, []); 

  const onHandlePageChange = (pageNumber) => {
    // console.log(`activate page: ${pageNumber}`);
    setActivePage(pageNumber);
    setActiveMarkets(markets.slice((pageNumber - 1) * perPage, perPage * pageNumber ));
  };

  return (
    <div>
      <div className="row">
        {activeMarkets.map((market) => (
          <MarketItem key={market.id} market={market} />
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

export default Market;
