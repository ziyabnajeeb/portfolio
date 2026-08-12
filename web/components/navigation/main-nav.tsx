"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { navigation, ANCHOR_SECTION_IDS } from "@/lib/constants/navigation";

interface MainNavProps {
  variant?: "pill" | "stack";
  className?: string;
  onLinkClick?: () => void;
}

export function MainNav({ variant = "pill", className, onLinkClick }: MainNavProps) {
  const pathname = usePathname();
  const [activeAnchor, setActiveAnchor] = useState<string | null>(null);

  useEffect(() => {
    if (pathname !== "/") return;

    const elements = ANCHOR_SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveAnchor(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  function isActive(href: string, type: "route" | "anchor") {
    if (type === "route") {
      if (href === "/") return pathname === "/" && !activeAnchor;
      return pathname.startsWith(href);
    }
    return pathname === "/" && activeAnchor === href.split("#")[1];
  }

  return (
    <nav
      className={cn(
        variant === "pill" ? "items-center gap-1 rounded-full bg-muted p-1.5" : "flex flex-col items-start gap-2",
        className
      )}
    >
      {navigation.map((item) => {
        const active = isActive(item.href, item.type);
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onLinkClick}
            aria-current={active ? "page" : undefined}
            className={cn(
              "relative font-medium transition-colors",
              variant === "pill" ? "px-4 py-2 text-sm" : "px-2 py-1.5 text-base",
              active ? "text-primary" : "text-muted-foreground hover:text-foreground"
            )}
          >
            {item.label}
            {variant === "pill" && active && (
              <span className="absolute bottom-1 left-1/2 h-0.5 w-3 -translate-x-1/2 rounded-full bg-primary" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
