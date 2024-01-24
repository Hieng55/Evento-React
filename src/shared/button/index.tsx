import React from "react";

interface PropsButton extends React.HTMLAttributes<HTMLButtonElement> {
  type?: "primary" | "warning" | "error";
  text: string;
  icon?: React.ReactElement;
  width?: string;
  height?: string;
  textSize?: string;
  round?: string;
}

const typeStyles = {
  primary: "bg-blue-500 text-white hover:opacity-80",
  warning: "bg-yellow-500 text-white hover:opacity-80",
  error: "bg-red-500 text-white hover:opacity-80",
};

const Button: React.FC<PropsButton> = ({
  type = "primary",
  text,
  textSize = "text-base",
  className = "",
  icon,
  width = "w-20",
  height = "h-10",
  round = "rounded",
  onClick,
  ...rest
}) => {
  return (
    <>
      <button
        onClick={onClick}
        className={` transition duration-500 cursor-pointer ${width} ${height} ${textSize} ${round} ${typeStyles[type]} ${className}`}
        {...rest}
      >
        {text || icon}
      </button>
    </>
  );
};

export default Button;
