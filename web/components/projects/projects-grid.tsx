import { sanityFetch, allProjectsQuery } from "@/lib/sanity";
import { ProjectCard } from "./project-card";
import type { ProjectCard as ProjectCardData } from "@/types";

export async function ProjectsGrid() {
  const projects = await sanityFetch<ProjectCardData[]>(allProjectsQuery);

  if (!projects || projects.length === 0) {
    return <p className="text-center text-muted-foreground">No projects published yet.</p>;
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <ProjectCard key={project._id} project={project} priority={index < 3} />
      ))}
    </div>
  );
}
