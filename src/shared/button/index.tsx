import { cva } from "class-variance-authority";
import React, { forwardRef } from "react";

interface PropsButton extends React.HTMLAttributes<HTMLButtonElement> {
  type?: "primary" | "warning" | "success" | "error";
  size?: "small" | "medium";
  icon?: React.ReactElement;
  fullWidth?: boolean;
}

const variantsStyles = cva([`border text-white hover:opacity-80`], {
  variants: {
    type: {
      primary: "bg-ctBlue7 ",
      warning: "bg-yellow-500 ",
      success: "bg-green-500",
      error: "bg-red-500",
    },
    size: {
      small: "px-2 py-2",
      medium: "px-5 py-5",
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
  ({ className = "", children, icon, type = "primary", size = "small", fullWidth, ...rest }, ref) => {
    const classStyles = variantsStyles({
      className,
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

Button.displayName = "Button"; 

export default Button;
