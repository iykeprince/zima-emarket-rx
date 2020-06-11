import { FETCH_CATEGORIES, GET_ERRORS } from "./types";
import axios from "axios";

export const fetchCategories = () => async (dispatch) => {
  try {
    const res = await axios.get(`/api/categories`);

    const categories = res.data;
    dispatch({ type: FETCH_CATEGORIES, payload: categories });
  } catch (err) {
    dispatch({ type: GET_ERRORS, payload: err.message });
  }
};
