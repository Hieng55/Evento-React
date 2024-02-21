import { useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../../Utils/redux.js";
import Button from "../../../shared/button/index.js";
import { getProductSuccess } from "../../../redux/reducer/productSlice/index.js";

export const Pagination = () => {
  const dispatch = useAppDispatch();

  const totalPagination = useRef<number | null>(null);
  const { products, pagination } = useAppSelector((state) => state.products);
  totalPagination.current = pagination && pagination._totalRows && pagination._limit ? Math.ceil(pagination._totalRows / pagination._limit) : 0;

  function handlePageChange(page: number) {
    dispatch(getProductSuccess({ products: products, pagination: { _page: page, _limit: 10, _totalRows: totalPagination.current ?? 0 } }));
  }
  return (
    <div className="pagination flex justify-center gap-2">
      {Array.from({ length: totalPagination.current ?? 0 }, (_, index) => (
        <Button
          className={`w-10 h-10 rounded-full  ${index + 1 === pagination?._page ? "bg-orange-500" : ""} `}
          key={index}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </Button>
      ))}
    </div>
  );
};
