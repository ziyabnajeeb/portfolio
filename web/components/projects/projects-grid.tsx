import { sanityFetch, allProjectsQuery } from "@/lib/sanity";
import { ProjectsGridReveal } from "./projects-grid-reveal";
import type { ProjectCard as ProjectCardData } from "@/types";

const INITIAL_VISIBLE = 6;

export async function ProjectsGrid() {
  const projects = await sanityFetch<ProjectCardData[]>(allProjectsQuery);

  if (!projects || projects.length === 0) {
    return <p className="text-center text-muted-foreground">No projects published yet.</p>;
  }

  return <ProjectsGridReveal projects={projects} initialVisible={INITIAL_VISIBLE} />;
}
