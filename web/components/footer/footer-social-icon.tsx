import { Icons } from "@/components/icons";

interface FooterSocialIconProps {
  platform: string;
  className?: string;
}

export function FooterSocialIcon({ platform, className }: FooterSocialIconProps) {
  switch (platform) {
    case "github":
      return <Icons.github className={className} aria-hidden="true" />;
    case "linkedin":
      return <Icons.linkedin className={className} aria-hidden="true" />;
    case "twitter":
      return <Icons.x className={className} aria-hidden="true" />;
    default:
      return <Icons.link className={className} aria-hidden="true" />;
  }
}
