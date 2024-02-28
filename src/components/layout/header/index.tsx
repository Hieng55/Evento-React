import Button from "../../../shared/button/index";
import { useRouter } from "next/router";
import { removeInfoLogin } from "@/utils";
import { TInfoLogin } from "@/pages/login/interface";
import Link from "next/link";

const Header = ({ infoLogin }: { infoLogin: TInfoLogin | null }) => {
  const router = useRouter();
  const menu = ["/", "/blog"];

  const handleLogOut = () => {
    removeInfoLogin();
    router.push("/login");
  };

  return (
    <>
      <div
        className="header h-16 fixed top-0 w-full shadow-ctShadow1 
      p-2 flex  bg-white z-30"
      >
        <div className="w-full header-info flex justify-between items-center">
          <div className=" text-2xl flex items-center font-semibold">NEXT.JS</div>
          <ul className="flex gap-2">
            {menu.map((item, index) => {
              return (
                <li key={index}>
                  <Link className={router.pathname === item ? "text-red-500" : "text-black"} href={item}>
                    {item === "/" ? "Home" : item.replace("/", "")}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className=" mr-2 flex items-center gap-3">
            <h4 className="text-blue-500">{infoLogin && infoLogin.access_token ? `HI, ${infoLogin.email} admin` : ""}</h4>
            <Button onClick={handleLogOut} className="px-3 py-3 rounded-md bg-red-600">
              {infoLogin && infoLogin.access_token ? "LOG OUT" : "LOG IN"}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
