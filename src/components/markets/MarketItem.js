import React from "react";
import { Link } from "react-router-dom";

const MarketItem = ({ market }) => {
  const { id, name, address, city, state, country, slug, image } = market;

  return (
    <div className="col-3 inside2-box">
      <Link to={`/market/${id}`}>
        <div className="inside2-box-content markets">
          <div className="content-img">
            <div className="content-img-overlay">
              {/* <img src={image} alt="market" />  */}
              <div
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  width: "100%",
                  height: "100%",
                }}
              ></div>
            </div>
          </div>
          <div className="content-text">
            <h4>{name}</h4>
            <span>
              <i className="fa fa-map-marker"></i> {state}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MarketItem;
