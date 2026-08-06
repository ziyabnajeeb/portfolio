import { sanityFetch, heroQuery, siteSettingsQuery } from "@/lib/sanity";
import { Section } from "@/components/layout";
import { HeroContent } from "./hero-content";
import { HeroImage } from "./hero-image";
import type { Hero as HeroData, SiteSettings } from "@/types";

export async function Hero() {
  const [hero, siteSettings] = await Promise.all([
    sanityFetch<HeroData | null>(heroQuery),
    sanityFetch<SiteSettings | null>(siteSettingsQuery),
  ]);

  if (!hero) return null;

  return (
    <Section className="pt-24 md:pt-32">
      <div className="grid items-center gap-12 md:grid-cols-[1.2fr_1fr] md:gap-16">
        <HeroContent hero={hero} siteSettings={siteSettings} />
        <HeroImage hero={hero} />
      </div>
    </Section>
  );
}
