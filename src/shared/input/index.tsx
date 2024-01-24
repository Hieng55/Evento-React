interface PropsInput {
  type?: "green" | "primary" | "error";
  placeholder: string;
  typeText?: string;
  textSize?: string;
  width?: string;
  height?: string;
  round?: string;
  className?: string;
}
export const Input: React.FC<PropsInput> = ({
  type = "green",
  placeholder,
  className = "bg-gray-200 pl-2",
  typeText = "text",
  textSize = "text-sm",
  width = "w-52",
  height = "h-10",
  round = "rounded",
}) => {
  const typeStyles = {
    green: "border-2 border-solid focus:border-ctGreen6 outline-none",
    primary: "border-2 border-solid focus:border-ctBlue5 outline-none",
    error: "border-2 border-solid focus:border-red-500 outline-none",
  };

  return (
    <>
      <input className={`${className} ${width} ${height} ${textSize} ${round} ${typeStyles[type]}`} type={typeText} placeholder={placeholder} />
    </>
  );
};
