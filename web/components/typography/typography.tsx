import * as React from "react";
import { cn } from "@/lib/utils";

export type TypographyH1Props = React.HTMLAttributes<HTMLHeadingElement>;

const TypographyH1 = React.forwardRef<HTMLHeadingElement, TypographyH1Props>(
  ({ className, ...props }, ref) => (
    <h1
      ref={ref}
      className={cn(
        "text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl",
        className
      )}
      {...props}
    />
  )
);
TypographyH1.displayName = "TypographyH1";

export type TypographyH2Props = React.HTMLAttributes<HTMLHeadingElement>;

const TypographyH2 = React.forwardRef<HTMLHeadingElement, TypographyH2Props>(
  ({ className, ...props }, ref) => (
    <h2
      ref={ref}
      className={cn(
        "text-3xl font-bold tracking-tight text-foreground sm:text-4xl",
        className
      )}
      {...props}
    />
  )
);
TypographyH2.displayName = "TypographyH2";

export type TypographyH3Props = React.HTMLAttributes<HTMLHeadingElement>;

const TypographyH3 = React.forwardRef<HTMLHeadingElement, TypographyH3Props>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(
        "text-2xl font-semibold tracking-tight text-foreground",
        className
      )}
      {...props}
    />
  )
);
TypographyH3.displayName = "TypographyH3";

export type TypographyH4Props = React.HTMLAttributes<HTMLHeadingElement>;

const TypographyH4 = React.forwardRef<HTMLHeadingElement, TypographyH4Props>(
  ({ className, ...props }, ref) => (
    <h4
      ref={ref}
      className={cn(
        "text-xl font-semibold tracking-tight text-foreground",
        className
      )}
      {...props}
    />
  )
);
TypographyH4.displayName = "TypographyH4";

export type TypographyPProps = React.HTMLAttributes<HTMLParagraphElement>;

const TypographyP = React.forwardRef<HTMLParagraphElement, TypographyPProps>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("leading-7 text-muted-foreground", className)}
      {...props}
    />
  )
);
TypographyP.displayName = "TypographyP";

export type TypographySmallProps = React.HTMLAttributes<HTMLParagraphElement>;

const TypographySmall = React.forwardRef<HTMLParagraphElement, TypographySmallProps>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
);
TypographySmall.displayName = "TypographySmall";

export type TypographyMutedProps = React.HTMLAttributes<HTMLParagraphElement>;

const TypographyMuted = React.forwardRef<HTMLParagraphElement, TypographyMutedProps>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
);
TypographyMuted.displayName = "TypographyMuted";

export { TypographyH1, TypographyH2, TypographyH3, TypographyH4, TypographyP, TypographySmall, TypographyMuted };