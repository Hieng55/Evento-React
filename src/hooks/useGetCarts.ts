import { useQuery } from "@tanstack/react-query";
import { getData } from "../services/callApi";

export default function useGetCarts() {
  const { data } = useQuery({
    queryKey: ["cartsData"],
    queryFn: () => getData("carts"),
  });
  return { data };
}
