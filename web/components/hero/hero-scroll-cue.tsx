"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Icons } from "@/components/icons";

export function HeroScrollCue() {
  const reduceMotion = useReducedMotion();

  return (
    <Link
      href="#about"
      aria-label="Scroll to About section"
      className="absolute bottom-8 right-4 hidden h-24 w-24 items-center justify-center sm:right-6 sm:flex lg:right-8"
    >
      <motion.svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full text-foreground/40"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        aria-hidden="true"
      >
        <defs>
          <path id="hero-scroll-circle" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
        </defs>
        <text fill="currentColor" fontSize="6.5" letterSpacing="2">
          <textPath href="#hero-scroll-circle">Scroll Down • Scroll Down • </textPath>
        </text>
      </motion.svg>
      <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
        <Icons.chevronDown className="h-4 w-4" aria-hidden="true" />
      </span>
    </Link>
  );
}
