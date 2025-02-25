import React, { FC } from "react";
import Image from "next/image";

import Logo from "@/components/ui/Logo";

import { AuthSectionProps } from "./AuthSection.types";

const Auth: FC<AuthSectionProps> = ({ children }) => {
  return (
    <div className="md:flex md:gap-4">
      <div className="p-5 pb-10 bg-bgSecondary mb-3 rounded-[30px] md:pt-10 md:pl-16 md:pr-[196px] md:pb-[214px] xl:py-10 xl:px-16 xl:w-[600px]">
        <Logo className="mb-10 md:mb-[157px] xl:mb-[107px]" />
        <p className="mb-5 text-[32px] tracking-[0.6] font-bold leading-none md:text-[64px] md:mb-10 md:leading-[60px]">
          Expand your mind, reading <span className="opacity-50">a book</span>
        </p>
        {children}
      </div>
      <div className="px-10 pt-5 bg-bgSecondary rounded-[30px] h-[351px] md:hidden xl:block xl:w-[600px] xl:h-[753px] xl:py-20 xl:px-24">
        <Image
          src="/images/auth-preview-2x.webp"
          alt="site preview"
          width={255}
          height={518}
          className="h-[330px] w-[255px] object-contain object-center xl:w-[405px] xl:h-[699px]"
        />
      </div>
    </div>
  );
};

export default Auth;
