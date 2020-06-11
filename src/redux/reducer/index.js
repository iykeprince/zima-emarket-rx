import { combineReducers } from "redux";
import marketReducer from "./marketReducer";
import categoryReducer from "./categoryReducer";
import productReducer from "./productReducer";
import authReducer from "./authReducer";

export default combineReducers({
  markets: marketReducer,
  categories: categoryReducer,
  products: productReducer,
  auth: authReducer
});
