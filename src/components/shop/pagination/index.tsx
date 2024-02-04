import { useRef } from "react";
import Button from "./../../shared/button/index";
import { useAppDispatch, useAppSelector } from "../../Utils/redux";
import { getPagination } from "../../redux/reducer/paginationReducer";
import { setPagination } from "../../redux/action/action";

export const Pagination = () => {
  const dispatch = useAppDispatch();
  const totalPagination = useRef<number | null>(null);
  const pagination = useAppSelector(getPagination);
  console.log(pagination);

  totalPagination.current = pagination && pagination._totalRows && pagination._limit ? Math.ceil(pagination._totalRows / pagination._limit) : 0;

  function handlePageChange(page: number) {
    dispatch(setPagination({ _page: page }));
  }
  return (
    <div className="pagination flex justify-center gap-2">
      {Array.from({ length: totalPagination.current ?? 0 }, (_, index) => (
        <Button
          className={`w-10 h-10 rounded-full  ${index + 1 === pagination._page ? "bg-orange-500" : ""} `}
          key={index}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </Button>
      ))}
    </div>
  );
};
