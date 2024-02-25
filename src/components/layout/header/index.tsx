import React from "react";
import Button from "../../../shared/button/index";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/router";

const Header = () => {
  const res = useAppSelector((state) => state.res);
  const router = useRouter();

  React.useEffect(() => {
    if (res.access_token === "" || res.email === "") {
      router.push("/login");
    }
  }, [res, router]);

  return (
    <>
      <div
        className="header h-16 fixed top-0 w-full shadow-ctShadow1 
      p-2 flex  bg-white z-30"
      >
        <div className="w-full header-info flex justify-between items-center">
          <div className=" text-2xl flex items-center font-semibold">NEXT.JS</div>
          <div className=" mr-2 flex items-center gap-3">
            <h4 className="text-blue-500">{res.email.length > 0 ? `HI, ${res.email} admin` : ""}</h4>
            <Button className="px-3 py-3 rounded-md bg-red-600">LOG OUT</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
