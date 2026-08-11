import { Icons } from "@/components/icons";
import type { Education as EducationData } from "@/types";

interface EducationCardProps {
  education: EducationData;
}

export function EducationCard({ education }: EducationCardProps) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-card/50 p-5 transition-colors hover:border-primary/30 sm:p-6">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-border bg-background text-primary">
        <Icons.graduationCap className="h-5 w-5" aria-hidden="true" />
      </div>
      <div className="min-w-0">
        <p className="text-base font-semibold text-foreground">{education.degree}</p>
        <p className="text-sm text-muted-foreground">{education.institution}</p>
      </div>
    </div>
  );
}
