import { Header } from "./header";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "../../../App.css";
import { useEffect } from "react";

export const PrivateLayout = () => {
  console.log("render");
  const navigate = useNavigate();
  const location = useLocation();
  const params = Object.fromEntries(new URLSearchParams(location.search).entries());
  params.login = "true";
  useEffect(() => {
    if (params.login !== "true") {
      navigate(`/login/?login=false`);
    } else {
      navigate(`/?login=true`);
    }
  }, [navigate, params.login]);

  return (
    <>
      <Header params={params.login} />
      <Outlet />
    </>
  );
};
