import Button from "../../../shared/button";
import { ApiResponse } from "../../../services/interFaceApi.js";
import { Cart } from "./interface.js";
import { createProduct, updateProduct } from "../../../services/callApi";
import { useState } from "react";
import useGetProducts from "../../../hooks/useGetProducts.js";
import useGetCarts from "../../../hooks/useGetCarts.js";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const Cards = () => {
  const [idUpdate, setIdUpdate] = useState<number | string>(0);
  const { data } = useGetProducts();
  console.log(data);

  const { mutate } = useMutation({
    mutationFn: (body: Cart) => createProduct(body, "carts"),
  });

  const updateCartPut = useMutation({
    mutationFn: (body: Cart) => updateProduct(idUpdate, body, "carts"),
  });

  const { data: carts } = useGetCarts();
  const queryClient = useQueryClient();

  function handleAddCart(id: number | string) {
    const product = data?.data.find((product: ApiResponse) => product.id === id);
    const existingCart: Cart = carts.find((cart: ApiResponse) => cart.id === id);

    if (product) {
      if (existingCart) {
        existingCart.quantity += 1;
        setIdUpdate(id);
        updateCartPut.mutate(existingCart, {
          onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["cartsData"] });
          },
        });

      } else {
        const newProduct: Cart = { ...product, quantity: 1 };
        mutate(newProduct, {
          onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["cartsData"] });
          },
        });
      }
    }
  }

  return (
    <div className="shop-product mt-5 flex flex-wrap gap-5 justify-center pt-7 pb-7">
      {data && data?.data.length > 0
        ? data.data.map((item: ApiResponse) => (
            <div key={item.id} className="card w-1/5 hover:shadow-ctShadow1 transition duration-500 cursor-pointer group">
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

                <div>
                  <Button onClick={() => handleAddCart(item.id)} fullWidth className="group-hover:bg-ctGreen5 mt-2 rounded duration-500">
                    ADD CART {carts ? carts.length : "0"}
                  </Button>
                </div>
              </div>
            </div>
          ))
        : "no product"}
    </div>
  );
};
