"use client";

import RegisterForm from "@/components/common/RegisterForm";
import Auth from "@/sections/AuthSection";

export default function RegisterPage() {
  return (
    <section className="container py-5">
      <Auth>
        <RegisterForm />
      </Auth>
    </section>
  );
}
