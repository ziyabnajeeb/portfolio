"use client";

import { motion } from "framer-motion";
import { SkillIcon } from "./skill-icons";
import type { Skill } from "@/types";

interface SkillCardProps {
  skill: Skill;
}

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <motion.div
      variants={itemVariants}
      transition={{ duration: 0.35, ease: "easeOut" }}
      whileHover={{ y: -2 }}
      className="group flex items-center gap-3 rounded-lg border bg-card px-4 py-3 transition-colors hover:border-primary/50 hover:bg-primary/5"
    >
      <SkillIcon
        icon={skill.icon}
        className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
      />
      <span className="text-sm font-medium text-foreground">{skill.name}</span>
    </motion.div>
  );
}
