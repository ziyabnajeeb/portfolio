"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Icons } from "@/components/icons";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- next-themes hydration pattern
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border" aria-hidden="true" />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary/50"
    >
      <Icons.sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" aria-hidden="true" />
      <Icons.moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" aria-hidden="true" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
