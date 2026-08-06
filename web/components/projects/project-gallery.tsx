import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import type { SanityImage } from "@/types";

interface ProjectGalleryProps {
  images: SanityImage[];
}

export function ProjectGallery({ images }: ProjectGalleryProps) {
  if (images.length === 0) return null;

  return (
    <div>
      <h2 className="text-xl font-semibold tracking-tight text-foreground">Gallery</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {images.map((image, index) => (
          <div
            key={image._key ?? index}
            className="relative aspect-[4/3] overflow-hidden rounded-lg border bg-muted"
          >
            <Image
              src={urlFor(image).width(900).height(675).fit("crop").url()}
              alt={image.alt ?? "Project gallery image"}
              fill
              loading="lazy"
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
