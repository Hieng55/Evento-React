import { Banner } from "./bannerShop";
import { Cards } from "./cardProduct";
import { Pagination } from "./pagination";
import useGetProducts from "../../hooks/useGetProducts";

export const Shop = () => {
  const { isLoading } = useGetProducts();
  return (
    <div className="bg-ctGrayBg ">
      <div className={isLoading ? "loading fixed top-0 w-screen h-screen bg-white flex items-center justify-center z-40" : "hidden"}>
        <img src="https://m2.alothemes.com/orfarm/media/magepow/speedoptimizer/default/loading_3.gif" alt="" />
      </div>
      <main className="p-5">
        <Banner />
        <Cards />
        <Pagination />
      </main>
    </div>
  );
};
//
// setPageChange={setPageChange} data={data}
// setPageChange={setPageChange} data={data}
// const { data, isLoading } = useQuery<{
//   data: ApiResponse[];
//   pagination: TPagination;
// }>({
//   queryKey: ["productsData", { page: pageChange }],
//   queryFn: () => getData("products", { _page: pageChange }),
//   staleTime: 60 * 1000,
// });
