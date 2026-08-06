import * as React from "react";
import { cn } from "@/lib/utils";

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeClasses = {
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-14 w-14 text-lg",
  xl: "h-20 w-20 text-xl",
};

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, alt, fallback, size = "md", ...props }, ref) => {
    const [imgError, setImgError] = React.useState(false);
    const showImg = src && !imgError;
    const initials = fallback ?? alt?.charAt(0).toUpperCase() ?? "?";

    return (
      <div
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center rounded-full bg-muted text-muted-foreground font-medium",
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {showImg ? (
          <img
            src={src}
            alt={alt}
            className="h-full w-full rounded-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <span className="select-none">{initials}</span>
        )}
      </div>
    );
  }
);
Avatar.displayName = "Avatar";

export { Avatar };