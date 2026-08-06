import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { navigation } from "@/lib/constants/navigation";

export type FooterLinksProps = React.HTMLAttributes<HTMLElement>;

const FooterLinks = React.forwardRef<HTMLElement, FooterLinksProps>(
  ({ className, ...props }, ref) => (
    <nav
      ref={ref}
      className={cn("flex flex-col gap-3 text-sm", className)}
      {...props}
    >
      {navigation.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
);
FooterLinks.displayName = "FooterLinks";

export { FooterLinks };