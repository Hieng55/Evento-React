import { cva } from "class-variance-authority";
import { forwardRef, InputHTMLAttributes } from "react";

interface PropsInput extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  type?: "primary" | "secondary" | "success" | "warning" | "error";
  size?: "sm" | "xs" | "lg";
  fullWidth?: boolean;
}

const variantsStylesInput = cva(["border-2 border-gray-400 text-base pl-4 outline-none rounded-md "], {
  variants: {
    type: {
      primary: "focus:border-blue-500",
      secondary: "focus:border-gray-500",
      success: "focus:border-green-500",
      warning: "focus:border-yellow-500",
      error: "focus:border-red-500",
    },
    size: {
      sm: "h-6",
      xs: "h-13",
      lg: "h-16",
    },
    fullWidth: {
      true: "w-full",
    },
  },
  defaultVariants: {
    type: "primary",
    size: "sm",
  },
});

export const Input = forwardRef<HTMLInputElement, PropsInput>(({ className = "", type = "primary", size = "sm", fullWidth, ...rest }, ref) => {
  const classStyles = variantsStylesInput({
    className,
    type,
    size,
    fullWidth,
  });

  return <input {...rest} ref={ref} className={`${classStyles} ${className}`} />;
});
