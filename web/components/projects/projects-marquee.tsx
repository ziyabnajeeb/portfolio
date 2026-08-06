import type { CSSProperties } from "react";
import { ProjectCard } from "./project-card";
import type { ProjectCard as ProjectCardData } from "@/types";

interface ProjectsMarqueeProps {
  projects: ProjectCardData[];
}

export function ProjectsMarquee({ projects }: ProjectsMarqueeProps) {
  const duration = Math.max(20, projects.length * 5);

  return (
    <div className="overflow-x-auto">
      <div
        className="flex w-max animate-marquee gap-6 py-1 hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]"
        style={{ "--marquee-duration": `${duration}s` } as CSSProperties}
      >
        {[...projects, ...projects].map((project, index) => {
          const isDuplicate = index >= projects.length;
          return (
            <div
              key={`${project._id}-${index}`}
              className="w-72 shrink-0 sm:w-80"
              aria-hidden={isDuplicate || undefined}
            >
              <ProjectCard project={project} tabIndex={isDuplicate ? -1 : undefined} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
