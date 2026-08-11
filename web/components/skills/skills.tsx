import { sanityFetch, skillCategoriesQuery } from "@/lib/sanity";
import { Section, SectionHeader } from "@/components/layout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SkillsGrid } from "./skills-grid";
import type { SkillCategory as SkillCategoryData } from "@/types";

export async function Skills() {
  const categories = await sanityFetch<SkillCategoryData[]>(skillCategoriesQuery);
  const skills = categories?.flatMap((category) => category.skills) ?? [];

  if (skills.length === 0) return null;

  return (
    <Section id="skills">
      <ScrollReveal>
        <SectionHeader
          title="Skills & Expertise"
          description="Technologies and tools I use to build production-ready software."
        />
        <SkillsGrid skills={skills} />
      </ScrollReveal>
    </Section>
  );
}
