import * as React from "react";
import { cn } from "@/lib/utils";
import { Dialog as RadixDialog, DialogContent, DialogTitle, DialogDescription, DialogTrigger, DialogClose } from "@radix-ui/react-dialog";

export type DialogHeaderProps = React.HTMLAttributes<HTMLDivElement>;

const DialogHeader = React.forwardRef<HTMLDivElement, DialogHeaderProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)} {...props} />
  )
);
DialogHeader.displayName = "DialogHeader";

const Dialog = RadixDialog;

export { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger, DialogClose };