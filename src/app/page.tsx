"use client";

import LoginForm from "@/components/common/LoginForm";
import RegisterForm from "@/components/common/RegisterForm";
import Auth from "@/sections/Auth/Auth";

export default function Home() {
  return (
    <div className="container py-5">
      <Auth>
        <RegisterForm />
      </Auth>
    </div>
  );
}
