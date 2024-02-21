import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Cart } from "../../../components/shop/cardProduct/interface";

interface CartsDataState {
  carts: Cart[];
}
const initialState: CartsDataState = {
  carts: [],
};
const cartDataSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    // getCartRequest: (state) => {
    //   state.loading = true;
    // },
    getCartSuccess: (state, action: PayloadAction<CartsDataState>) => {
      const { carts } = action.payload;
      state.carts = carts;
    },
    // getCartFail: (state) => {
    //   state.loading = false;
    // },
  },
});
export const { getCartSuccess} = cartDataSlice.actions;
export default cartDataSlice.reducer;
