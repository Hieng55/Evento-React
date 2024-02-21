import { createProduct, updateProduct } from "../../../services/callApi";
import Button from "../../../shared/button";
import { useAppDispatch, useAppSelector } from "../../../Utils/redux";
import { getCartSuccess } from "../../../redux/reducer/cartSlice/index.js";

export const Cards = () => {
  const { products } = useAppSelector((state) => state.products);
  const { carts } = useAppSelector((state) => state.carts);
  const dispatch = useAppDispatch();

  function handleAddCart(id: number | string) {
    const product = products.find((product) => product.id === id);
    const existingCart = carts.find((cart) => cart.id === id);
    if (product) {
      const updatedCart = {
        ...product,
        quantity: existingCart ? existingCart.quantity + 1 : 1,
      };

      if (existingCart) {
        updateProduct(updatedCart.id, updatedCart, "carts");
        const updatedCarts = carts.map((cart) => (cart.id === updatedCart.id ? updatedCart : cart));
        dispatch(getCartSuccess({ carts: updatedCarts }));
      } else {
        createProduct(updatedCart, "carts");
        const newCartsArray = [...carts, updatedCart];
        dispatch(getCartSuccess({ carts: newCartsArray }));
      }
    }
  }

  return (
    <div className="shop-product mt-5 flex flex-wrap gap-5 justify-center pt-7 pb-7">
      {products.length > 0
        ? products.map((item) => {
            return (
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
                    <Button
                      onClick={() => {
                        handleAddCart(item.id);
                      }}
                      fullWidth
                      className="group-hover:bg-ctGreen5 mt-2 rounded duration-500"
                    >
                      ADD CART
                    </Button>
                  </div>
                </div>
              </div>
            );
          })
        : "no product"}
    </div>
  );
};
