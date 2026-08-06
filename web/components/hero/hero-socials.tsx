import Link from "next/link";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import type { SocialLink } from "@/types";

const platformIcon: Record<SocialLink["platform"], keyof typeof Icons> = {
  github: "github",
  linkedin: "linkedin",
  twitter: "x",
  email: "mail",
  other: "link",
};

const platformLabel: Record<SocialLink["platform"], string> = {
  github: "GitHub",
  linkedin: "LinkedIn",
  twitter: "Twitter",
  email: "Email",
  other: "Link",
};

interface HeroSocialsProps {
  links: SocialLink[];
  className?: string;
}

export function HeroSocials({ links, className }: HeroSocialsProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {links.map((link) => {
        const Icon = Icons[platformIcon[link.platform]];
        const isExternal = link.url.startsWith("http");
        return (
          <Link
            key={link.url}
            href={link.url}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            aria-label={platformLabel[link.platform]}
            className="flex h-10 w-10 items-center justify-center rounded-full border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
          </Link>
        );
      })}
    </div>
  );
}
