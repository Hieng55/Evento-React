import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/shared/button";
import Input from "@/shared/input";
import { TInfoLogin, TInput } from "./interface";
import { postData } from "@/services/callApi";
import { setLogin } from "@/utils";
import PublicLayout from "@/components/layout/publicLayout";

const schema = z.object({
  email: z.string().min(1, "Please enter email").trim(),
  password: z.string().min(1, "Please enter lastName").trim(),
});

interface PropsLogin {
  setInfoLogin: React.Dispatch<React.SetStateAction<TInfoLogin | null>>;
}

const Login = ({ setInfoLogin }: PropsLogin) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TInput>({ resolver: zodResolver(schema) });

  const onSubmit = (data: TInput) => {
    postData("login", data)
      .then((response) => {
        setLogin(response);
        setInfoLogin(response);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <div className="login w-full h-screen flex justify-center items-center">
        <form onSubmit={handleSubmit(onSubmit)} className="w-2/5 bg-gray-300 p-5 rounded-md">
          <h1 className="text-center text-2xl text-orange-500">LOGIN ADMIN</h1>
          <div className="email mt-3">
            <label className="mb-2 block">Email</label>
            <Input fullWidth {...register("email")} />
            <span className="text-red-600 font-semibold ">{errors.email?.message}</span>
          </div>
          <div className="password mt-3">
            <label className="mb-2 block">Password</label>
            <Input fullWidth {...register("password")} />
          </div>
          <span className="text-red-600 font-semibold">{errors.password?.message}</span>
          <Button fullWidth className="rounded-md px-3 py-3 mt-3 hover:bg-ctGreen5 duration-500">
            SUBMIT
          </Button>
        </form>
      </div>
    </>
  );
};
Login.getLayout = function getLayout(page: React.ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};
export default Login;
