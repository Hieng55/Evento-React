import { TInput } from "@/pages/login/interface";
import restClient from "./apiService";

export function getData(link: string, access_token: string) {
  return restClient({
    url: `${link}`,
    headers: { Authorization: `Bearer ${access_token}` },
  });
}
export function postData(link: string, infoLogin: TInput) {
  return restClient({
    url: `${link}`,
    method: "POST",
    data: infoLogin,
  });
}

export function updateProduct(id: number | string, updateData: TInput, link: string) {
  return restClient({
    url: `${link}/${id}`,
    method: "PUT",
    data: updateData,
  });
}
