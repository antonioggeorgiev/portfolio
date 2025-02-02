import { Experience } from "@/lib/experience";
import { format } from "date-fns";

interface WorkExperienceItemProps {
  experience: Experience;
}

export function WorkExperienceItem({ experience }: WorkExperienceItemProps) {
  const formattedStartDate = format(experience.startDate, "MMM yyyy");
  const formattedEndDate = experience.endDate
    ? format(experience.endDate, "MMM yyyy")
    : "Present";

  return (
    <div className="relative border-l border-muted pb-8 pl-8 last:pb-0">
      <div className="absolute -left-[6px] top-2 h-3 w-3 rounded-full bg-primary" />

      <div className="space-y-2">
        <h3 className="text-xl font-semibold tracking-tight">
          {experience.role}
        </h3>
        <div className="flex flex-col gap-1">
          <p className="text-muted-foreground">{experience.company}</p>
          <p className="text-sm text-muted-foreground">
            {formattedStartDate} - {formattedEndDate}
          </p>
        </div>
        {experience.description && (
          <p className="text-sm text-muted-foreground">
            {experience.description}
          </p>
        )}
      </div>
    </div>
  );
}
