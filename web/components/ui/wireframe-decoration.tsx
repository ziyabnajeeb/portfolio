"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

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

interface WireframeDecorationProps {
  className?: string;
}

export function WireframeDecoration({ className }: WireframeDecorationProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden="true"
    >
      <motion.svg
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        className="absolute -top-16 -right-16 h-90 w-90 text-foreground/10 md:h-125 md:w-125"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        {FACETS}
      </motion.svg>
    </div>
  );
}
