"use client";
import LoginForm from "@/components/common/LoginForm";
import Auth from "@/sections/AuthSection";

export default function LoginPage() {
  return (
    <section className="container py-5 ">
      <Auth>
        <LoginForm />
      </Auth>
    </section>
  );
}
