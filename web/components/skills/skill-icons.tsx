import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiSass,
  SiTailwindcss,
  SiMui,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiWebpack,
  SiNpm,
  SiGreensock,
} from "react-icons/si";
import { FaSalesforce } from "react-icons/fa6";
import { Icons } from "@/components/icons";

interface SkillIconProps {
  icon: string;
  className?: string;
}

export function SkillIcon({ icon, className }: SkillIconProps) {
  switch (icon) {
    case "react":
      return <SiReact className={className} />;
    case "nextjs":
      return <SiNextdotjs className={className} />;
    case "typescript":
      return <SiTypescript className={className} />;
    case "javascript":
      return <SiJavascript className={className} />;
    case "html5":
      return <SiHtml5 className={className} />;
    case "css3":
      return <SiCss className={className} />;
    case "sass":
      return <SiSass className={className} />;
    case "tailwindcss":
      return <SiTailwindcss className={className} />;
    case "materialui":
      return <SiMui className={className} />;
    case "bootstrap":
      return <SiBootstrap className={className} />;
    case "nodejs":
      return <SiNodedotjs className={className} />;
    case "express":
      return <SiExpress className={className} />;
    case "mongodb":
      return <SiMongodb className={className} />;
    case "salesforce":
      return <FaSalesforce className={className} />;
    case "git":
      return <SiGit className={className} />;
    case "webpack":
      return <SiWebpack className={className} />;
    case "npm":
      return <SiNpm className={className} />;
    case "gsap":
      return <SiGreensock className={className} />;
    default:
      return <Icons.design className={className} />;
  }
}
