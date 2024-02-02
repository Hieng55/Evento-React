import { useLocation } from "react-router-dom";
import { Button } from "../../../shared/button";

export const Login = () => {
  const params = Object.fromEntries(new URLSearchParams(useLocation().search));
  console.log(params.login, "params");

  return (
    <>
      <h1>Login page</h1>
      <Button params={params.login} />
    </>
  );
};
