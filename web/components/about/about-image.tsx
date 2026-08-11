import { PortraitImage } from "@/components/ui/portrait-image";
import type { SanityImage } from "@/types";

interface AboutImageProps {
  image?: SanityImage | null;
  name: string;
}

export function AboutImage({ image, name }: AboutImageProps) {
  return (
    <div className="relative mx-auto w-full max-w-sm md:sticky md:top-24 md:max-w-none">
      <div className="absolute -inset-8 -z-10 rounded-full bg-primary/20 blur-3xl" aria-hidden="true" />
      <div
        className="absolute -right-4 -bottom-1 -z-10 aspect-4/5 w-full rounded-2xl border-2 border-primary"
        aria-hidden="true"
      />
      <PortraitImage image={image} name={name} size={400} />
    </div>
  );
}
