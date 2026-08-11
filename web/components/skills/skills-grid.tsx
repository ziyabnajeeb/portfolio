"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SkillCard } from "./skill-card";
import type { Skill } from "@/types";

interface SkillsGridProps {
  skills: Skill[];
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04 },
  },
};

export function SkillsGrid({ skills }: SkillsGridProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-10"
      initial={reduceMotion ? undefined : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={{ once: true, margin: "-40px" }}
      variants={containerVariants}
    >
      {skills.map((skill) => (
        <SkillCard key={skill._id} skill={skill} />
      ))}
    </motion.div>
  );
}
