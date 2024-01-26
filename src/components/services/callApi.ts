import restClient from "./apiService";

export function getProducts(link: string, params?: object) {
  return restClient({
    url: `${link}`,
    params,
  });
}
export function createProduct(productData: object, link: string) {
  return restClient({
    url: `${link}`,
    method: "POST",
    data:  productData ,
  });
}

export function updateProduct(id: number | string, updateData: object, link: string) {
  return restClient({
    url: `${link}/${id}`,
    method: "PUT",
    data:  updateData ,
  });
}
