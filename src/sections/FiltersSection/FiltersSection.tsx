import DecorationText from "@/components/common/DecorationText";
import Filters from "@/components/common/Filters";
import WorkoutGuide from "@/components/common/WorkoutGuide";
import React from "react";

const FiltersSection = () => {
  return (
    <div className="rounded-[30px] bg-bgSecondary p-5 md:flex md:gap-8 md:p-8 xl:w-[353px] xl:p-5 xl:pt-10 xl:block">
      <Filters />
      <WorkoutGuide />
      <DecorationText />
    </div>
  );
};

export default FiltersSection;
