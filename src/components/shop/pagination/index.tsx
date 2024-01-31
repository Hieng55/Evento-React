import { useRef } from "react";
import Button from "./../../shared/button/index";
import { TPagination } from "./interface";
import { ApiResponse } from "../../services/interFaceApi";

interface PropsPagination {
  pagination: TPagination;
  products: ApiResponse[];
  perPage: React.MutableRefObject<number>;
  setPagination: React.Dispatch<React.SetStateAction<TPagination>>;
}

export const Pagination: React.FC<PropsPagination> = ({ pagination, products, perPage, setPagination }) => {
  const totalPagination = useRef<number | null>(null);

  if (pagination._totalRows && products) {
    totalPagination.current = Math.ceil(pagination._totalRows / perPage.current);
  }

  function handlePageChange(page: number) {
    setPagination({ ...pagination, _page: page });
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
