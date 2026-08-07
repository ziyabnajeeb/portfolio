import { sanityFetch, featuredProjectsQuery, allProjectsQuery } from "@/lib/sanity";
import { Section, SectionHeader } from "@/components/layout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ProjectsMarquee } from "./projects-marquee";
import type { ProjectCard as ProjectCardData } from "@/types";

export async function ProjectsCarousel() {
  const featured = await sanityFetch<ProjectCardData[]>(featuredProjectsQuery);
  const projects =
    featured && featured.length > 0 ? featured : await sanityFetch<ProjectCardData[]>(allProjectsQuery);

  if (!projects || projects.length === 0) return null;

  return (
    <Section id="projects">
      <ScrollReveal>
        <SectionHeader title="Featured Work" description="A selection of projects I've built and shipped." />
        <div className="mt-12">
          <ProjectsMarquee projects={projects} />
        </div>
      </ScrollReveal>
    </Section>
  );
}
