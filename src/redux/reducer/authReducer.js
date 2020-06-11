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
} from "../actions/types";

const initialState = {
  isAuthenticated: localStorage.token ? true : false,
  products: [],
  shop: {},
  user: null,
  loading: false,
  success: false,
  failed: false,
  token: null,
  error: {},
  reset: false,
  logged_out: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MY_PRODUCTS:
      return {
          ...state,
          products: action.payload
      };
      case GET_SHOP:
          return {
              ...state,
              shop: action.payload
          }
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case LOGIN_SUCCESS:
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        isAuthenticated: true,
        success: true,
        failed: false,
        loading: false,
        reset: true,
      };
    case LOGIN_FAIL:
    case SIGN_UP_FAIL:
    case GET_SHOP_ERROR:
    case GET_MY_PRODUCTS_ERROR:
      return {
        ...state,
        success: false,
        failed: true,
        loading: false,
        error: action.payload,
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
