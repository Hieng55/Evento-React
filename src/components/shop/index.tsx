import { useEffect, useState } from "react";
import { Footer } from "../layout/footer";
import { Header } from "../layout/header";
import { Banner } from "./bannerShop";
import { Cards } from "./cardProduct";
import useDebounce from "../hooks/useDebounce";
import { getData } from "../services/callApi";
import { Pagination } from "./pagination/index";
import { useLocation, useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../Utils/redux";
import { getSearchValue } from "../redux/reducer/searchReducer";
import { loadingPage, setPagination, setProducts } from "../redux/action/action";
import { getPagination } from "../redux/reducer/paginationReducer";
import { TPagination } from "./pagination/interface";
import { Cart } from "./cardProduct/interface";
import { getLoading } from "../redux/reducer/loadingReducer";

export const Shop = () => {
  const dispatch = useAppDispatch();
  const value = useAppSelector(getSearchValue);
  const pagination = useAppSelector(getPagination);
  const location = useLocation();
  const navigate = useNavigate();
  const valueDebounce = useDebounce(value, 2000);
  const [carts, setCarts] = useState<Cart[]>([]);
  const loading = useAppSelector(getLoading);
  console.log(loading);

  useEffect(() => {
    dispatch(loadingPage(true));
    getData("products", {
      title_like: valueDebounce,
      _per_page: pagination._limit,
      _page: pagination._page,
    })
      .then((response) => {
        dispatch(setProducts(response.data));
        dispatch(setPagination(response.pagination as TPagination));

        navigate({
          pathname: location.pathname,
          search: `?title_like=${valueDebounce}&_per_page=${pagination._limit}&_page=${pagination._page}`,
        });
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => dispatch(loadingPage(false)));
  }, [valueDebounce, pagination._page, pagination._limit]);

  //get carts
  useEffect(() => {
    dispatch(loadingPage(true));

    getData("carts")
      .then((response) => {
        if (response.length > 0) {
          setCarts(response);
        }
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => dispatch(loadingPage(false)));
  }, []);

  return (
    <div className="bg-ctGrayBg ">
      <div
        className={loading ? "loading fixed top-0 w-screen h-screen bg-white flex items-center justify-center z-40" : "hidden"}
      >
        <img src="https://m2.alothemes.com/orfarm/media/magepow/speedoptimizer/default/loading_3.gif" alt="" />
      </div>
      <header>
        <Header carts={carts} />
      </header>
      <main className="p-5">
        <Banner />
        <Cards setCarts={setCarts} carts={carts} />
        <Pagination />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
