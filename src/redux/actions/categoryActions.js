import { FETCH_CATEGORIES, GET_ERRORS, LOADING_SUB_CATEGORIES, FETCH_SUB_CATEGORIES, LOADING_SUB_CATEGORIES_ERRORS } from "./types";
import axios from "axios";

export const fetchCategories = () => async (dispatch) => {
  try {
    console.log('fetch categories')
    const res = await axios.get(`/api/categories`);

    const categories = res.data;
    console.log('fetching categories', categories);
    dispatch({ type: FETCH_CATEGORIES, payload: categories });
  } catch (err) {
    dispatch({ type: GET_ERRORS, payload: err.message });
  }
};

export const fetchSubCategories = (id) => async (dispatch) => {
  try {
    console.log('sub categories fetsching')
    dispatch({type: LOADING_SUB_CATEGORIES, payload: true});
    const res = await axios.get(`/api/categories/${id}/subcategories`);

    console.log("fetching sub categoires", res.data);
    const subCategories = res.data;
    dispatch({type: FETCH_SUB_CATEGORIES, payload: subCategories});
    dispatch({type: LOADING_SUB_CATEGORIES, payload: false});
  } catch (err) {
    console.log("error", err);
    dispatch({ type: LOADING_SUB_CATEGORIES_ERRORS, payload: err.message });
    dispatch({type: LOADING_SUB_CATEGORIES, payload: false});
  }
}