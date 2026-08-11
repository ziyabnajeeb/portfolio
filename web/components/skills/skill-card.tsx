"use client";

import { motion } from "framer-motion";
import { SkillIcon, getSkillColor } from "./skill-icons";
import type { Skill } from "@/types";

interface SkillCardProps {
  skill: Skill;
}

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

// Decorative only — a fixed arc length applied to every skill, not a
// per-skill proficiency value. See docs/tasks/05-landing-page.md:
// "Do not use percentage bars. Do not rate yourself."
const RING_RADIUS = 34;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;
const RING_ARC_RATIO = 0.78;

export function SkillCard({ skill }: SkillCardProps) {
  const color = getSkillColor(skill.icon);

  return (
    <motion.div
      variants={itemVariants}
      transition={{ duration: 0.35, ease: "easeOut" }}
      whileHover={{ y: -2 }}
      className="flex w-24 flex-col items-center gap-3 text-center"
    >
      <div className="relative flex h-20 w-20 items-center justify-center">
        <svg viewBox="0 0 80 80" className="absolute inset-0 h-full w-full -rotate-90">
          <circle
            cx="40"
            cy="40"
            r={RING_RADIUS}
            fill="none"
            strokeWidth="2"
            className="stroke-border"
          />
          <circle
            cx="40"
            cy="40"
            r={RING_RADIUS}
            fill="none"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray={RING_CIRCUMFERENCE}
            strokeDashoffset={RING_CIRCUMFERENCE * (1 - RING_ARC_RATIO)}
          />
        </svg>
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-card">
          <SkillIcon icon={skill.icon} color={color} className="h-6 w-6" />
        </div>
      </div>
      <span className="text-xs font-semibold tracking-wide text-foreground uppercase">
        {skill.name}
      </span>
    </motion.div>
  );
}
