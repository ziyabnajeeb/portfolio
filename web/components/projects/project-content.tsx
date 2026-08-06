import { PortableText } from "@/components/ui/portable-text";
import type { ProjectDetail as ProjectDetailData } from "@/types";

type NarrativeSectionKey = "overview" | "challenge" | "solution" | "results" | "lessonsLearned";

const NARRATIVE_SECTIONS: { key: NarrativeSectionKey; title: string }[] = [
  { key: "overview", title: "Overview" },
  { key: "challenge", title: "Challenge" },
  { key: "solution", title: "Solution" },
  { key: "results", title: "Results" },
  { key: "lessonsLearned", title: "Lessons Learned" },
];

interface ProjectContentProps {
  project: ProjectDetailData;
}

export function ProjectContent({ project }: ProjectContentProps) {
  const visibleSections = NARRATIVE_SECTIONS.filter((section) => {
    const value = project[section.key];
    return Array.isArray(value) && value.length > 0;
  });
  const hasKeyFeatures = Boolean(project.keyFeatures && project.keyFeatures.length > 0);

  if (visibleSections.length === 0 && !hasKeyFeatures) return null;

  return (
    <div className="space-y-10">
      {visibleSections.map((section) => (
        <div key={section.key}>
          <h2 className="text-xl font-semibold tracking-tight text-foreground">{section.title}</h2>
          <PortableText value={project[section.key] ?? []} className="mt-4" />
        </div>
      ))}
      {hasKeyFeatures && (
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-foreground">Key Features</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {project.keyFeatures?.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-muted-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
