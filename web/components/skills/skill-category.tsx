import { SkillCard } from "./skill-card";
import type { SkillCategory as SkillCategoryData } from "@/types";

interface SkillCategoryProps {
  category: SkillCategoryData;
}

export function SkillCategory({ category }: SkillCategoryProps) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
        {category.title}
      </h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <SkillCard key={skill._id} skill={skill} />
        ))}
      </div>
    </div>
  );
}
