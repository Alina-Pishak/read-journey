import React, { FC } from "react";
import { IInputProps } from "./Input.types";
import clsx from "clsx";

const Input: FC<IInputProps> = ({ placeholder, register, isLast }) => {
  return (
    <input
      {...register}
      placeholder={placeholder}
      className={clsx(
        "rounded-xl p-[14px] bg-bgThird mb-2 w-full font-medium text-xs leading-[1.33] tracking-[-0.02em] placeholder:text-colorSecondary md:text-sm md:py-4 md:mb-[14px] md:leading-[18px]",
        isLast && "mb-0 md:-mb-0 xl:mb-0"
      )}
    />
  );
};

export default Input;
