"use client";

import { motion, useReducedMotion } from "framer-motion";

const FACETS = (
  <>
    <polygon points="100,10 175,55 175,145 100,190 25,145 25,55" />
    <polygon points="100,10 150,40 100,70 50,40" />
    <polygon points="100,190 150,160 100,130 50,160" />
    <line x1="100" y1="10" x2="100" y2="70" />
    <line x1="100" y1="130" x2="100" y2="190" />
    <line x1="175" y1="55" x2="100" y2="70" />
    <line x1="25" y1="55" x2="100" y2="70" />
    <line x1="175" y1="145" x2="100" y2="130" />
    <line x1="25" y1="145" x2="100" y2="130" />
    <line x1="100" y1="70" x2="100" y2="130" />
  </>
);

export function HeroDecoration() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.svg
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        className="absolute -right-32 top-1/2 h-125 w-125 text-foreground/10 md:h-162.5 md:w-162.5"
        style={{ translateY: "-50%" }}
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        {FACETS}
      </motion.svg>
      <motion.svg
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        className="absolute -left-20 -top-20 h-70 w-70 text-foreground/10 md:h-90 md:w-90"
        animate={reduceMotion ? undefined : { rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      >
        {FACETS}
      </motion.svg>
    </div>
  );
}
