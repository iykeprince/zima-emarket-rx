import { FETCH_MARKETS, GET_ERRORS, FETCH_MARKET_SHOPS } from "./types";
import axios from "axios";

export const fetchMarkets = () => async (dispatch) => {
  try {
    const res = await axios.get(`/api/markets`);

    const markets = res.data;
    dispatch({ type: FETCH_MARKETS, payload: markets });
  } catch (err) {
    dispatch({ type: GET_ERRORS, payload: err.message});
  }
};

export const fetchMarketShops = (marketId) => async (dispatch) => {
    try{
        const res = await axios.get(`/api/markets/${marketId}/shops`);

        const market = res.data;
        console.log('fetching data for ', marketId, 'market', market);
        dispatch({type: FETCH_MARKET_SHOPS, payload: market});
    } catch (err) {
        console.log("error", err);
        dispatch({ type: GET_ERRORS, payload: err.message });
      }
}
