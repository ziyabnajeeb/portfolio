import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionDividerProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
}

const SectionDivider = React.forwardRef<HTMLDivElement, SectionDividerProps>(
  ({ className, label, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("relative my-8 flex items-center", className)}
      {...props}
    >
      <div className="absolute inset-x-0 top-1/2 h-px bg-border" />
      {label && (
        <div className="relative mx-auto px-4 bg-background">
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {label}
          </span>
        </div>
      )}
    </div>
  )
);
SectionDivider.displayName = "SectionDivider";

export { SectionDivider };