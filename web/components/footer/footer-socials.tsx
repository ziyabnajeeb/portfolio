import Link from "next/link";
import { FooterSocialIcon } from "./footer-social-icon";
import type { SocialLink } from "@/types";

interface FooterSocialsProps {
  socialLinks?: SocialLink[];
}

export function FooterSocials({ socialLinks }: FooterSocialsProps) {
  const links = (socialLinks ?? []).filter((link) => link.platform !== "email");

  if (links.length === 0) return null;

  return (
    <div className="flex items-center gap-2">
      {links.map((link) => (
        <Link
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.platform}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
        >
          <FooterSocialIcon platform={link.platform} className="h-4 w-4" />
        </Link>
      ))}
    </div>
  );
}
