"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { TypographyH1 } from "@/components/typography";
import { HeroActions } from "./hero-actions";
import { HeroSocials } from "./hero-socials";
import type { Hero as HeroData, SiteSettings } from "@/types";

interface HeroContentProps {
  hero: HeroData;
  siteSettings: SiteSettings | null;
}

export function HeroContent({ hero, siteSettings }: HeroContentProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || hero.roles.length <= 1) return;
    const interval = setInterval(() => {
      setRoleIndex((current) => (current + 1) % hero.roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [reduceMotion, hero.roles.length]);

  return (
    <div>
      {hero.greeting && (
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          {hero.greeting}
        </p>
      )}
      <TypographyH1 className="mt-3">{hero.name}</TypographyH1>
      <div className="mt-2 h-10 overflow-hidden text-xl font-semibold text-primary sm:text-2xl">
        {reduceMotion ? (
          <span>{hero.roles[0]}</span>
        ) : (
          <AnimatePresence mode="wait">
            <motion.span
              key={hero.roles[roleIndex]}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="block"
            >
              {hero.roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
        )}
      </div>
      <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
        {hero.summary}
      </p>
      {hero.ctas && hero.ctas.length > 0 && <HeroActions ctas={hero.ctas} className="mt-8" />}
      {siteSettings?.socialLinks && siteSettings.socialLinks.length > 0 && (
        <HeroSocials links={siteSettings.socialLinks} className="mt-8" />
      )}
    </div>
  );
}
