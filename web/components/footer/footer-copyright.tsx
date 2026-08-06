import * as React from "react";
import { cn } from "@/lib/utils";
import { site } from "@/lib/constants/site";

export type FooterCopyrightProps = React.HTMLAttributes<HTMLElement>;

const FooterCopyright = React.forwardRef<HTMLElement, FooterCopyrightProps>(
  ({ className, ...props }, ref) => (
    <footer
      ref={ref}
      className={cn("text-center text-xs text-muted-foreground", className)}
      {...props}
    >
      &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
    </footer>
  )
);
FooterCopyright.displayName = "FooterCopyright";

export { FooterCopyright };