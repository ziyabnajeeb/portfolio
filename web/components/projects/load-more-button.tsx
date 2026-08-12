"use client";

import { Icons } from "@/components/icons";

interface LoadMoreButtonProps {
  onClick: () => void;
}

export function LoadMoreButton({ onClick }: LoadMoreButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group inline-flex h-17.5 items-center gap-4 rounded-full bg-primary py-0 pr-3.75 pl-12.5 text-xs font-medium tracking-[2px] text-primary-foreground uppercase transition-transform duration-300 ease-out hover:scale-[1.015] hover:brightness-110"
    >
      Load More
      <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full bg-background text-foreground">
        <Icons.plus className="h-4 w-4" aria-hidden="true" />
      </span>
    </button>
  );
}
