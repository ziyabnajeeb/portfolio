import { EducationCard } from "./education-card";
import type { Education as EducationData } from "@/types";

interface EducationListProps {
  education: EducationData[];
}

export function EducationList({ education }: EducationListProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {education.map((item) => (
        <EducationCard key={item._id} education={item} />
      ))}
    </div>
  );
}
