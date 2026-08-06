import { PortraitImage } from "@/components/ui/portrait-image";
import type { Hero as HeroData } from "@/types";

interface HeroImageProps {
  hero: HeroData;
}

export function HeroImage({ hero }: HeroImageProps) {
  return (
    <div className="mx-auto w-full max-w-sm md:max-w-none">
      <PortraitImage image={hero.image} name={hero.name} size={480} priority />
    </div>
  );
}
