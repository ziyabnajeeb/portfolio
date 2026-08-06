import Link from "next/link";
import { sanityFetch, adjacentProjectsQuery } from "@/lib/sanity";
import { Icons } from "@/components/icons";
import type { AdjacentProjects } from "@/types";

interface ProjectNavigationProps {
  orderRank: string;
}

export async function ProjectNavigation({ orderRank }: ProjectNavigationProps) {
  const adjacent = await sanityFetch<AdjacentProjects>(adjacentProjectsQuery, { params: { orderRank } });

  if (!adjacent.prev && !adjacent.next) return null;

  return (
    <nav aria-label="Project navigation" className="flex items-center justify-between border-t pt-8">
      {adjacent.prev ? (
        <Link
          href={`/projects/${adjacent.prev.slug}`}
          className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <Icons.chevronLeft className="h-4 w-4" aria-hidden="true" />
          <span>
            <span className="block text-xs uppercase tracking-wide">Previous</span>
            {adjacent.prev.title}
          </span>
        </Link>
      ) : (
        <span />
      )}
      {adjacent.next ? (
        <Link
          href={`/projects/${adjacent.next.slug}`}
          className="group flex items-center gap-2 text-right text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <span>
            <span className="block text-xs uppercase tracking-wide">Next</span>
            {adjacent.next.title}
          </span>
          <Icons.chevronRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
