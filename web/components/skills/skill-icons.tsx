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
} from "react-icons/si";
import { FaSalesforce } from "react-icons/fa6";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import {
  PhotoshopIcon,
  PHOTOSHOP_VIEWBOX,
  IllustratorIcon,
  ILLUSTRATOR_VIEWBOX,
  GsapMascotIcon,
  GSAP_VIEWBOX,
} from "./brand-icons";

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
      return <FaSalesforce className={cn(className, "h-7 w-7")} color={color} />;
    case "git":
      return <SiGit className={cn(className, "h-7 w-7")} color={color} />;
    case "gsap":
      return <GsapMascotIcon viewBox={GSAP_VIEWBOX} className={cn(className, "h-7 w-7")} />;
    case "photoshop":
      return <PhotoshopIcon viewBox={PHOTOSHOP_VIEWBOX} className={cn(className, "h-7 w-7")} />;
    case "illustrator":
      return <IllustratorIcon viewBox={ILLUSTRATOR_VIEWBOX} className={cn(className, "h-7 w-7")} />;
    default:
      return <Icons.design className={cn(className, "h-7 w-7")} style={{ color }} />;
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
  gsap: "#8AC640",
};

export function getSkillColor(icon: string): string {
  return SKILL_COLORS[icon] ?? "var(--muted-foreground)";
}
