import { useNavigate } from "react-router-dom";
import { PropsCheckLogin } from "../../layout/privateLayout/header/interface";

export const Button = ({ params }: PropsCheckLogin) => {
  const navigate = useNavigate();
  function handleLogin() {
    console.log("handle");
    if (params === "true") {
      navigate("/login/?login=false");
    } else {
      navigate("/?login=true");
    }
  }
  return (
    <button type="button" className={`p-2 block text-white rounded ${params === "true" ? "bg-green-600" : "bg-red-600"}`} onClick={handleLogin}>
      {params !== "false" ? "log out" : "log in"}
    </button>
  );
};
