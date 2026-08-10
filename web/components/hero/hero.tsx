import { sanityFetch, heroQuery, siteSettingsQuery } from "@/lib/sanity";
import { Container } from "@/components/layout";
import { HeroContent } from "./hero-content";
import { HeroBackgroundSlider } from "./hero-background-slider";
import { HeroScrollCue } from "./hero-scroll-cue";
import type { Hero as HeroData, SiteSettings } from "@/types";

export async function Hero() {
  const [hero, siteSettings] = await Promise.all([
    sanityFetch<HeroData | null>(heroQuery),
    sanityFetch<SiteSettings | null>(siteSettingsQuery),
  ]);

  if (!hero) return null;

  return (
    <section className="relative overflow-hidden">
      <HeroBackgroundSlider />
      <Container className="relative flex min-h-[85vh] flex-col justify-center py-28 md:py-36">
        <HeroContent hero={hero} siteSettings={siteSettings} />
      </Container>
      <HeroScrollCue />
      <span
        className="absolute bottom-8 left-4 hidden -rotate-90 text-xs font-medium tracking-[0.3em] text-muted-foreground/60 uppercase sm:left-6 sm:block lg:left-8"
        style={{ transformOrigin: "left bottom" }}
        aria-hidden="true"
      >
        Homepage
      </span>
    </section>
  );
}
