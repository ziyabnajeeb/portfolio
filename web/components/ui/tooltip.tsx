import * as React from "react";
import { cn } from "@/lib/utils";

export interface TooltipProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "content"> {
  content: React.ReactNode;
  side?: "top" | "right" | "bottom" | "left";
}

const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  ({ className, content, side = "top", children, ...props }, ref) => {
    const [show, setShow] = React.useState(false);

    return (
      <div
        ref={ref}
        className={cn("relative inline-block", className)}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onFocus={() => setShow(true)}
        onBlur={() => setShow(false)}
        {...props}
      >
        {children}
        {show && (
          <div
            role="tooltip"
            className={cn(
              "absolute z-50 rounded-md bg-popover px-3 py-1.5 text-xs text-popover-foreground shadow-md",
              "animate-in fade-in-0 zoom-in-95",
              side === "top" && "bottom-full left-1/2 -translate-x-1/2 mb-2",
              side === "bottom" && "top-full left-1/2 -translate-x-1/2 mt-2",
              side === "left" && "right-full top-1/2 -translate-y-1/2 mr-2",
              side === "right" && "left-full top-1/2 -translate-y-1/2 ml-2"
            )}
          >
            {content}
          </div>
        )}
      </div>
    );
  }
);
Tooltip.displayName = "Tooltip";

export { Tooltip };