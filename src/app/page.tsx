"use client";

import Filters from "@/components/common/Filters";
import LoginForm from "@/components/common/LoginForm";
import RegisterForm from "@/components/common/RegisterForm";
import WorkoutGuide from "@/components/common/WorkoutGuide";
import Auth from "@/sections/AuthSection/AuthSection";
import FiltersSection from "@/sections/FiltersSection";

export default function Home() {
  return (
    <div className="container py-5 ">
      <FiltersSection />
    </div>
  );
}
