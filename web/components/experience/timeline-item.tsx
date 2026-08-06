import Image from "next/image";
import { AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { PortableText } from "@/components/ui/portable-text";
import { Badge } from "@/components/ui/badge";
import { urlFor } from "@/lib/sanity";
import type { Experience as ExperienceData } from "@/types";

interface TimelineItemProps {
  experience: ExperienceData;
}

function formatMonthYear(date: string) {
  return new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "short" });
}

export function TimelineItem({ experience }: TimelineItemProps) {
  const range = `${formatMonthYear(experience.startDate)} — ${
    experience.current || !experience.endDate ? "Present" : formatMonthYear(experience.endDate)
  }`;

  return (
    <AccordionItem value={experience._id}>
      <AccordionTrigger>
        <div className="flex flex-1 items-center gap-4 text-left">
          {experience.companyLogo?.asset?._ref && (
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-md border bg-background">
              <Image
                src={urlFor(experience.companyLogo).width(80).height(80).fit("crop").url()}
                alt={experience.companyLogo.alt ?? `${experience.company} logo`}
                fill
                sizes="40px"
                className="object-contain p-1"
              />
            </div>
          )}
          <div className="flex flex-1 flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <span className="text-lg font-semibold text-foreground">
              {experience.role} · {experience.company}
            </span>
            <span className="text-sm font-normal text-muted-foreground">{range}</span>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        {experience.location && <p className="text-sm text-muted-foreground">{experience.location}</p>}
        {experience.description && experience.description.length > 0 && (
          <PortableText value={experience.description} className="mt-3" />
        )}
        {experience.technologies && experience.technologies.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </AccordionContent>
    </AccordionItem>
  );
}
