import type { Metadata } from "next";
import { Section, PageHeader } from "@/components/layout";
import { ProjectsGrid } from "@/components/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Engineering case studies and design work.",
};

export default function ProjectsPage() {
  return (
    <Section className="pt-20 md:pt-28">
      <PageHeader
        title="Projects"
        description="A selection of engineering case studies and design work I've shipped."
      />
      <div className="mt-16">
        <ProjectsGrid />
      </div>
    </Section>
  );
}
