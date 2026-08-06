import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  container?: boolean;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, id, container = true, children, ...props }, ref) => (
    <section
      ref={ref}
      id={id}
      className={cn("py-16 md:py-24", container && "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    >
      {children}
    </section>
  )
);
Section.displayName = "Section";

export { Section };