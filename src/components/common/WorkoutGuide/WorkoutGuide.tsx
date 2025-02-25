import React from "react";

import LinkButton from "@/components/ui/LinkButton";
import Arrow from "../../../../public/icons/Arrow.svg";

const WorkoutGuide = () => {
  return (
    <div className="p-5 rounded-xl bg-bgThird md:w-[313px] xl:mb-5">
      <h2 className="font-bold text-lg leading-[18px] tracking-[-0.02px] mb-5 md:text-xl md:leading-[20px] md:mb-10">
        Start your workout
      </h2>
      <ul>
        <li className="flex gap-3 mb-5">
          <p className="font-bold text-lg leading-[18px] tracking-[-0.02px] text-colorThird py-[11px] px-4 bg-colorPrimary rounded-full w-10 h-10 md:text-xl md:leading-[20px] md:w-11 md:h-11">
            1
          </p>
          <p className="font-medium text-sm leading-[18px] tracking-[-0.03px] md:w-[197px]">
            Create a personal library:{" "}
            <span className="text-colorSecondary">
              add the books you intend to read to it.
            </span>
          </p>
        </li>
        <li className="flex gap-3 mb-5 md:mb-[26px]">
          <p className="font-bold text-lg leading-[18px] tracking-[-0.02px] text-colorThird py-[11px] px-4 bg-colorPrimary rounded-full w-10 h-10 md:text-xl md:leading-[20px] md:w-11 md:h-11">
            2
          </p>
          <p className="font-medium text-sm leading-[18px] tracking-[-0.32px] md:w-[197px]">
            Create your first workout:{" "}
            <span className="text-colorSecondary">
              define a goal, choose a period, start training.
            </span>
          </p>
        </li>
      </ul>
      <div className="flex justify-between items-end">
        <LinkButton href="#">My library</LinkButton>
        <Arrow width={24} height={24} />{" "}
      </div>
    </div>
  );
};

export default WorkoutGuide;
