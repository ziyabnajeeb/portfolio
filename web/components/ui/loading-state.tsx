import * as React from "react";
import { cn } from "@/lib/utils";

export interface LoadingStateProps extends React.HTMLAttributes<HTMLDivElement> {
  message?: string;
}

const LoadingState = React.forwardRef<HTMLDivElement, LoadingStateProps>(
  ({ className, message = "Loading...", ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex flex-col items-center justify-center py-12 text-center",
        className
      )}
      {...props}
    >
      <div className="mb-4 text-muted-foreground">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto animate-spin">
          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
      </div>
      <p className="text-sm text-muted-foreground">{message}</p>
    </div>
  )
);
LoadingState.displayName = "LoadingState";

export { LoadingState };