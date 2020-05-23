import React from "react";

const MarketItem = ({market}) => {
  const { id, name, address, city, state, country, slug } = market;
  return (
    <div className="col-3 inside2-box">
      <a href={`/market/${id}`}>
        <div className="inside2-box-content markets">
          <div className="content-img">
            <div className="content-img-overlay">
              <img
                src={require("../../containers/Resources/zima_market.jpg")}
              />
            </div>
          </div>
          <div className="content-text">
            <h4>{name}</h4>
            <span>
              <i className="fa fa-map-marker"></i> {state}
            </span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default MarketItem;
