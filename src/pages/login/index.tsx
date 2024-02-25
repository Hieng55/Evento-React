import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/shared/button";
import Input from "@/shared/input";
import axios from "axios";
import { useRouter } from "next/router";
import { TInput } from "./interface";
import { useAppDispatch } from "@/redux/hooks";
import { getDataSuccess } from "@/redux/reducer/slice";

const schema = z.object({
  email: z.string().min(1, "Please enter email").trim(),
  password: z.string().min(1, "Please enter lastName").trim(),
});

const Login = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TInput>({ resolver: zodResolver(schema) });
  const router = useRouter();
  const onSubmit = async (data: TInput) => {
    try {
      const res = await axios.post("http://localhost:8000/auth/login", data);
      router.push("/");
      dispatch(getDataSuccess(res.data));
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="login w-full h-screen flex justify-center items-center">
        <form onSubmit={handleSubmit(onSubmit)} className="w-2/5 bg-gray-300 p-5 rounded-md">
          <h1 className="text-center text-2xl text-orange-500">LOGIN ADMIN</h1>
          <div className="email mt-3">
            <label className="mb-2 block">Email</label>
            <Input fullWidth className="h-14" {...register("email")} />
            <span className="text-red-600 font-semibold">{errors.email?.message}</span>
          </div>
          <div className="password mt-3">
            <label className="mb-2 block">Password</label>
            <Input fullWidth className="h-14" {...register("password")} />
          </div>
          <span className="text-red-600 font-semibold">{errors.password?.message}</span>
          <Button fullWidth className="rounded-md py-3 mt-3 hover:bg-ctGreen5 duration-500">
            SUBMIT
          </Button>
        </form>
      </div>
    </>
  );
};

export default Login;
