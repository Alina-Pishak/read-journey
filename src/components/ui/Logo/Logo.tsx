import { FC } from "react";
import Link from "next/link";

import clsx from "clsx";

import LogoIcon from "/public/icons/Logo.svg";
import { LogoProps } from "./Logo.types";

const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <Link
      href="/"
      className={clsx(
        "inline-block md:flex md:gap-1 md:items-center",
        className
      )}
    >
      <LogoIcon width={42} height={17} className="w-[42px] h-[17px]" />
      <span className="hidden md:inline md:uppercase md:font-bold md:text-lg md:tracking-[0.02em] ">
        read journey
      </span>
    </Link>
  );
};

export default Logo;
