import Image from "next/image";
import { AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { PortableText } from "@/components/ui/portable-text";
import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/icons";
import { urlFor } from "@/lib/sanity";
import { getTechColor } from "@/lib/constants";
import { cn } from "@/lib/utils";
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
    <AccordionItem value={experience._id} className="relative flex gap-4 sm:gap-6">
      <div className="relative hidden w-12 shrink-0 sm:flex sm:justify-center">
        <div className="relative z-10 flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border-2 border-border bg-background shadow-sm">
          {experience.companyLogo?.asset?._ref ? (
            <Image
              src={urlFor(experience.companyLogo).width(80).height(80).fit("crop").url()}
              alt={experience.companyLogo.alt ?? `${experience.company} logo`}
              fill
              sizes="48px"
              className="object-contain p-2"
            />
          ) : (
            <Icons.briefcase className="h-5 w-5 text-muted-foreground" />
          )}
        </div>
      </div>

      <div className="min-w-0 flex-1 rounded-2xl border border-border bg-card/50 px-5 transition-colors hover:border-primary/30 sm:px-6">
        <AccordionTrigger>
          <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            <div className="min-w-0">
              <p className="truncate text-base font-semibold text-foreground sm:text-lg">{experience.role}</p>
              <p className="text-sm font-medium text-primary">{experience.company}</p>
            </div>
            <span className="inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
              <Icons.calendar className="h-3.5 w-3.5" aria-hidden="true" />
              {range}
            </span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          {experience.location && (
            <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <Icons.mapPin className="h-3.5 w-3.5" aria-hidden="true" />
              {experience.location}
            </span>
          )}
          {experience.description && experience.description.length > 0 && (
            <PortableText value={experience.description} className="mt-3" />
          )}
          {experience.technologies && experience.technologies.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {experience.technologies.map((tech) => {
                const color = getTechColor(tech);
                return (
                  <Badge
                    key={tech}
                    variant="outline"
                    className={cn("text-xs", !color && "text-muted-foreground")}
                    style={
                      color
                        ? {
                            color,
                            borderColor: color,
                            backgroundColor: color.startsWith("#") ? `${color}14` : undefined,
                          }
                        : undefined
                    }
                  >
                    {tech}
                  </Badge>
                );
              })}
            </div>
          )}
        </AccordionContent>
      </div>
    </AccordionItem>
  );
}
