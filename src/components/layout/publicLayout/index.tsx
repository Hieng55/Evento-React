import { Outlet } from "react-router-dom";
import { Login } from "./login";

export const PublicLayout = () => {
  return (
    <div>
      <Login />
      <Outlet />
    </div>
  );
};
