import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import { Badge } from "@/components/ui/badge";
import { PROJECT_CATEGORY_LABELS } from "@/lib/constants/projects";
import { cn } from "@/lib/utils";
import type { ProjectCard as ProjectCardData } from "@/types";

interface ProjectCardProps {
  project: ProjectCardData;
  tabIndex?: number;
  priority?: boolean;
  className?: string;
}

export function ProjectCard({ project, tabIndex, priority = false, className }: ProjectCardProps) {
  const year = project.publishedDate ? new Date(project.publishedDate).getFullYear() : null;

  return (
    <Link
      href={`/projects/${project.slug}`}
      tabIndex={tabIndex}
      className={cn(
        "group block h-full overflow-hidden rounded-xl border bg-card transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className
      )}
    >
      <div className="relative aspect-[3/2] overflow-hidden bg-muted">
        <Image
          src={urlFor(project.thumbnail).width(800).height(534).fit("crop").url()}
          alt={project.thumbnail.alt ?? project.title}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-2">
          <Badge variant="secondary">{PROJECT_CATEGORY_LABELS[project.category]}</Badge>
          {year && <span className="text-xs text-muted-foreground">{year}</span>}
        </div>
        <h3 className="mt-3 text-lg font-semibold text-foreground">{project.title}</h3>
        <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">{project.excerpt}</p>
        {project.technologies.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
