import { cva } from "class-variance-authority";
import React, { forwardRef } from "react";

interface PropsButton extends React.HTMLAttributes<HTMLButtonElement> {
  types?: "primary" | "warning" | "success" | "error";
  size?: "small" | "medium";
  icon?: React.ReactElement;
  fullWidth?: boolean;
}

const variantsStyles = cva([`border text-white hover:opacity-80`], {
  variants: {
    types: {
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
    types: "primary",
    size: "small",
  },
});

const Button = forwardRef<HTMLButtonElement, PropsButton>(
  ({ className, children, icon, types = "primary", size = "small", fullWidth, ...rest }, ref) => {
    const classStyles = variantsStyles({
      className,
      types,
      fullWidth,
      size,
    });

    return (
      <button {...rest} ref={ref} className={`${classStyles}`}>
        {children}
        {icon}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
