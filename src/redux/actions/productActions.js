import {
  FETCH_PRODUCTS,
  GET_ERRORS,
  LOADING_DATA,
  PRODUCT_ADD_ERROR,
  PRODUCT_ADD_LOADING,
  PRODUCT_ADD_SUCCESS,
} from "./types";
import axios from "axios";

export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING_DATA, payload: true });
    const res = await axios.get(`/api/getProducts`);

    const products = res.data;
    dispatch({ type: FETCH_PRODUCTS, payload: products });
    dispatch({ type: LOADING_DATA, payload: false });
  } catch (err) {
    dispatch({ type: GET_ERRORS, payload: err.message });
    dispatch({ type: LOADING_DATA, payload: false });
  }
};

export const saveProduct = (formData) => async (dispatch) => {
  try {
    const url = "/api/products";

    dispatch({ type: PRODUCT_ADD_LOADING, payload: true });
    const res = await axios.post(url, formData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
    });

    dispatch({ type: PRODUCT_ADD_LOADING, payload: false });
    dispatch({ type: PRODUCT_ADD_SUCCESS, payload: res.message });
  } catch (err) {
    if (err.response.status === 422) {
      dispatch({ type: PRODUCT_ADD_ERROR, payload: err.response.data.message });
    }
    console.log(JSON.stringify(err.response.data));
    dispatch({ type: PRODUCT_ADD_LOADING, dispatch: false });
  }
};
