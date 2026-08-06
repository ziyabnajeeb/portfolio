import { TypographyH2 } from "@/components/typography";
import { PortableText } from "@/components/ui/portable-text";
import type { About as AboutData } from "@/types";

interface AboutContentProps {
  about: AboutData;
}

export function AboutContent({ about }: AboutContentProps) {
  return (
    <div>
      <TypographyH2>{about.headline}</TypographyH2>
      <PortableText value={about.bio} className="mt-6" />
      {about.philosophy && about.philosophy.length > 0 && (
        <div className="mt-8 border-l-2 border-primary/30 pl-6">
          <PortableText value={about.philosophy} />
        </div>
      )}
    </div>
  );
}
