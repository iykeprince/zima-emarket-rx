import {
  FETCH_MARKETS,
  GET_ERRORS,
  FETCH_MARKET_SHOPS,
} from "../actions/types";

const initialState = {
  items: [],
  market: {},
  loading: false,
  errors: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_MARKETS:
      return {
        ...state,
        items: action.payload,
      };
    case FETCH_MARKET_SHOPS:
      return {
        ...state,
        market: action.payload,
      };
    case GET_ERRORS:
      return {
        ...state,
        items: [],
        market: {},
        errors: action.payload,
      };
    default:
      return state;
  }
}
