import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  GET_USER,
  GET_MY_PRODUCTS,
  LOADING_DATA,
  LOGGED_OUT_FAIL,
  LOGGED_OUT_SUCCESS,
  GET_SHOP,
  GET_SHOP_ERROR,
  GET_MY_PRODUCTS_ERROR,
  GET_USER_FAIL,
  LOGIN_FACEBOOK_SUCCESS,
  LOGIN_GOOGLE_SUCCESS,
  LOGIN_FACEBOOK_FAIL,
  LOGIN_GOOGLE_FAIL
} from "../actions/types";

const initialState = {
  isAuthenticated: localStorage.token ? true : false,
  products: [],
  shop: {},
  user: null,
  loading: false,
  success: false,
  failed: false,
  token: localStorage.token || null,
  error: {},
  reset: false,
  logged_out: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MY_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case GET_SHOP:
      return {
        ...state,
        shop: action.payload,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case LOGIN_SUCCESS:
    case SIGN_UP_SUCCESS:
    case LOGIN_FACEBOOK_SUCCESS:
    case LOGIN_GOOGLE_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        isAuthenticated: true,
        success: true,
        failed: false,
        loading: false,
        reset: true,
      };
    case GET_USER_FAIL:
    case LOGIN_FAIL:
    case LOGIN_FACEBOOK_FAIL:
    case LOGIN_GOOGLE_FAIL:
    case SIGN_UP_FAIL:
    case GET_SHOP_ERROR:
    case GET_MY_PRODUCTS_ERROR:
      return {
        ...state,
        success: false,
        failed: true, 
        loading: false,
        error: action.payload,
        isAuthenticated: false,
      };
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      };
    case LOGGED_OUT_SUCCESS:
    case LOGGED_OUT_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        logged_out: true,
      };
    default:
      return state;
  }
}
