"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const SLIDES = [
  "/hero/xpertogo-hero-bg.png",
  "/hero/c6-hero-bg.png",
  "/hero/cavalos-hero-bg.png",
];

export function HeroBackgroundSlider() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [reduceMotion]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <AnimatePresence>
        <motion.div
          key={SLIDES[index]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={SLIDES[index]}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover object-right opacity-30 dark:opacity-20 dark:invert"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
