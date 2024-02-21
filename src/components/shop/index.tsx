import { useAppSelector } from "../../Utils/redux";
import { Banner } from "./bannerShop";
import { Cards } from "./cardProduct";
import { Pagination } from "./pagination/index";
export const Shop = () => {
  const { loading } = useAppSelector((state) => state.products);
  return (
    <div className="bg-ctGrayBg ">
      <div className={loading ? "loading fixed top-0 w-screen h-screen bg-white flex items-center justify-center z-40" : "hidden"}>
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
