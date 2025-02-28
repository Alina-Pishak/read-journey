import React from "react";

import Image from "next/image";

const DecorationText = () => {
  return (
    <div className="hidden xl:flex xl:gap-[14px] xl:items-center xl:py-[14px] xl:px-5 xl:rounded-xl xl:bg-bgThird">
      <Image
        src="/images/books.png"
        alt="book icon"
        width={40}
        height={40}
        className="h-10 w-10"
      />
      <p className="font-medium text-sm leading-[18px] tracking-[-0.3px] text-colorSecondary">
        &#34;Books are <span className="text-colorPrimary">windows</span> to the
        world, and reading is a journey into the unknown.&#34;
      </p>
    </div>
  );
};

export default DecorationText;
