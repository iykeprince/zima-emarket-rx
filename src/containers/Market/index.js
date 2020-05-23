import React, { useState, useEffect } from "react";

import HeaderTwo from "../HeaderTwo";
import Footer from "../Footer";
import "./Market.css";
import Spinner from "../../components/Spinner";
import Subscribe from "../../components/subscribe/Subscribe";
import Banner from "../Resources/banner.png";
import Pagination from "react-js-pagination";

const Market = (props) => {
  const [marketShops, setMarketShops] = useState({ name: "", shops: [] });
  const [categories, setCategories] = useState([]);
  const [marketId, setMarketId] = useState(props.match.params.slug);

  const [activePage, setActivePage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [activeMarketShops, setActiveMarketShops] = useState([]);
  const totalPages = marketShops.shops.length;
  const pageRangeDisplay = 5;


  useEffect(() => {
    getMarketShops();
    document.title = "Zima Market";
    console.log("props", props);
    setActiveMarketShops(marketShops.shops.slice((activePage - 1), perPage * activePage) );
  }, []);

  const getMarketShops = async () => {
    const res = await props.getMarketShops(marketId);

    setMarketShops(res.data);
  };

  const onHandlePageChange = (pageNumber) => {
    // console.log(`activate page: ${pageNumber}`);
    setActivePage(pageNumber);
    setActiveMarketShops(marketShops.shops.slice((pageNumber - 1) * perPage, perPage * pageNumber ));
  };

  return (
    <div className="container-fluid p-0">
      <HeaderTwo />
      <section id="zima-landing-page-features-market">
        <div className="container-fluid">
          <div className=" row zima-features">
            <div className="zima-features-col">
              <div className="zima-features-wrapper">
                <img src={Banner} width="100%" />
                <div className="zima-features-inside">
                  <div className="features-inside1 market">
                    <ul className="cat-body">
                      <li className="cat cat1">Markets</li>
                      {categories.map((category) => (
                        <a href="#">
                          <li className="cat">
                            <span>{category.name}</span>
                            <i className="mark">125 shops</i>
                          </li>
                        </a>
                      ))}
                    </ul>
                  </div>
                  <div className="features-inside2">
                    <div className="inside2-content">
                      <div className="row">
                        {marketShops &&  marketShops.shops.length > 0 ? (
                          marketShops.shops.map((shop) => (
                            <div key={shop.id} className="col-12 inside2-box">
                              <div className="inside2-box-content market">
                                <div className="content-img market">
                                  <span>Boosted Ad</span>
                                  <i className="fa fa-user-circle"></i>
                                </div>
                                <div className="content-text">
                                  <h4>{shop.name}</h4>
                                  <p>{marketShops.name} Market</p>
                                  <span>
                                    <i className="fa fa-map-marker"></i>{" "}
                                    {marketShops.state}
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))
                        ) : (
                          <Spinner />
                        )}
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
                      {/*  */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="zima-disclaimer">
              <h2>
                Subscribe today to get the latest offers, discount rates and
                offers. No spamming, we promise
              </h2>
              <Subscribe />
              <p>
                Subscribe today to get the latest offers, discount rates and
                offers
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
export default Market;
