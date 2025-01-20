import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";
import NavigateSectionButton from "../NavigateSectionButton";
import { LayoutSections } from "@/lib/layout";

type Props = {
  sectionAboveId?: string;
  sectionBelowId?: string;
  className?: string;
  id: LayoutSections;
};

export default function LayoutSection({
  children,
  sectionAboveId,
  sectionBelowId,
  className,
  id,
}: PropsWithChildren<Props>) {
  return (
    <section
      id={id}
      className={cn(
        "relative flex h-screen w-full justify-center p-8",
        className,
      )}
    >
      {sectionAboveId && (
        <NavigateSectionButton
          sectionId={sectionAboveId}
          direction="up"
          className="absolute top-8"
        />
      )}
      {children}
      {sectionBelowId && (
        <NavigateSectionButton
          sectionId={sectionBelowId}
          direction="down"
          className="absolute bottom-8"
        />
      )}
    </section>
  );
}
