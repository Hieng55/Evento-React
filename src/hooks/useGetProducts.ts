import { useQuery } from "@tanstack/react-query";
import { getData } from "../services/callApi";
import { useLocation } from "react-router";

export default function useGetProducts() {
  const { search } = useLocation();
  const urlParams = new URLSearchParams(search);
  const page = urlParams.get("_page");
  const searchValue = urlParams.get("title_like");
  const { data, isLoading } = useQuery({
    queryKey: ["productsData", page, searchValue],
    queryFn: () => getData("products", { title_like: searchValue, _page: page, _limit: 10 }),
    staleTime: 60 * 1000,
  });
  return { data, isLoading };
}
