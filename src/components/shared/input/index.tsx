import { cva } from "class-variance-authority";
import { forwardRef } from "react";

interface PropsInput extends React.InputHTMLAttributes<HTMLInputElement> {
  focus?: "primary" | "warning" | "success" | "error";
  background?: "gray" | "warning" | "success" | "error";
  sizeInput?: "small" | "medium" | "large";
  fullWidth?: boolean;
}

const variantsStylesInput = cva(["px-2 outline-none border-2 border-solid pl-2"], {
  variants: {
    focus: {
      primary: "focus:border-ctBlue5",
      warning: "focus:border-yellow-600",
      success: "focus:border-green-600",
      error: " focus:border-red-500",
    },

    background: {
      gray: "bg-slate-200",
      warning: "bg-yellow-500",
      success: "bg-green-500",
      error: "bg-red-500",
    },
    sizeInput: {
      small: "w-24 h-8",
      medium: "w-40 h-10",
      large: "w-56 h-12",
    },
    fullWidth: {
      true: "w-full",
    },
  },
  defaultVariants: {
    focus: "primary",
    background: "gray",
  },
});

export const Input = forwardRef<HTMLInputElement, PropsInput>(
  ({ focus = "primary", background = "gray", sizeInput = "small", fullWidth, className, placeholder, ...rest }, ref) => {
    const classStyles = variantsStylesInput({
      focus,
      fullWidth,
      sizeInput,
      background,
    });

    return <input {...rest} ref={ref} placeholder={placeholder} className={`${classStyles} ${className}`} />;
  }
);
