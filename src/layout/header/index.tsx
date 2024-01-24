import logo from "../../assets/logo/logo.png";
import { Cart } from "../../icons/info/Cart";
import { Search } from "../../icons/info/Search";
import { User } from "../../icons/info/User";
import Button from "./../../shared/button/index";

import { Input } from "./../../shared/input/index";

export const Header = () => {
  const menuList = ["HOME", "SHOP", "BLOG", "ABOUT US", "CONTACT"];
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
          <div className="flex-columns gap-5 mr-8">
            <div className="flex gap-1">
              <Input type="primary" placeholder="Enter Search" />
              <Button
                text=""
                className="bg-ctBlue5 flex items-center justify-center mt-0"
                width="w-10"
                height="h-10"
                icon={<Search className="w-5 h-5 text-white" />}
              />
            </div>
            <Button
              text=""
              width="w-10"
              height="h-10"
              round="rounded-full"
              className="bg-red-400 flex items-center justify-center mt-0"
              icon={<User className="w-5 h-5 text-white" />}
            />
            <div className="relative">
              <Button
                text=""
                width="w-10"
                height="h-10"
                className="flex items-center justify-center rounded-full mt-0"
                icon={<Cart className="w-5 h-5 text-white" />}
              />
              <p className="bg-red-500 w-5 h-5 flex-columns justify-center 
              rounded-full absolute text-white -top-2 -right-1">0</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
