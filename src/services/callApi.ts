import restClient from "./apiService";
import { ApiResponse } from "./interFaceApi";

export function getData(link: string, params?: object) {
  return restClient({
    url: `${link}`,
    params,
  });
}


export async function createProduct(productData: ApiResponse, link: string): Promise<ApiResponse> {
  return restClient({
    url: `${link}`,
    method: "POST",
    data: productData,
  }) as Promise<ApiResponse>;
}

export function updateProduct(id: number | string, updateData: ApiResponse, link: string) {
  return restClient({
    url: `${link}/${id}`,
    method: "PUT",
    data: updateData,
  });
}
export function deleteProduct(id: number | string, link: string) {
  return restClient({
    url: `${link}/${id}`,
    method: "DELETE",
  });
}
