"use client";

import { useState } from "react";
import { ProjectCard } from "./project-card";
import { LoadMoreButton } from "./load-more-button";
import type { ProjectCard as ProjectCardData } from "@/types";

interface ProjectsGridRevealProps {
  projects: ProjectCardData[];
  initialVisible: number;
}

export function ProjectsGridReveal({ projects, initialVisible }: ProjectsGridRevealProps) {
  const [visibleCount, setVisibleCount] = useState(initialVisible);
  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  return (
    <div>
      <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-16">
        {visibleProjects.map((project, index) => {
          const isBanner = (index + 1) % 3 === 0;
          return (
            <ProjectCard
              key={project._id}
              project={project}
              priority={index < 2}
              banner={isBanner}
              className={isBanner ? "sm:col-span-2" : undefined}
            />
          );
        })}
      </div>
      {hasMore && (
        <div className="mt-16 flex justify-center">
          <LoadMoreButton onClick={() => setVisibleCount((count) => count + initialVisible)} />
        </div>
      )}
    </div>
  );
}
