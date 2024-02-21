import { useNavigate } from "react-router";
import Button from "../../shared/button";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex justify-center items-center bg-red-600 text-white">
      <div className="text-center">
        <h1 className="text-7xl font-semibold">404</h1>
        <p
          className="font-semibold mt-3 mb-3
        "
        >
          WE ARE SORRY,BUT THE PAGE YOU REQUESTED WAS NOT FOUND
        </p>

        <Button
          onClick={() => {
            navigate("/shop/");
          }}
          className="bg-red-500 text-white-600 rounded-3xl px-7 mt-2 font-semibold duration-500 hover:bg-white hover:opacity-100 hover:text-red-500"
        >
          GO SHOP
        </Button>
      </div>
    </div>
  );
};
