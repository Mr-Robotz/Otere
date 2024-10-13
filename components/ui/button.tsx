import { FC } from "react";

interface ButtonProps {
  name: string;
  backgroundColor?: string;
  textColor?: string;
}
const Button: FC<ButtonProps> = ({
  name,
  backgroundColor = "bg-green-600",
  textColor = "text-white",
}) => {
  return (
    <button className={`${backgroundColor} ${textColor} py-2 px-6 rounded-md`}>
      {name}
    </button>
  );
};
export default Button;
