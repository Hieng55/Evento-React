import { useEffect, useState, useRef } from "react";
import { Footer } from "../layout/footer";
import { Header } from "../layout/header";
import { Banner } from "./bannerShop";
import { Cards } from "./cardProduct";
import { ApiResponse } from "../services/interFaceApi";
import useDebounce from "../hooks/useDebounce";
import { getData } from "../services/callApi";
import { Pagination } from "./pagination/index";
import { Cart } from "./cardProduct/interface";
import { TPagination } from "./pagination/interface";

export const Shop = () => {
  const [value, setValue] = useState<string>("");
  const [products, setProducts] = useState<ApiResponse[]>([]);
  const [carts, setCarts] = useState<Cart[]>([]);
  const [pagination, setPagination] = useState<TPagination>({
    _page: 1,
  });

  const valueDebounce = useDebounce(value, 2000);
  const perPage = useRef<number>(10);
  console.log("render");

  //getProduct
  useEffect(() => {
    getData("products", {
      title_like: valueDebounce,
      _per_page: perPage.current,
      _page: pagination._page,
    }).then((response) => {
      setProducts(response.data);
      setPagination(response.pagination);
    });
  }, [valueDebounce, pagination._page]);
  //get carts
  useEffect(() => {
    getData("carts").then((response) => {
      setCarts(response);
    });
  }, []);

  return (
    <div className="bg-ctGrayBg ">
      <header>
        <Header setValue={setValue} value={value} carts={carts} />
      </header>
      <main className="p-5">
        <Banner />
        <Cards data={products} setCarts={setCarts} carts={carts} />
        <Pagination setPagination={setPagination} pagination={pagination} products={products} perPage={perPage} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
