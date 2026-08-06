import { Badge } from "@/components/ui/badge";
import type { Skill } from "@/types";

interface SkillCardProps {
  skill: Skill;
}

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <Badge variant="secondary" className="px-3 py-1.5 text-sm font-medium">
      {skill.name}
    </Badge>
  );
}
