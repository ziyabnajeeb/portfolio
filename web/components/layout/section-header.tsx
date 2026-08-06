import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
}

const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ className, title, description, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("mx-auto max-w-2xl text-center", className)}
      {...props}
    >
      <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-muted-foreground">{description}</p>
      )}
    </div>
  )
);
SectionHeader.displayName = "SectionHeader";

export { SectionHeader };