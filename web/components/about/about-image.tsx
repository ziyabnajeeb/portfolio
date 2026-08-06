import { PortraitImage } from "@/components/ui/portrait-image";
import type { SanityImage } from "@/types";

interface AboutImageProps {
  image?: SanityImage | null;
  name: string;
}

export function AboutImage({ image, name }: AboutImageProps) {
  return (
    <div className="mx-auto w-full max-w-sm md:sticky md:top-24 md:max-w-none">
      <PortraitImage image={image} name={name} size={400} />
    </div>
  );
}
