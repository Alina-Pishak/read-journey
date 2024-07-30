"use client";

import Button from "@/components/ui/Button";
import LinkButton from "@/components/ui/LinkButton";

export default function Home() {
  return (
    <>
      <Button onClick={() => console.log("first")}>sdfsds</Button>
      <Button variant="secondary" onClick={() => console.log("first")}>
        sgsgsfs
      </Button>
      <LinkButton href="">dfsdfs</LinkButton>
    </>
  );
}
