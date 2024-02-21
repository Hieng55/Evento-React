import { combineReducers } from "redux";
import productDataSlice from "./productSlice/index";
import cartDataSlice from "./cartSlice/index";

export const reducer = combineReducers({
  products: productDataSlice,
  carts: cartDataSlice,
});
