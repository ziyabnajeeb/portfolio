import * as React from "react";
import { cn } from "@/lib/utils";

export interface PageHeaderProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  description?: string;
}

const PageHeader = React.forwardRef<HTMLElement, PageHeaderProps>(
  ({ className, title, description, ...props }, ref) => (
    <header
      ref={ref}
      className={cn("mx-auto max-w-3xl text-center", className)}
      {...props}
    >
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="mt-4 text-lg text-muted-foreground">{description}</p>
      )}
    </header>
  )
);
PageHeader.displayName = "PageHeader";

export { PageHeader };