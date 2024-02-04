import { TPagination } from "../../shop/pagination/interface";
import { Product } from "../action/constants";
import { RootState } from "../store";

const initialState = {
  pagination: { _page: 1, _limit: 10, _totalRows: 0 },
};
interface TActionPagination {
  type: string;
  payload: TPagination;
}
const paginationReducer = (state = initialState, action: TActionPagination) => {
  switch (action.type) {
    case Product.SET_PAGINATION:
      return { ...state, pagination: action.payload };
    default:
      return state;
  }
};
export const getPagination = (state: RootState) => state.pagination.pagination;
export default paginationReducer;
