import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import { PROJECT_CATEGORY_LABELS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { ProjectCard as ProjectCardData } from "@/types";

interface ProjectCardProps {
  project: ProjectCardData;
  tabIndex?: number;
  priority?: boolean;
  banner?: boolean;
  className?: string;
}

function formatDate(date?: string) {
  if (!date) return null;
  return new Date(date)
    .toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
    .toUpperCase();
}

export function ProjectCard({ project, tabIndex, priority = false, banner = false, className }: ProjectCardProps) {
  const date = formatDate(project.publishedDate);

  return (
    <Link
      href={`/projects/${project.slug}`}
      tabIndex={tabIndex}
      className={cn(
        "group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className
      )}
    >
      <div className={cn("relative overflow-hidden rounded-2xl bg-muted", banner ? "aspect-21/9" : "aspect-4/3")}>
        <Image
          src={urlFor(project.thumbnail).width(banner ? 1600 : 800).height(banner ? 686 : 600).fit("crop").url()}
          alt={project.thumbnail.alt ?? project.title}
          fill
          priority={priority}
          sizes={
            banner
              ? "(min-width: 640px) 100vw, 100vw"
              : "(min-width: 640px) 50vw, 100vw"
          }
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="mt-4 flex items-center gap-3 text-xs font-semibold tracking-widest uppercase">
        <span className="text-primary">{PROJECT_CATEGORY_LABELS[project.category]}</span>
        {date && <span className="text-muted-foreground">{date}</span>}
      </div>
      <h3 className="mt-1.5 text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-2xl">
        {project.title}
      </h3>
    </Link>
  );
}
