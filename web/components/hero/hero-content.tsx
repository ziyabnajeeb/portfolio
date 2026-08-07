"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
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
    <div className="max-w-3xl">
      {hero.greeting && (
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
          {hero.greeting}
        </p>
      )}
      <h1 className="mt-4 text-5xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
        {hero.name}
      </h1>
      <div className="mt-1 h-[1.2em] overflow-hidden text-5xl font-light leading-[1.05] tracking-tight text-muted-foreground sm:text-6xl md:text-7xl">
        {reduceMotion ? (
          <span>{hero.roles[0]}</span>
        ) : (
          <AnimatePresence mode="wait">
            <motion.span
              key={hero.roles[roleIndex]}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="block"
            >
              {hero.roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
        )}
      </div>
      <p className="mt-8 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
        {hero.summary}
      </p>
      {hero.ctas && hero.ctas.length > 0 && <HeroActions ctas={hero.ctas} className="mt-10" />}
      {siteSettings?.socialLinks && siteSettings.socialLinks.length > 0 && (
        <HeroSocials links={siteSettings.socialLinks} className="mt-10" />
      )}
    </div>
  );
}
