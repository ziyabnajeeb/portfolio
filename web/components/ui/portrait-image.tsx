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
}

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export function PortraitImage({ image, name, size = 320, priority = false, className }: PortraitImageProps) {
  const hasImage = Boolean(image?.asset?._ref);

  return (
    <div
      className={cn(
        "relative aspect-square w-full overflow-hidden rounded-2xl border bg-muted",
        className
      )}
    >
      {hasImage && image ? (
        <Image
          src={urlFor(image).width(size * 2).height(size * 2).fit("crop").url()}
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
