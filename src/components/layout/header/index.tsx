import logo from "../../../assets/logo/logo.png";
import { useAppDispatch, useAppSelector } from "../../Utils/redux";
import { CartIcon } from "../../icons/info/Cart";
import { Search } from "../../icons/info/Search";
import { User } from "../../icons/info/User";
import { setSearchValue } from "../../redux/action/action";

import {} from "../../redux/reducer/productDataReducer";
import { getSearchValue } from "../../redux/reducer/searchReducer";

import Button from "./../../shared/button/index";
import { Input } from "./../../shared/input/index";
import { Cart } from "../../shop/cardProduct/interface";
interface propsHeader {
  carts: Cart[];
}
export const Header = ({ carts }: propsHeader) => {
  console.log(carts);

  const menuList = ["HOME", "SHOP", "BLOG", "ABOUT US", "CONTACT"];
  const value = useAppSelector(getSearchValue);
  const dispatch = useAppDispatch();
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
                value={value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  dispatch(setSearchValue(e.target.value));
                }}
              />
              <Button className="px-3 py-3 rounded-md bg-ctBlue6">
                <Search className="w-5 h-5 text-white" />
              </Button>
            </div>
            <Button className="px-3 py-3 rounded-full bg-red-600">
              <User className="w-5 h-5 text-white" />
            </Button>

            <div className="relative">
              <Button className="px-3 py-3 rounded-full bg-blue-600">
                <CartIcon className="w-5 h-5 text-white" />
              </Button>
              <p
                className="bg-red-500 w-5 h-5 flex-columns justify-center 
              rounded-full absolute text-white -top-1 -right-1 text-xs"
              >
                {carts.length}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
