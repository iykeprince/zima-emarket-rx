import React, { useReducer } from "react";
import axios from "axios";
import MarketContext from "./marketContext";
import marketReducer from "./marketReducer";

import { FETCH_MARKETS, FETCH_FAILED, CLEAR_MARKETS } from "../types";

const MarketState = (props) => {
  const initialState = {
    markets: null,
  };

  const [state, dispatch] = useReducer(marketReducer, initialState);

  //Fetch markets
  const fetchMarkets = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/api/markets`);

      dispatch({
        type: FETCH_MARKETS,
        payload: res.data,
      });
    } catch (err) {
      console.log("error", err);
      dispatch({ type: FETCH_FAILED });
    }
  };

  //Clear markets

  return (
    <MarketContext.Provider
      value={{
        markets: state.markets,
        fetchMarkets,
      }}
    >
      {props.children}
    </MarketContext.Provider>
  );
};

export default MarketState;
