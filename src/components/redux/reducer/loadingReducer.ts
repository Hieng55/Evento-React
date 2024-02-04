import { Product } from "../action/constants";
import { RootState } from "../store";

const initialState = {
  loading: false,
};
interface Loading {
  type: string;
  payload: boolean;
}
export function loadingReducer(state = initialState, action: Loading) {
  switch (action.type) {
    case Product.LOADING:
      return { ...state, loading: action.payload };

    default:
      return state;
  }
}
export const getLoading = (state: RootState) => state.loading.loading;
