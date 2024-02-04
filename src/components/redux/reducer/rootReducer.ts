import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import productDataReducer from "./productDataReducer";
import paginationReducer from "./paginationReducer";
import { loadingReducer } from "./loadingReducer";

export const reducer = combineReducers({
  search: searchReducer,
  products: productDataReducer,
  pagination: paginationReducer,
  loading: loadingReducer,
});
