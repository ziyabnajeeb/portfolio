import { Accordion } from "@/components/ui/accordion";
import { TimelineItem } from "./timeline-item";
import type { Experience as ExperienceData } from "@/types";

interface TimelineProps {
  experiences: ExperienceData[];
}

export function Timeline({ experiences }: TimelineProps) {
  return (
    <Accordion type="multiple" defaultValue={experiences.map((experience) => experience._id)}>
      {experiences.map((experience) => (
        <TimelineItem key={experience._id} experience={experience} />
      ))}
    </Accordion>
  );
}
