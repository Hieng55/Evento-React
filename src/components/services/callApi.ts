import restClient from "./apiService";
import { ApiResponse } from "./interFaceApi";

export function getData(link: string, params?: object) {
  return restClient({
    url: `${link}`,
    params,
  });
}
export function createProduct(productData: ApiResponse, link: string) {
  return restClient({
    url: `${link}`,
    method: "POST",
    data: productData,
  });
}

export function updateProduct(id: number | string, updateData: ApiResponse, link: string) {
  return restClient({
    url: `${link}/${id}`,
    method: "PUT",
    data: updateData,
  });
}
