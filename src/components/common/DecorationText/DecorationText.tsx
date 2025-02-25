import React from "react";
import Books from "../../../../public/icons/Books.svg";

const DecorationText = () => {
  return (
    <div className="hidden xl:flex xl:gap-[14px] xl:py-[14px] xl:px-5 xl:rounded-xl xl:bg-bgThird">
      <Books width={40} height={40} />
      <p className="font-medium text-sm leading-[18px] tracking-[-0.3px] text-colorSecondary">
        &#34;Books are <span className="text-colorPrimary">windows</span> to the
        world, and reading is a journey into the unknown.&#34;
      </p>
    </div>
  );
};

export default DecorationText;
