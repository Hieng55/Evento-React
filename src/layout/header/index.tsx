import logo from "../../assets/logo/logo.png";
import { CartIcon } from "../../icons/info/Cart";
import { User } from "../../icons/info/User";
import Button from "./../../shared/button/index";
import { Input } from "./../../shared/input/index";
import { getSearch } from "../../redux/reducer/productSlice/index.js";
import { useAppDispatch, useAppSelector } from "../../Utils/redux.js";
import { Search } from "../../icons/info/Search.js";
import { useNavigate } from "react-router";

export const Header = () => {
  const menuList = ["HOME", "SHOP", "BLOG", "ABOUT US", "CONTACT"];
  const { searchValue } = useAppSelector((state) => state.products);
  const { carts } = useAppSelector((state) => state.carts);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  function handleCart() {
    navigate(`/cart`);
  }
  return (
    <>
      <div
        className="header h-16 fixed top-0 w-full shadow-ctShadow1 
      p-2 flex  bg-white z-30"
      >
        <div className="w-2/6 overflow-hidden">
          <img className=" ml-8 object-cover" src={logo} alt="" />
        </div>
        <ul className="flex items-center justify-center gap-3 w-2/6">
          {menuList.map((item) => (
            <li key={item} className="menu-text">
              {item}
            </li>
          ))}
        </ul>

        <div className="header-info flex-columns w-2/6 justify-end">
          <div className="flex-columns gap-5 mr-2">
            <div className="flex gap-1">
              <Input
                focus="primary"
                className="rounded"
                placeholder="Search"
                sizeInput="large"
                value={searchValue}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  dispatch(getSearch(e.target.value));
                }}
              />
              <Button className="px-3 py-3 rounded-md bg-purple-900">
                <Search className="w-5 h-5 text-white" />
              </Button>
            </div>
            <Button className="px-3 py-3 rounded-full bg-red-600">
              <User className="w-5 h-5 text-white" />
            </Button>

            <div className="relative">
              <Button onClick={handleCart} className="px-3 py-3 rounded-full bg-blue-600">
                <CartIcon className="w-5 h-5 text-white" />
              </Button>
              <p
                className="bg-red-500 w-5 h-5 flex-columns justify-center 
              rounded-full absolute text-white -top-1 -right-1 text-xs"
              >
                {carts ? `${carts.length}` : `0`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
