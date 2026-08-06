import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Section } from "@/components/layout";
import {
  ProjectHero,
  ProjectContent,
  ProjectGallery,
  ProjectTechStack,
  ProjectLinks,
  ProjectNavigation,
} from "@/components/projects";
import { sanityFetch, projectBySlugQuery, projectSlugsQuery } from "@/lib/sanity";
import type { ProjectDetail as ProjectDetailData } from "@/types";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await sanityFetch<{ slug: string }[]>(projectSlugsQuery);
  return slugs.map((item) => ({ slug: item.slug }));
}

async function getProject(slug: string) {
  return sanityFetch<ProjectDetailData | null>(projectBySlugQuery, { params: { slug } });
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) return {};

  return {
    title: project.title,
    description: project.excerpt,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) notFound();

  return (
    <Section className="pt-20 md:pt-28">
      <ProjectHero project={project} />
      <div className="mt-16 grid gap-16 lg:grid-cols-[1fr_280px]">
        <div className="space-y-16">
          <ProjectContent project={project} />
          {project.gallery && project.gallery.length > 0 && <ProjectGallery images={project.gallery} />}
        </div>
        <aside className="space-y-8 lg:border-l lg:pl-8">
          <ProjectTechStack technologies={project.technologies} />
          <ProjectLinks githubUrl={project.githubUrl} liveUrl={project.liveUrl} />
        </aside>
      </div>
      <div className="mt-16">
        <ProjectNavigation order={project.order} />
      </div>
    </Section>
  );
}
