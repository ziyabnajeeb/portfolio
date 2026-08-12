"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Icons } from "@/components/icons";
import { MainNav } from "./main-nav";
import { ThemeToggle } from "./theme-toggle";

interface HeaderBarProps {
  name: string;
}

export function HeaderBar({ name }: HeaderBarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full border border-border/60 bg-background/70 py-2 pr-2 pl-6 shadow-lg backdrop-blur-xl supports-backdrop-filter:bg-background/40">
        <Link href="/" className="shrink-0 text-lg font-bold tracking-tight text-foreground">
          {name}
          <span className="text-primary">.</span>
        </Link>

        <MainNav variant="pill" className="hidden md:flex" />

        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="/#footer"
            className="hidden items-center gap-3 rounded-full bg-foreground py-2 pr-2 pl-5 text-xs font-semibold tracking-wide text-background uppercase transition-transform hover:scale-[1.02] md:inline-flex"
          >
            Let&apos;s Talk
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-background text-foreground">
              <Icons.arrowRight className="h-3.5 w-3.5 -rotate-45" aria-hidden="true" />
            </span>
          </Link>
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Toggle menu"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-foreground md:hidden"
              >
                {open ? <X className="h-4 w-4" aria-hidden="true" /> : <Menu className="h-4 w-4" aria-hidden="true" />}
              </button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <MainNav variant="stack" className="mt-10" onLinkClick={() => setOpen(false)} />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
