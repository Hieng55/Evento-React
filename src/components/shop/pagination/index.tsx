import Button from "../../../shared/button/index.js";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import useGetProducts from "../../../hooks/useGetProducts.js";

export const Pagination = () => {
  const { search } = useLocation();
  const urlParams = new URLSearchParams(search);
  const searchValue = urlParams.get("title_like");
  const [pages, setPages] = useState<number>(1);
  const navigate = useNavigate();
  const { data } = useGetProducts();
  function handlePageChange(page: number) {
    setPages(page);
    data.pagination.page = pages;
  }

  useEffect(() => {
    if (location.pathname === "/shop/") {
      navigate({
        search: `?title_like=${searchValue !== "" && searchValue !== null ? searchValue : ""}&_per_page=${
          data?.pagination._limit || 10
        }&_page=${pages}`,
      });
    }
  }, [data?.pagination._limit, pages, location.pathname, searchValue]);

  if (!data || !data.pagination || !data.pagination._totalRows || !data.pagination._limit) {
    return null;
  }

  const totalPages = Math.ceil(data.pagination._totalRows / data.pagination._limit);
  console.log(data.pagination._totalRows);

  return (
    <div className="pagination flex justify-center gap-2">
      {Array.from({ length: totalPages }, (_, index) => (
        <Button
          className={`w-10 h-10 rounded-full  ${index + 1 === data.pagination._page ? "bg-orange-500" : ""} `}
          key={index}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </Button>
      ))}
    </div>
  );
};
