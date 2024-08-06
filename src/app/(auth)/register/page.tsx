import RegisterForm from "@/components/common/RegisterForm";
import Logo from "@/components/ui/Logo";

export default function RegisterPage() {
  return (
    <section className="container py-5">
      <div className="rounded-[30px] bg-bgSecondary p-5 w-[335px]">
        <Logo className="mb-10" />
        <h1 className="font-bold text-[32px] tracking-[0.02em] leading-none mb-5">
          Expand your mind, reading{" "}
          <span className="text-[rgba(227,227,227,0.5)]">a book</span>
        </h1>
        <RegisterForm />
      </div>
      <div></div>
    </section>
  );
}
