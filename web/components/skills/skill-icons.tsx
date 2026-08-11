import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGreensock,
} from "react-icons/si";
import { FaSalesforce } from "react-icons/fa6";
import { Icons } from "@/components/icons";

interface SkillIconProps {
  icon: string;
  className?: string;
  color?: string;
}

export function SkillIcon({ icon, className, color }: SkillIconProps) {
  switch (icon) {
    case "react":
      return <SiReact className={className} color={color} />;
    case "nextjs":
      return <SiNextdotjs className={className} color={color} />;
    case "typescript":
      return <SiTypescript className={className} color={color} />;
    case "javascript":
      return <SiJavascript className={className} color={color} />;
    case "tailwindcss":
      return <SiTailwindcss className={className} color={color} />;
    case "bootstrap":
      return <SiBootstrap className={className} color={color} />;
    case "nodejs":
      return <SiNodedotjs className={className} color={color} />;
    case "express":
      return <SiExpress className={className} color={color} />;
    case "mongodb":
      return <SiMongodb className={className} color={color} />;
    case "salesforce":
      return <FaSalesforce className={className} color={color} />;
    case "git":
      return <SiGit className={className} color={color} />;
    case "gsap":
      return <SiGreensock className={className} color={color} />;
    default:
      return <Icons.design className={className} style={{ color }} />;
  }
}

const SKILL_COLORS: Record<string, string> = {
  react: "#61DAFB",
  nextjs: "var(--foreground)",
  typescript: "#3178C6",
  javascript: "#F7DF1E",
  tailwindcss: "#06B6D4",
  bootstrap: "#7952B3",
  nodejs: "#339933",
  express: "var(--foreground)",
  mongodb: "#47A248",
  salesforce: "#00A1E0",
  photoshop: "#31A8FF",
  illustrator: "#FF9A00",
  git: "#F05032",
  gsap: "#88CE02",
};

export function getSkillColor(icon: string): string {
  return SKILL_COLORS[icon] ?? "var(--muted-foreground)";
}
