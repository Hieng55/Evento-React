import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApiResponse } from "../../../services/interFaceApi";

interface ProductDataState {
  products: ApiResponse[];
  loading?: boolean;
  pagination: { _page: number; _limit: number; _totalRows: number };
  searchValue?: string;
  productDetail?: ApiResponse;
}

const initialState: ProductDataState = {
  products: [],
  loading: false,
  pagination: { _page: 1, _limit: 10, _totalRows: 0 },
  searchValue: "",
};

const productDataSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProductRequest: (state) => {
      state.loading = true;
    },
    getProductSuccess: (state, action: PayloadAction<ProductDataState>) => {
      const { products, pagination } = action.payload;
      state.products = products;
      state.pagination = pagination;
      state.loading = false;
    },
    getProductFail: (state) => {
      state.loading = false;
    },
    getSearch: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const { getProductRequest, getProductSuccess, getProductFail, getSearch } = productDataSlice.actions;

export default productDataSlice.reducer;
