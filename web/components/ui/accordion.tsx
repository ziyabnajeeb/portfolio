"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "single" | "multiple";
  defaultValue?: string | string[];
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  collapsible?: boolean;
}

const AccordionContext = React.createContext<{
  value: string | string[];
  onValueChange: (value: string | string[]) => void;
  type: "single" | "multiple";
  collapsible: boolean;
} | null>(null);

const AccordionItemContext = React.createContext<{ value?: string } | null>(null);

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ className, type = "single", defaultValue, value, onValueChange, collapsible = false, children, ...props }, ref) => {
    const [internalValue, setInternalValue] = React.useState<string | string[]>(defaultValue ?? (type === "multiple" ? [] : ""));
    const currentValue = value ?? internalValue;

    const handleChange = React.useCallback(
      (newValue: string | string[]) => {
        if (!value) setInternalValue(newValue);
        onValueChange?.(newValue);
      },
      [value, onValueChange]
    );

    return (
      <AccordionContext.Provider value={{ value: currentValue, onValueChange: handleChange, type, collapsible }}>
        <div ref={ref} className={cn("w-full", className)} {...props}>
          {children}
        </div>
      </AccordionContext.Provider>
    );
  }
);
Accordion.displayName = "Accordion";

const AccordionItemBase = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, value, children, ...props }, ref) => (
    <div ref={ref} className={className} data-value={value} {...props}>
      {children}
    </div>
  )
);
AccordionItemBase.displayName = "AccordionItemBase";

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, value, children, ...props }, ref) => (
    <AccordionItemContext.Provider value={{ value }}>
      <AccordionItemBase ref={ref} className={className} value={value} {...props}>
        {children}
      </AccordionItemBase>
    </AccordionItemContext.Provider>
  )
);
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<HTMLButtonElement, React.HTMLAttributes<HTMLButtonElement> & { children: React.ReactNode }>(
  ({ className, children, onClick, ...props }, ref) => {
    const context = React.useContext(AccordionContext);
    const accordionItem = React.useContext(AccordionItemContext);
    if (!context) return null;

    const isOpen = Array.isArray(context.value)
      ? context.value.includes(accordionItem?.value ?? "")
      : context.value === accordionItem?.value;

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
      onClick?.(event);
      const itemValue = accordionItem?.value;
      if (!itemValue) return;

      if (context.type === "multiple") {
        const values = Array.isArray(context.value) ? context.value : [];
        context.onValueChange(
          isOpen ? values.filter((value) => value !== itemValue) : [...values, itemValue]
        );
      } else {
        context.onValueChange(isOpen && context.collapsible ? "" : itemValue);
      }
    };

    return (
      <button
        ref={ref}
        type="button"
        data-state={isOpen ? "open" : "closed"}
        onClick={handleClick}
        className={cn(
          "group flex w-full items-center justify-between gap-4 py-5 text-left text-sm font-medium transition-all hover:no-underline",
          className
        )}
        {...props}
      >
        {children}
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-200 group-hover:border-primary/50 group-hover:text-primary group-data-[state=open]:border-primary group-data-[state=open]:bg-primary group-data-[state=open]:text-primary-foreground">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-180"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>
    );
  }
);
AccordionTrigger.displayName = "AccordionTrigger";

type AccordionContentProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd"
> & { children: React.ReactNode };

const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ className, children, ...props }, ref) => {
    const context = React.useContext(AccordionContext);
    const itemContext = React.useContext(AccordionItemContext);
    if (!context || !itemContext) return null;

    const isOpen = Array.isArray(context.value)
      ? context.value.includes(itemContext.value ?? "")
      : context.value === itemContext.value;

    return (
      <motion.div
        ref={ref}
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        data-state={isOpen ? "open" : "closed"}
        className={cn("overflow-hidden text-sm", className)}
        {...props}
      >
        <div className="pb-4 pt-0">{children}</div>
      </motion.div>
    );
  }
);
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
