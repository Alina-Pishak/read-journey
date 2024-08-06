import Button from "@/components/ui/Button";
import LinkButton from "@/components/ui/LinkButton";

const RegisterForm = () => {
  return (
    <form>
      <input
        placeholder="Name:"
        className="rounded-xl p-[14px] bg-bgThird mb-2 w-full font-medium text-xs leading-[1.33] tracking-[-0.02em] placeholder:text-colorSecondary"
      />
      <input
        placeholder="Mail:"
        className="rounded-xl p-[14px] bg-bgThird mb-2 w-full font-medium text-xs leading-[1.33] tracking-[-0.02em] placeholder:text-colorSecondary"
      />
      <input
        placeholder="Password:"
        className="rounded-xl p-[14px] bg-bgThird w-full font-medium text-xs leading-[1.33] tracking-[-0.02em] placeholder:text-colorSecondary"
      />
      <div className="flex items-center gap-[14px] mt-5">
        <Button type="submit" variant="secondary" className="py-3 px-7">
          Registration
        </Button>
        <LinkButton href="">Already have an account?</LinkButton>
      </div>
    </form>
  );
};

export default RegisterForm;
