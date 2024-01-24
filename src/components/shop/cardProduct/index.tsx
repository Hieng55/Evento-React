import { useEffect, useState } from "react";
import Button from "../../../shared/button";
import { getData } from "../../../services/apiService";
import { ApiResponse } from "../../../services/interFaceApi";

export const Cards = () => {
  const [data, setData] = useState<ApiResponse[] | null>([]);
  useEffect(() => {
    const fetchData = async () => {
      const dataRes = await getData();
      setData(dataRes);
    };
    fetchData();
  }, []);

  return (
    <div className="shop-product mt-5 flex flex-wrap gap-5 justify-center pt-7 pb-7">
      {data
        ? data.map((item) => {
            return (
              <div key={item.id} className="card w-1/5 hover:shadow-ctShadow1 transition duration-500 cursor-pointer">
                <div className="image overflow-hidden h-60 ">
                  <img className="object-cover w-full h-full" src={item.image} alt="" />
                </div>
                <div className="content bg-slate-200 p-2">
                  <span className="text-gray-500 text-xs">{item.category}</span>
                  <h5 className="text-ctBlue7 text-sm font-medium mt-2 mb-2 ">{item.title}</h5>
                  <h4>
                    <span className="text-red-600 font-semibold mr-2">${item.price}</span>
                    <del className="text-slate-500 text-sm">${item.price}</del>
                  </h4>
                  <Button text="ADD CART" width="w-full" className="bg-ctGreen5 mt-2" />
                </div>
              </div>
            );
          })
        : "loading"}
    </div>
  );
};
