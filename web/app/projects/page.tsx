import type { Metadata } from "next";
import { Section, PageHeader } from "@/components/layout";
import { ProjectsGrid } from "@/components/projects";
import { WireframeDecoration } from "@/components/ui/wireframe-decoration";

export const metadata: Metadata = {
  title: "Projects",
  description: "Engineering case studies and design work.",
};

export default function ProjectsPage() {
  return (
    <Section className="relative overflow-hidden pt-20 md:pt-28" container={false}>
      <WireframeDecoration />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PageHeader
          title="Projects"
          description="A selection of engineering case studies and design work I've shipped."
        />
        <div className="mt-16">
          <ProjectsGrid />
        </div>
      </div>
    </Section>
  );
}
