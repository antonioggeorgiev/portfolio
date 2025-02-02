import { experiences } from "@/lib/experience";
import { WorkExperienceItem } from "./WorkExperienceItem";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { useMemo } from "react";

export default function ExperienceSection() {
  const sortedExperiences = useMemo(() => {
    return experiences.sort((a, b) => {
      if (!a.endDate) {
        return -1;
      }
      if (!b.endDate) {
        return 1;
      }
      return b.endDate.getTime() - a.endDate.getTime();
    });
  }, []);

  return (
    <div className="flex w-1/3 flex-col items-center space-y-6 px-8 py-16">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold tracking-tight">Work Experience</h2>
        <p className="text-muted-foreground">
          My professional journey and roles in the tech industry.
        </p>
      </div>
      <ScrollArea className="mt-8 h-full w-full overflow-y-auto px-4">
        <div className="h-full pl-2">
          {sortedExperiences.map((experience) => (
            <WorkExperienceItem key={experience.id} experience={experience} />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
