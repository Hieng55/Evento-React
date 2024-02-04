import { ApiResponse } from "../../services/interFaceApi";
import { Cart } from "../../shop/cardProduct/interface";
import { TPagination } from "../../shop/pagination/interface";
import { Product } from "./constants";

export const setProducts = (products: ApiResponse[]) => ({
  type: Product.SET_PRODUCTS,
  payload: products,
});

export const setCarts = (carts: Cart[]) => ({
  type: Product.SET_CARTS,
  payload: carts,
});

export const setPagination = (pagination: TPagination) => ({
  type: Product.SET_PAGINATION,
  payload: pagination,
});

export const setSearchValue = (value: string) => {
  return {
    type: Product.SET_SEARCH_VALUE,
    payload: value,
  };
};
export const updateCart = (carts: Cart[]) => {
  return {
    type: Product.UPDATE_PRODUCT,
    payload: carts,
  };
};
export const loadingPage = (loading: boolean) => {
  return {
    type: Product.LOADING,
    payload: loading,
  };
};

