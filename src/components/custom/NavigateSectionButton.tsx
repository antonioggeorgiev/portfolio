"use client";

import { Button } from "@/components/ui/button";
import { ChevronSectionDirectionIcon } from "@/lib/layout";
import { motion } from "framer-motion";
import { useMemo } from "react";

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

  const animate = useMemo(() => {
    switch (direction) {
      case "down":
        return { y: [0, 10, 0] };
      case "up":
        return { y: [0, -10, 0] };
      case "left":
        return { x: [0, -10, 0] };
      case "right":
        return { x: [0, 10, 0] };
    }
  }, [direction]);

  const ChevronIcon = ChevronSectionDirectionIcon[direction];

  return (
    <motion.div
      className={className}
      animate={animate}
      transition={{
        y: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        },
        x: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      <Button variant="ghost" size="icon" onClick={scrollToSection} asChild>
        <ChevronIcon className="h-10 w-10" />
      </Button>
    </motion.div>
  );
}
