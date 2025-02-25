import React, { FC } from "react";
import { IInputProps } from "./Input.types";

const Input: FC<IInputProps> = ({ placeholder, register }) => {
  return (
    <input
      {...register}
      placeholder={placeholder}
      className="rounded-xl p-[14px] bg-bgThird mb-2 w-full font-medium text-xs leading-[1.33] tracking-[-0.02em] placeholder:text-colorSecondary md:text-sm md:py-4 md:mb-[14px] md:leading-[18px]"
    />
  );
};

export default Input;
