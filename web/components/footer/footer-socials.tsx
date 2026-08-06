import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { socials } from "@/lib/constants/socials";

export type FooterSocialsProps = React.HTMLAttributes<HTMLElement>;

const FooterSocials = React.forwardRef<HTMLElement, FooterSocialsProps>(
  ({ className, ...props }, ref) => (
    <nav
      ref={ref}
      className={cn("flex items-center gap-4", className)}
      {...props}
    >
      {socials.map((social) => (
        <Link
          key={social.href}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground transition-colors hover:text-foreground"
          aria-label={social.label}
        >
          {social.label}
        </Link>
      ))}
    </nav>
  )
);
FooterSocials.displayName = "FooterSocials";

export { FooterSocials };