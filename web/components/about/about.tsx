import { sanityFetch, aboutQuery, siteSettingsQuery } from "@/lib/sanity";
import { Section } from "@/components/layout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { AboutContent } from "./about-content";
import { AboutImage } from "./about-image";
import { AboutStats } from "./about-stats";
import type { About as AboutData, SiteSettings } from "@/types";

export async function About() {
  const [about, siteSettings] = await Promise.all([
    sanityFetch<AboutData | null>(aboutQuery),
    sanityFetch<SiteSettings | null>(siteSettingsQuery),
  ]);

  if (!about) return null;

  return (
    <Section id="about" background="muted">
      <ScrollReveal className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:gap-16">
        <AboutImage image={about.image} name={siteSettings?.name ?? "About"} />
        <div>
          <AboutContent about={about} />
          {about.stats && about.stats.length > 0 && <AboutStats stats={about.stats} className="mt-10" />}
        </div>
      </ScrollReveal>
    </Section>
  );
}
