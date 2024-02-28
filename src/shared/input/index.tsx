import { cva } from "class-variance-authority";
import { forwardRef, InputHTMLAttributes } from "react";

interface PropsInput extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  types?: "primary" | "secondary" | "success" | "warning" | "error";
  size?: "small" | "normal" | "large";
  fullWidth?: boolean;
}

const variantsStylesInput = cva(["border-2 border-gray-400 text-base pl-4 outline-none rounded-md "], {
  variants: {
    types: {
      primary: "focus:border-blue-500",
      secondary: "focus:border-gray-500",
      success: "focus:border-green-500",
      warning: "focus:border-yellow-500",
      error: "focus:border-red-500",
    },
    size: {
      small: "py-3",
      normal: "py-4",
      large: "py-5",
    },
    fullWidth: {
      true: "w-full",
    },
  },
  defaultVariants: {
    types: "primary",
    size: "small",
  },
});

const Input = forwardRef<HTMLInputElement, PropsInput>(({ className, types = "primary", size = "small", fullWidth, ...rest }, ref) => {
  const classStyles = variantsStylesInput({
    className,
    types,
    size,
    fullWidth,
  });

  return <input {...rest} ref={ref} className={`${classStyles}`} />;
});
Input.displayName = "Input";

export default Input;
