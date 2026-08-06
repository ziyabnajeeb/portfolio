import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

interface ProjectLinksProps {
  githubUrl?: string;
  liveUrl?: string;
}

export function ProjectLinks({ githubUrl, liveUrl }: ProjectLinksProps) {
  if (!githubUrl && !liveUrl) return null;

  return (
    <div className="flex flex-col gap-3">
      {liveUrl && (
        <Button asChild className="w-full">
          <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
            <Icons.externalLink className="mr-2 h-4 w-4" aria-hidden="true" />
            Live Demo
          </Link>
        </Button>
      )}
      {githubUrl && (
        <Button asChild variant="outline" className="w-full">
          <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Icons.github className="mr-2 h-4 w-4" aria-hidden="true" />
            GitHub
          </Link>
        </Button>
      )}
    </div>
  );
}
