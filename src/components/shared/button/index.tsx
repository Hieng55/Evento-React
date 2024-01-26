import { cva } from "class-variance-authority";
import React, { forwardRef } from "react";

interface PropsButton extends React.HTMLAttributes<HTMLButtonElement> {
  type?: "primary" | "warning" | "error";
  size?: "small" | "medium";
  icon?: React.ReactElement;
  fullWidth?: boolean;
}
const variantsStyles = cva(["border text-white"], {
  variants: {
    type: {
      primary: "bg-ctBlue7 text-white hover:opacity-80",
      warning: "bg-yellow-500 text-white hover:opacity-80",
      error: "bg-red-500 text-white hover:opacity-80",
    },
    size: {
      small: "text-sm",
      medium: "text-xl",
    },
    fullWidth: {
      true: "w-full",
    },
  },
  defaultVariants: {
    type: "primary",
    size: "small",
  },
});

const Button = forwardRef<HTMLButtonElement, PropsButton>(
  ({ children, icon, type = "primary", size = "small", fullWidth, className, ...rest }, ref) => {
    const classStyles = variantsStyles({
      type,
      fullWidth,
      size,
    });

    return (
      <button {...rest} ref={ref} className={`${classStyles} ${className}`}>
        {children}
        {icon}
      </button>
    );
  }
);

export default Button;
