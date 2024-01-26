import { useEffect, useState, useRef } from "react";
import { Footer } from "../layout/footer";
import { Header } from "../layout/header";
import { Banner } from "./bannerShop";
import { Cards } from "./cardProduct";
import { ApiResponse } from "../services/interFaceApi";
import useDebounce from "../hooks/useDebounce";
import { getProducts } from "../services/callApi";
import { Pagination } from "./pagination/index";
import { Cart } from "./cardProduct/interface";

export const Shop = () => {
  const [value, setValue] = useState<string>("");
  const [products, setProducts] = useState<ApiResponse[]>([]);
  const [carts, setCarts] = useState<Cart[]>([]);
  const [pagination, setPagination] = useState<{ _page: number; _limit: number; _totalRows: number } | null>(null);
  const valueDebounce = useDebounce(value, 2000);
  const currentPageRef = useRef(1);

  //getProduct
  useEffect(() => {
    getProducts("products", {
      title_like: valueDebounce,
      _per_page: 10,
      _page: currentPageRef.current,
    }).then((response) => {
      setProducts(response.data);
      setPagination(response.pagination);
    });
  }, [valueDebounce, currentPageRef]);

  //Change page
  const handlePageChange = (newPage: number) => {
    currentPageRef.current = newPage;
    getProducts("products", {
      _page: newPage,
    }).then((response) => {
      setProducts(response.data);
      setPagination({
        _page: newPage,
        _limit: pagination?._limit ?? 10,
        _totalRows: pagination?._totalRows ?? products.length,
      });
    });
  };

  return (
    <div className="bg-ctGrayBg ">
      <header>
        <Header setValue={setValue} value={value} carts={carts} />
      </header>
      <main className="p-5">
        <Banner />
        <Cards data={products} setCarts={setCarts} carts={carts} />
        <Pagination handlePageChange={handlePageChange} pagination={pagination} productLength={products.length} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
