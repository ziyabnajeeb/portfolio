import { PortableText } from "@/components/ui/portable-text";
import { TechBadge } from "./tech-badge";
import type { ExperienceProject as ExperienceProjectData } from "@/types";

interface ExperienceProjectProps {
  project: ExperienceProjectData;
}

export function ExperienceProject({ project }: ExperienceProjectProps) {
  return (
    <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
      <p className="text-sm font-semibold text-foreground">
        {project.name}
        {project.role && <span className="font-normal text-muted-foreground"> — {project.role}</span>}
      </p>
      {project.technologies && project.technologies.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </div>
      )}
      <PortableText value={project.description} className="mt-3 text-sm" />
    </div>
  );
}
