import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import { cn } from "@/lib/utils";
import type { SanityImage } from "@/types";

interface PortraitImageProps {
  image?: SanityImage | null;
  name: string;
  size?: number;
  priority?: boolean;
  className?: string;
  aspectRatio?: "square" | "portrait";
}

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export function PortraitImage({
  image,
  name,
  size = 320,
  priority = false,
  className,
  aspectRatio = "portrait",
}: PortraitImageProps) {
  const hasImage = Boolean(image?.asset?._ref);
  const isPortrait = aspectRatio === "portrait";
  const width = size * 2;
  const height = isPortrait ? Math.round(width * 1.25) : width;

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-2xl border bg-muted",
        isPortrait ? "aspect-4/5" : "aspect-square",
        className
      )}
    >
      {hasImage && image ? (
        <Image
          src={urlFor(image).width(width).height(height).fit("crop").url()}
          alt={image.alt ?? name}
          fill
          priority={priority}
          sizes={`${size}px`}
          className="object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <span className="text-4xl font-semibold text-muted-foreground" aria-hidden="true">
            {getInitials(name)}
          </span>
          <span className="sr-only">{name}</span>
        </div>
      )}
    </div>
  );
}
