import { FC } from "react";

import clsx from "clsx";

import { IButtonProps } from "./Button.types";

const Button: FC<IButtonProps> = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className,
}) => {
  return (
    <button
      type={type}
      className={clsx(
        "font-bold text-sm leading-[1.29] tracking-[0.02em] rounded-[30px] md:text-base md:leading-[1.12] xl:text-xl xl:leading-none transition",
        variant === "primary" &&
          "py-2.5 px-5 border border-solid border-[rgba(249,249,249,0.2)] md:py-3 md:px-7 xl:py-4 xl:px-[54px] hover:bg-colorPrimary hover:text-colorThird  focus:bg-colorPrimary focus:text-colorThird",
        variant === "secondary" &&
          "text-colorThird py-3 px-[45px] bg-colorPrimary border border-solid border-transparent md:py-4 md:px-[54px] hover:bg-transparent focus:bg-transparent hover:border-[rgba(249,249,249,0.2)] hover:text-colorPrimary focus:border-[rgba(249,249,249,0.2)] focus:text-colorPrimary",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
