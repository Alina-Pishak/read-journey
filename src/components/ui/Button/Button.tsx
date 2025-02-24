import { FC } from "react";

import clsx from "clsx";

import { IButtonProps } from "./Button.types";

const Button: FC<IButtonProps> = ({
  children,
  type = "button",
  variant = "primary",
  className,
  ...rest
}) => {
  return (
    <button
      type={type}
      {...rest}
      className={clsx(
        "font-bold text-sm leading-[1.29] tracking-[0.02em] rounded-[30px] inline-block md:text-base md:leading-[1.12] xl:text-xl xl:leading-none transition",
        variant === "primary" &&
          "border border-solid border-[rgba(249,249,249,0.2)] hover:bg-colorPrimary hover:text-colorThird  focus:bg-colorPrimary focus:text-colorThird",
        variant === "secondary" &&
          "text-colorThird bg-colorPrimary border border-solid border-transparent hover:bg-transparent focus:bg-transparent hover:border-[rgba(249,249,249,0.2)] hover:text-colorPrimary focus:border-[rgba(249,249,249,0.2)] focus:text-colorPrimary md:text-xl",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
