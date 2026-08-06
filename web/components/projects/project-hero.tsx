import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import { Badge } from "@/components/ui/badge";
import { TypographyH1 } from "@/components/typography";
import { PROJECT_CATEGORY_LABELS } from "@/lib/constants/projects";
import type { ProjectDetail as ProjectDetailData } from "@/types";

interface ProjectHeroProps {
  project: ProjectDetailData;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  const year = project.publishedDate ? new Date(project.publishedDate).getFullYear() : null;

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <Badge>{PROJECT_CATEGORY_LABELS[project.category]}</Badge>
        {project.role && <span className="text-sm text-muted-foreground">{project.role}</span>}
        {project.company && <span className="text-sm text-muted-foreground">· {project.company}</span>}
        {year && <span className="text-sm text-muted-foreground">· {year}</span>}
      </div>
      <TypographyH1 className="mt-4">{project.title}</TypographyH1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{project.excerpt}</p>
      <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-2xl border bg-muted">
        <Image
          src={urlFor(project.thumbnail).width(1600).height(900).fit("crop").url()}
          alt={project.thumbnail.alt ?? project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
