import { Outlet, useLocation, useNavigate } from "react-router";
import { Header } from "../header";
import { Footer } from "../footer";
import { useAppDispatch, useAppSelector } from "../../Utils/redux";
import useDebounce from "../../hooks/useDebounce";
import { getProductFail, getProductRequest, getProductSuccess } from "../../redux/reducer/productSlice";
import { useEffect } from "react";
import { getData } from "../../services/callApi";
import { getCartSuccess } from "../../redux/reducer/cartSlice";

export const PrivateLayout = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { pagination, searchValue } = useAppSelector((state) => state.products);
  const valueDebounce = useDebounce(searchValue || "", 2000);
  useEffect(() => {
    dispatch(getProductRequest());
    getData("products", {
      title_like: valueDebounce,
      _per_page: pagination._limit,
      _page: pagination._page,
    })
      .then((response) => {
        dispatch(getProductSuccess({ products: response.data, pagination: response.pagination }));
        if (location.pathname === "/shop/") {
          console.log(pagination);

          navigate({
            pathname: location.pathname,
            search: `?title_like=${valueDebounce}&_per_page=${pagination._limit}&_page=${pagination._page}`,
          });
        }
      })
      .catch((error) => {
        console.log(error.message);
        dispatch(getProductFail());
      });
  }, [valueDebounce, pagination._page, pagination._limit]);

  //get carts
  useEffect(() => {
    getData("carts")
      .then((response) => {
        dispatch(getCartSuccess({ carts: response }));
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <>
      <header>
        <Header />
      </header>
      <Outlet />
      <footer>
        <Footer />
      </footer>
    </>
  );
};
