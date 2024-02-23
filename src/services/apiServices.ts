import axios from "axios";
import { ApiResponse } from "./interface";

const API_URL = "http://localhost:4444/api";

export default function restClient({
  url,
  method = "GET",
  params,
  data,
}: {
  url: string;
  method?: "POST" | "GET" | "PUT" | "PATCH" | "DELETE";
  params?: object;
  data?: ApiResponse;
}) {
  return axios({
    url: `${API_URL}/${url}`,
    method,
    params,
    data,
  }).then((res) => res.data);
}
