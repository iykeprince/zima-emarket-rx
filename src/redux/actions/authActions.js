import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  GET_USER,
  GET_USER_FAIL,
  GET_MY_PRODUCTS,
  GET_SHOP,
  GET_MY_PRODUCTS_ERROR,
  GET_SHOP_ERROR,
  LOGGED_OUT_SUCCESS,
  LOGGED_OUT_FAIL,
} from "./types";
import axios from "axios";
import jwt from 'jwt-decode';

const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.token}`,
  },
};
export const requestLogin = (email, password) => async (dispatch) => {
  try {
    const url = "/api/login";
    const data = { email, password };
    const res = await axios.post(url, data, config);

    console.log(res.data);
    const user = jwt(res.data.token);//decode the jwt token
    console.log('decoded jwt', user);
    localStorage.setItem("token", res.data.token);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
  } catch (err) {
    localStorage.removeItem("token");
    console.log("error", err.response.status);
    dispatch({ type: LOGIN_FAIL, payload: err.response });
  }
};

export const requestSignUp = (data) => async (dispatch) => {
  try {
    const url = "/api/register";

    const res = await axios.post(url, data, config);

    localStorage.setItem("token", res.data.token);
    dispatch({ type: SIGN_UP_SUCCESS, payload: res.data });
  } catch (err) {
    localStorage.removeItem("token");
    dispatch({ type: SIGN_UP_FAIL, payload: err.response });
  }
};

export const getUser = () => async (dispatch) => {
  try {
    console.log("user in actions");
    const res = await axios.get("/api/getUser", config);

    const user = res.data;
    console.log("user", user);
    dispatch({ type: GET_USER, payload: user });
  } catch (err) {
    dispatch({ type: GET_USER_FAIL, payload: err.response });
  }
};

export const getMyProducts = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/products", config);
    dispatch({ type: GET_MY_PRODUCTS, payload: res.data });
  } catch (err) {
    dispatch({ type: GET_MY_PRODUCTS_ERROR, payload: err.response });
  }
};

export const logout = () => async (dispatch) => {
  try {
    await axios.post("/api/logout", {}, config);

    if (localStorage.token) localStorage.removeItem("token");
    dispatch({ type: LOGGED_OUT_SUCCESS });
  } catch (err) {
    dispatch({ type: LOGGED_OUT_FAIL, payload: err.response });
  }
};

export const getShop = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/getShop", config);
    console.log("shop", res.data);
    dispatch({ type: GET_SHOP, payload: res.data });
  } catch (err) {
    dispatch({ type: GET_SHOP_ERROR, payload: err.response });
  }
};

//  export const getMarkets = async (config) => {
//     try{

//       const res = await axios.get("/api/markets", config);

//     }catch(err){
//       handleError(err);
//     }
//   }
