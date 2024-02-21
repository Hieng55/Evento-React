import { useAppSelector } from "../../Utils/redux";
import { useParams } from "react-router-dom";

export const CartDetail = () => {
  console.log("CartDetail");

  const { id } = useParams();
  const { carts } = useAppSelector((state) => state.carts);

  const cart = carts.find((cart) => cart.id == id);
  console.log(cart);

  return (
    <div className="m-20">
      {id} {cart?.title}
    </div>
  );
};
