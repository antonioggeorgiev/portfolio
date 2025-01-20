"use client";

import { Button } from "@/components/ui/button";
import { ChevronSectionDirectionIcon } from "@/lib/layout";

type Props = {
  sectionId: string;
  className?: string;
  direction?: "down" | "up" | "left" | "right";
};

export default function NavigateSectionButton({
  sectionId,
  className,
  direction = "down",
}: Props) {
  const scrollToSection = () => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const ChevronIcon = ChevronSectionDirectionIcon[direction];

  return (
    <Button
      variant="ghost"
      size="icon"
      className={className}
      onClick={scrollToSection}
      asChild
    >
      <ChevronIcon className="h-10 w-10" />
    </Button>
  );
}
