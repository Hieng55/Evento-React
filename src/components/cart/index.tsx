import { useNavigate } from "react-router";
import Button from "../../shared/button";
import useGetCarts from "../../hooks/useGetCarts";
import { Cart } from "../shop/cardProduct/interface";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct } from "../../services/callApi";

export const Carts = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { data: carts }: { data: Cart[] } = useGetCarts();
  const { mutate } = useMutation({
    mutationFn: (id: number | string) => deleteProduct(id, "carts"),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cartsData"] });
    },
  });
  function handleViewCartDetail(id: number | string) {
    navigate(`/cart/${id}`);
  }

  function handleDeleteCart(id: number | string) {
    mutate(id);
  }
  return (
    <div>
      <div className="shop-product mt-14 flex flex-wrap gap-5 justify-center pt-7 pb-7">
        {carts && carts.length > 0
          ? carts.map((item) => {
              return (
                <div key={item.id} className="card w-1/5 hover:shadow-ctShadow1 transition duration-500 cursor-pointer">
                  <div className="image overflow-hidden h-60 ">
                    <img className="object-cover w-full h-full" src={item.image} alt="" />
                  </div>
                  <div className="content bg-slate-200 p-2">
                    <span className="text-gray-500 text-xs">{item.category}</span>
                    <h5 className="text-ctBlue7 text-sm font-medium mt-2 mb-2 truncate">{item.title}</h5>
                    <h4>
                      <span className="text-red-600 font-semibold mr-2">${item.price}</span>
                      <del className="text-slate-500 text-sm">${item.price}</del>
                    </h4>
                    <p className="text-ctBlue7 text-sm font-medium mt-2 mb-2 ">Quantity: {item.quantity}</p>
                    <div className="flex justify-center flex-wrap">
                      <Button className="bg-ctGreen5 mt-2 rounded w-2/4">BUY NOW</Button>
                      <Button
                        onClick={() => {
                          handleViewCartDetail(item.id);
                        }}
                        type="primary"
                        className=" mt-2 rounded w-2/4"
                      >
                        VIEW DETAIL
                      </Button>
                      <Button
                        onClick={() => {
                          handleDeleteCart(item.id);
                        }}
                        type="error"
                        className=" mt-2 rounded w-full"
                      >
                        DELETE
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })
          : "no product"}
      </div>
    </div>
  );
};
