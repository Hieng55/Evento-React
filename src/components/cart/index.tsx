import { useNavigate } from "react-router";
import { useAppSelector } from "../../Utils/redux";
import Button from "../../shared/button";

export const Cart = () => {
  const { carts } = useAppSelector((state) => state.carts);
  const navigate = useNavigate();

  function handleViewCartDetail(id: number | string) {
    navigate(`/cart/${id}`);
  }
  return (
    <div>
      <div className="shop-product mt-14 flex flex-wrap gap-5 justify-center pt-7 pb-7">
        {carts.length > 0
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
                    <div className="flex justify-center">
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
