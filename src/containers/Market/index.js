import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { fetchMarketShops } from "../../redux/actions/marketActions";

import "./Market.css";
import Spinner from "../../components/Spinner";
import Subscribe from "../../components/subscribe/Subscribe";
import Banner from "../Resources/banner.png";
import Pagination from "react-js-pagination";
import Header from "../Header";
import DefaultLayout from "../layouts/default";
import PropTypes from "prop-types";

const Market = ({ match, market, fetchMarketShops }) => {
  const [marketShops, setMarketShops] = useState({});
  const [markets, setMarkets] = useState([]);
  const [marketId, setMarketId] = useState(match.params.slug);

  const [activePage, setActivePage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [activeMarketShops, setActiveMarketShops] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const pageRangeDisplay = 5;

  useEffect(() => {
    document.title = "Zima Market";
    console.log("market id", marketId);
    fetchMarketShops(marketId);
    // if(JSON.stringify(marketShops) !== '{}'){
    //   setActiveMarketShops([]);
    //   setActiveMarketShops(
    //     marketShops.shops.slice(activePage - 1, perPage * activePage)
    //   );
    //   setMarketShops(market);
    //   console.log('shop in market', market);
    // }
    //eslint-disable-next-line
  }, []);

  const onHandlePageChange = (pageNumber) => {
    // console.log(`activate page: ${pageNumber}`);
    setActivePage(pageNumber);
    setActiveMarketShops(
      marketShops.shops.slice((pageNumber - 1) * perPage, perPage * pageNumber)
    );
  };

  return (
    <DefaultLayout>
      <section id="zima-landing-page-features-market">
        <div className="container-fluid">
          <div className=" row zima-features">
            <div className="zima-features-col">
              <div className="zima-features-wrapper">
                <div
                  className="market-banner"
                  style={{ backgroundImage: `url(${market.image})` }}
                >
                  <div className="banner-overlay">
                    <h3 className="title">{market.name}</h3>
                    <p>{market.address}</p>
                    <p>{market.city}</p>
                  </div>
                </div>

                <div className="zima-features-inside">
                  <div className="features-inside1 market">
                    {/* <ul className="cat-body">
                      <li className="cat cat1">Markets</li>
                      {markets.map((market) => (
                        <a href="#">
                          <li className="cat">
                            <span>{market.name}</span>
                            <i className="mark">125 shops</i>
                          </li>
                        </a>
                      ))}
                    </ul> */}
                  </div>
                  <div className="features-inside2">
                    <div className="inside2-content">
                      <div className="title-content">
                        <div className="title-left">
                          <p>{market.name}</p>
                        </div>
                        <span className="h5">
                          {JSON.stringify(market) !== "{}" &&
                            market.shops.length}
                        </span>
                      </div>
                      <div className="row">
                        {JSON.stringify(market) !== "{}" &&
                        market.shops.length > 0 ? (
                          market.shops.map((shop) => (
                            <div key={shop.id} className="col-12 inside2-box">
                              <div className="inside2-box-content market">
                                <div className="content-img market">
                                  <span>Boosted Ad</span>
                                  <div
                                    style={{
                                      backgroundImage: `url(${shop.banner_image})`,
                                      backgroundRepeat: "no-repeat",
                                      backgroundSize: "cover",
                                      backgroundPosition: "center",
                                      width: "100%",
                                      height: "100%",
                                    }}
                                  ></div>
                                </div>
                                <div className="content-text">
                                  <h4>{shop.name}</h4>
                                  <p>{market.name} Market</p>
                                  <span>
                                    <i className="fa fa-map-marker"></i>{" "}
                                    {market.state}
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
    </DefaultLayout>
  );
};

Market.propTypes = {
  fetchMarketShops: PropTypes.func.isRequired,
  market: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  market: state.markets.market,
});
export default connect(mapStateToProps, {
  fetchMarketShops,
})(Market);
