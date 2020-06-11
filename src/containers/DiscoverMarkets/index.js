import React, { useEffect, useState } from "react";
import './DiscoverMarkets.css';
import DefaultLayout from "../layouts/default";
import Spinner from "../../components/Spinner";
import axios from 'axios';
import Market from "../../components/markets/Markets";

const DiscoverMarkets = () => {
  const [markets, setMarkets] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => { 
    getMarkets();
    console.log('discover markets');
    //eslint-disable-next-line
  }, []);

  const getMarkets = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`/api/markets`);

      console.log('markets',res.data);
      setMarkets(res.data);
      setLoading(false);
    } catch (err) {
      setMarkets([]);
      setLoading(false);
    }
  };

  
  return (
    <DefaultLayout>
      <div className="container">
        <div className="banner">
          <div className="banner-overlay">
          <h3 className="page-title">Discover Markets</h3>
          </div>
        </div>

        <section class="p-3"> 
         <h3 className="lead featured-text">Markets</h3>
         <hr/>
          {!loading && markets.length > 0 ? (
          <Market markets={markets} />
          ) : (
            <Spinner />
          )}
        </section>
      </div>
    </DefaultLayout>
  );
};

export default DiscoverMarkets;
