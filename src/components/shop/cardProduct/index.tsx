import Button from "../../shared/button/index";
import { createProduct, updateProduct } from "../../services/callApi";

import { useAppSelector } from "../../Utils/redux";
import { getProductsData } from "../../redux/reducer/productDataReducer";

import { Cart } from "./interface";

interface PropsCards {
  setCarts: React.Dispatch<React.SetStateAction<Cart[]>>;
  carts: Cart[];
}

export const Cards = ({ setCarts, carts }: PropsCards) => {
  const products = useAppSelector(getProductsData);
  function handleAddCart(id: number | string) {
    const product = products.find((product) => product.id === id);

    const existingCart = carts.find((cart) => cart.id === id);
    console.log(carts);

    if (product) {
      const updatedCart = {
        ...product,
        quantity: existingCart ? existingCart.quantity + 1 : 1,
      };
      if (existingCart) {
        console.log("Updating existing cart");
        updateProduct(updatedCart.id, updatedCart, "carts");
        setCarts((prevCarts) => prevCarts.map((cartCurrent) => (cartCurrent.id === updatedCart.id ? updatedCart : cartCurrent)));
      } else {
        console.log("Adding new cart");
        createProduct(updatedCart, "carts");
        setCarts([...carts, updatedCart]);
      }
    }
  }

  return (
    <div className="shop-product mt-5 flex flex-wrap gap-5 justify-center pt-7 pb-7">
      {products.length > 0
        ? products.map((item) => {
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
                    className="bg-ctGreen5 mt-2 rounded"
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
