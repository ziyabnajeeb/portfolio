import Image from "next/image";
import { cn } from "@/lib/utils";
import { SmileyMark, StarburstMark } from "./showcase-marks";

export type ShowcaseItem =
  | { type: "mark"; mark: "smiley" | "starburst" }
  | { type: "image"; src: string; alt: string };

interface WorkShowcaseCardProps {
  item: ShowcaseItem;
  priority?: boolean;
  "aria-hidden"?: boolean;
}

export function WorkShowcaseCard({ item, priority, ...props }: WorkShowcaseCardProps) {
  const baseClassName = "h-full w-full shrink-0 overflow-hidden rounded-[2rem] border border-foreground/10";

  if (item.type === "mark") {
    const Mark = item.mark === "smiley" ? SmileyMark : StarburstMark;
    return (
      <div className={cn(baseClassName, "flex items-center justify-center bg-background/40")} {...props}>
        <Mark className="h-16 w-16 text-foreground/70" />
      </div>
    );
  }

  return (
    <div className={cn(baseClassName, "relative bg-background/40")} {...props}>
      <Image
        src={item.src}
        alt={item.alt}
        fill
        priority={priority}
        sizes="(min-width: 640px) 288px, 256px"
        className="object-cover"
      />
    </div>
  );
}
