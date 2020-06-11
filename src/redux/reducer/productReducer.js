import { FETCH_PRODUCTS, GET_ERRORS } from "../actions/types";

const initialState = {
  items: [],
  loading: false,
  errors: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        items: action.payload,
      };
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
