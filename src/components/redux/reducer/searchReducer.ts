import { Product } from "../action/constants";
import { TAction } from "../interface";
import { RootState } from "../store";

const initialState = {
  value: "",
};

const searchReducer = (state = initialState, action: TAction) => {
  switch (action.type) {
    case Product.SET_SEARCH_VALUE:
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
};
export const getSearchValue = (state: RootState) => state.search.value;
export default searchReducer;
