import { ButtonHTMLAttributes, FC } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "filled" | "outlined" | "text";
  size?: "sm" | "md" | "lg";
}

const Button: FC<ButtonProps> = ({
  variant = "filled",
  className = "",
  children,
  size = "lg",
  ...props
}) => {
  const variants = {
    filled: "bg-black border border-black text-white font-medium",
    outlined: "border border-gray-300 text-black font-medium",
    text: "text-black font-medium",
  };

  const sizes = {
    sm: "px-4 pt-[7px] pb-[7px] text-sm leading-4",
    md: "px-6 pt-[11px] pb-[11px] text-base",
    lg: "px-8 pt-[15px] pb-[15px] text-lg leading-6",
  };
  return (
    <button
      className={twMerge(
        `${variants[variant]} ${sizes[size]} rounded-full cursor-pointer`,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
