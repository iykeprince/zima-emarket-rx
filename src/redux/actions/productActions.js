import { FETCH_PRODUCTS, GET_ERRORS, LOADING_DATA } from "./types";
import axios from "axios";

export const fetchProducts = () => async (dispatch) => {
  try {
      dispatch({type: LOADING_DATA, payload: true });
    const res = await axios.get(`/api/getProducts`);

    const products = res.data;
    dispatch({ type: FETCH_PRODUCTS, payload: products });
    dispatch({ type: LOADING_DATA, payload: false });
  } catch (err) {
    dispatch({ type: GET_ERRORS, payload: err.message });
    dispatch({ type: LOADING_DATA, payload: false });
  }
};
