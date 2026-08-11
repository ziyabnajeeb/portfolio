import { sanityFetch, skillCategoriesQuery } from "@/lib/sanity";
import { Section, SectionHeader } from "@/components/layout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SkillCategory } from "./skill-category";
import type { SkillCategory as SkillCategoryData } from "@/types";

export async function Skills() {
  const categories = await sanityFetch<SkillCategoryData[]>(skillCategoriesQuery);
  const visibleCategories = categories?.filter((category) => category.skills.length > 0) ?? [];

  if (visibleCategories.length === 0) return null;

  return (
    <Section id="skills">
      <ScrollReveal>
        <SectionHeader
          title="Skills & Expertise"
          description="Technologies and tools I use to build production-ready software."
        />
        <div className="mt-12 columns-1 gap-x-8 sm:columns-2 lg:columns-3">
          {visibleCategories.map((category) => (
            <SkillCategory key={category._id} category={category} className="mb-10 break-inside-avoid" />
          ))}
        </div>
      </ScrollReveal>
    </Section>
  );
}
