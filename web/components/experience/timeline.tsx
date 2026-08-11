import { Accordion } from "@/components/ui/accordion";
import { TimelineItem } from "./timeline-item";
import type { Experience as ExperienceData } from "@/types";

interface TimelineProps {
  experiences: ExperienceData[];
}

export function Timeline({ experiences }: TimelineProps) {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue={experiences[0]?._id ?? ""}
      className="relative space-y-6"
    >
      <div
        aria-hidden="true"
        className="absolute top-6 bottom-6 left-6 hidden w-px bg-border sm:block"
      />
      {experiences.map((experience) => (
        <TimelineItem key={experience._id} experience={experience} />
      ))}
    </Accordion>
  );
}
