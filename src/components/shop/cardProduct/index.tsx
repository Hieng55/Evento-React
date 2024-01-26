import { useEffect } from "react";
import Button from "../../shared/button/index";
import { createProduct, getProducts, updateProduct } from "../../services/callApi";
import { Cart, PropsCards } from "./interface";

export const Cards: React.FC<PropsCards> = ({ data, setCarts, carts }) => {
  console.log("rênder card");
  useEffect(() => {
    getProducts("carts").then((res) => {
      setCarts(res);
    });
  }, [setCarts]);

  function handleAddCart(id: number | string) {
    const product = data.find((product) => product.id === id);
    const cartFind = carts.find((cart) => cart.id === id);

    if (product) {
      const cart: Cart = {
        ...product,
        quantity: 1,
      };

      if (cartFind) {
        const cartUpdate: Cart = { ...cart, quantity: (cartFind.quantity || 0) + 1 };
        updateProduct(cartUpdate.id, cartUpdate, "carts");
        setCarts([...carts, cartUpdate]);
      } else {
        createProduct(cart, "carts");
        setCarts([...carts, cart]);
      }
    }
  }

  return (
    <div className="shop-product mt-5 flex flex-wrap gap-5 justify-center pt-7 pb-7">
      {data.length > 0
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
                  <Button
                    onClick={() => {
                      handleAddCart(item.id);
                    }}
                    fullWidth
                    className="bg-ctGreen5 mt-2 h-10 rounded"
                  >
                    ADD CART
                  </Button>
                </div>
              </div>
            );
          })
        : "no product"}
    </div>
  );
};
