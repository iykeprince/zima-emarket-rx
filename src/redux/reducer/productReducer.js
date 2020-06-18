import { FETCH_PRODUCTS, GET_ERRORS, PRODUCT_ADD_LOADING, PRODUCT_ADD_SUCCESS } from "../actions/types";

const initialState = {
  items: [],
  loading: false,
  errors: "",
  added: ''
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        items: action.payload,
      };
    case PRODUCT_ADD_SUCCESS:
      return {
        ...state,
        added: action.payload
      }
    case PRODUCT_ADD_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    case GET_ERRORS:
      return {
        ...state,
        items: [],
        errors: action.payload,
      };
    default:
      return state;
  }
}
