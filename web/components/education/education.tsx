import { sanityFetch, educationListQuery } from "@/lib/sanity";
import { Section, SectionHeader } from "@/components/layout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { EducationList } from "./education-list";
import type { Education as EducationData } from "@/types";

export async function Education() {
  const education = await sanityFetch<EducationData[]>(educationListQuery);

  if (!education || education.length === 0) return null;

  return (
    <Section id="education">
      <ScrollReveal>
        <SectionHeader title="Education" description="Academic background and formal training." />
        <div className="mt-12">
          <EducationList education={education} />
        </div>
      </ScrollReveal>
    </Section>
  );
}
