import { useRef } from "react";
import Button from "./../../shared/button/index";

interface PropsPagination {
  pagination: { _page: number; _limit: number; _totalRows: number } | null;
  productLength: number;
  handlePageChange: (newPage: number) => void;
}

export const Pagination: React.FC<PropsPagination> = ({ pagination, productLength, handlePageChange }) => {
  console.log("renderPagination");

  const totalPagination = useRef<number | null>(null);
  if (pagination) {
    totalPagination.current = pagination._totalRows / productLength;
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
