import { useForm } from "react-hook-form";
import Button from "../../shared/button";
import { Input } from "../../shared/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface TInput {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

const schema = z.object({
  firstName: z.string().min(1, "Please enter firstName").trim(),
  lastName: z.string().min(1, "Please enter lastName").trim(),
  email: z.string().min(1, "Please enter email")
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email").trim(),
  phone: z.string().min(1, "Please enter email").regex(/^[0-9]{10}$/, "Invalid phone").trim(),
});

export const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<TInput>({ resolver: zodResolver(schema) });

  const onSubmit = (data: TInput) => console.log(data);

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="w-2/5">
        <div className="bg-red-300 h-16 flex items-center justify-center text-lg rounded-lg font-semibold">
          <h1>Alumni Donation Form</h1>
        </div>
        <form className="mt-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-between gap-2">
            <div className="form-first-name w-2/4">
              <label className="block mb-3">First name</label>
              <Input className={errors.firstName ? "border-2 border-red-500" : ""} placeholder="Enter first name" size="xs" fullWidth {...register("firstName")} />
              <span className="text-red-600 font-semibold">{errors.firstName?.message}</span>
            </div>
            <div className="form-last-name w-2/4">
              <label className="block mb-3">Last name</label>
              <Input className={errors.lastName ? "border-2 border-red-500" : ""} placeholder="Enter last name" size="xs" fullWidth {...register("lastName")} />
              <span className="text-red-600 font-semibold">{errors.lastName?.message}</span>
            </div>
          </div>
          <div className="email w-full">
            <label className="block mt-3 mb-3">Email</label>
            <Input className={errors.email ? "border-2 border-red-500" : ""} placeholder="Enter your email" size="xs" fullWidth {...register("email")} />
            <span className="text-red-600 font-semibold">{errors.email?.message}</span>
          </div>
          <div className="phone w-full">
            <label className="block mt-3 mb-3">Phone</label>
            <Input className={errors.phone ? "border-2 border-red-500" : ""} placeholder="Enter your phone" size="xs" fullWidth {...register("phone")} />
            <span className="text-red-600 font-semibold">{errors.phone?.message}</span>
          </div>
          <Button fullWidth className="rounded-md py-3 mt-3 hover:bg-ctGreen5 duration-500">SUBMIT</Button>
        </form>
      </div>
    </div>
  );
};
