"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SkillCard } from "./skill-card";
import type { SkillCategory as SkillCategoryData } from "@/types";

interface SkillCategoryProps {
  category: SkillCategoryData;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

export function SkillCategory({ category }: SkillCategoryProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="h-px w-6 bg-primary" aria-hidden="true" />
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          {category.title}
        </h3>
      </div>
      <motion.div
        className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2"
        initial={reduceMotion ? undefined : "hidden"}
        whileInView={reduceMotion ? undefined : "visible"}
        viewport={{ once: true, margin: "-40px" }}
        variants={containerVariants}
      >
        {category.skills.map((skill) => (
          <SkillCard key={skill._id} skill={skill} />
        ))}
      </motion.div>
    </div>
  );
}
