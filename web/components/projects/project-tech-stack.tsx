import { Badge } from "@/components/ui/badge";

interface ProjectTechStackProps {
  technologies: string[];
}

export function ProjectTechStack({ technologies }: ProjectTechStackProps) {
  if (technologies.length === 0) return null;

  return (
    <div>
      <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Tech Stack</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <Badge key={tech} variant="secondary">
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  );
}
