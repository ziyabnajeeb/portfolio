import { cn } from "@/lib/utils";
import type { Stat } from "@/types";

interface AboutStatsProps {
  stats: Stat[];
  className?: string;
}

export function AboutStats({ stats, className }: AboutStatsProps) {
  return (
    <dl className={cn("grid grid-cols-2 gap-6 sm:grid-cols-3", className)}>
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-lg border bg-card p-4">
          <dt className="text-2xl font-bold tracking-tight text-foreground">{stat.value}</dt>
          <dd className="mt-1 text-sm text-muted-foreground">{stat.label}</dd>
        </div>
      ))}
    </dl>
  );
}
