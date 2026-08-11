import type { CSSProperties } from "react";
import { WorkShowcaseCard, type ShowcaseItem } from "./work-showcase-card";

const ITEMS: ShowcaseItem[] = [
  { type: "mark", mark: "smiley" },
  { type: "image", src: "/work/work-1.png", alt: "Preview of a recent project" },
  { type: "mark", mark: "starburst" },
  { type: "image", src: "/work/work-2.png", alt: "Preview of a recent project" },
  { type: "mark", mark: "smiley" },
  { type: "image", src: "/work/work-3.png", alt: "Preview of a recent project" },
  { type: "mark", mark: "starburst" },
];

export function WorkShowcase() {
  return (
    <section aria-label="Work showcase" className="overflow-hidden bg-muted/60 py-10 md:py-14">
      <div className="overflow-x-auto">
        <div
          className="flex w-max animate-marquee gap-6 py-1 hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]"
          style={{ "--marquee-duration": "36s" } as CSSProperties}
        >
          {[...ITEMS, ...ITEMS].map((item, index) => {
            const isDuplicate = index >= ITEMS.length;
            return (
              <div key={index} className="aspect-4/5 w-64 shrink-0 sm:w-72">
                <WorkShowcaseCard item={item} priority={index < 2} aria-hidden={isDuplicate || undefined} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
