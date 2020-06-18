import { FETCH_CATEGORIES, GET_ERRORS, FETCH_SUB_CATEGORIES, LOADING_SUB_CATEGORIES, LOADING_SUB_CATEGORIES_ERRORS } from "../actions/types";

const initialState = {
  items: [],
  sub_categories: [],
  loading: false,
  errors: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        items: action.payload,
      };
    case FETCH_SUB_CATEGORIES:
      return {
        ...state,
        sub_categories: action.payload
      }
    case LOADING_SUB_CATEGORIES:
      return {
        ...state,
        loading_subcategories: action.payload
      }
    case LOADING_SUB_CATEGORIES_ERRORS:
      return {
        ...state,
        errors: action.payload
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
