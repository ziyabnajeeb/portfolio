import { sanityFetch, experienceListQuery } from "@/lib/sanity";
import { Section, SectionHeader } from "@/components/layout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Timeline } from "./timeline";
import type { Experience as ExperienceData } from "@/types";

export async function Experience() {
  const experiences = await sanityFetch<ExperienceData[]>(experienceListQuery);

  if (!experiences || experiences.length === 0) return null;

  return (
    <Section id="experience" background="muted">
      <ScrollReveal>
        <SectionHeader title="Experience" description="Where I've worked and what I've built." />
        <div className="mt-12">
          <Timeline experiences={experiences} />
        </div>
      </ScrollReveal>
    </Section>
  );
}
