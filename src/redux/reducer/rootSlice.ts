// redux/reducers.js
import { combineReducers } from "redux";
import dataSlice from "./slice";

const rootReducer = combineReducers({
  res: dataSlice,
});

export default rootReducer;
