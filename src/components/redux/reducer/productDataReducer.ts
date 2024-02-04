import { ApiResponse } from "../../services/interFaceApi";
import { Product } from "../action/constants";

import { RootState } from "../store";

const initialState = {
  products: [],
};

interface TActionProduct {
  type: string;
  payload: ApiResponse[];
}
const productDataReducer = (state = initialState, action: TActionProduct) => {
  switch (action.type) {
    case Product.SET_PRODUCTS:
      return { ...state, products: action.payload };

    default:
      return state;
  }
};

export const getProductsData = (state: RootState) => state.products.products;
export default productDataReducer;
