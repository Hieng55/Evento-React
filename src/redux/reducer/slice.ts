import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface TRes {
  access_token: string;
  email: string;

}
const initialState: TRes = {
  access_token: "",
  email: "",
  
};
const dataSlice = createSlice({
  name: "res",
  initialState,
  reducers: {
    getDataSuccess: (state, action: PayloadAction<TRes>) => {
      state.access_token = action.payload.access_token;
      state.email = action.payload.email;
    },
 
  },
});
export const { getDataSuccess } = dataSlice.actions;
export default dataSlice.reducer;
