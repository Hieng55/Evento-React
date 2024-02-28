import { TInput } from "@/pages/login/interface";
import axios from "axios";

const API_URL = "http://localhost:8000/auth";

export default function restClient({
  url,
  method = "GET",
  headers,
  data,
}: {
  url: string;
  method?: "POST" | "GET" | "PUT" | "PATCH" | "DELETE";
  headers?: {
    Authorization: string;
  };
  data?: TInput;
}) {
  return axios({
    url: `${API_URL}/${url}`,
    method,
    headers,
    data,
  }).then((res) => res.data);
}
