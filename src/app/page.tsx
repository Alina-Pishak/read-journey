"use client";

import Button from "@/components/ui/Button";
import LinkButton from "@/components/ui/LinkButton";
import Logo from "@/components/ui/Logo";

export default function Home() {
  return (
    <>
      <Button onClick={() => console.log("first")}>sdfsds</Button>
      <Button variant="secondary" onClick={() => console.log("first")}>
        sgsgsfs
      </Button>
      <LinkButton href="/register">dfsdfs</LinkButton>
      <Logo />
    </>
  );
}
