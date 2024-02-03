"use client";

import Link from "next/link";
import { Button } from "../ui/button";

interface BackButtonProps {
  href: string;
  label: string;
}

export const BackButton = ({ href, label }: BackButtonProps) => {
  return (
    <Button size={"sm"} asChild variant={"link"} className="font-normal w-full">
      <Link href={href}>{label}</Link>
    </Button>
  );
};
