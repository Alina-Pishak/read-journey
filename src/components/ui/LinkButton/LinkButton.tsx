import Link from "next/link";
import { FC } from "react";

import clsx from "clsx";

import { ILinkButtonProps } from "./LinkButton.types";

const LinkButton: FC<ILinkButtonProps> = ({ children, href, className }) => {
  return (
    <Link
      href={href}
      className={clsx(
        "text-xs leading-[1.17] tracking-[-0.02em] underline text-colorSecondary transition md:text-sm md:leading-[1.29] inline-block hover:text-colorPrimary focus:text-colorPrimary",
        className
      )}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
