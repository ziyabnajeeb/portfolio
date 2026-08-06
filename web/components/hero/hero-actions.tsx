import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Cta } from "@/types";

interface HeroActionsProps {
  ctas: Cta[];
  className?: string;
}

export function HeroActions({ ctas, className }: HeroActionsProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-4", className)}>
      {ctas.map((cta, index) => {
        const isExternal = cta.href.startsWith("http");
        return (
          <Button key={cta.href} asChild size="lg" variant={index === 0 ? "default" : "outline"}>
            <Link
              href={cta.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
            >
              {cta.label}
            </Link>
          </Button>
        );
      })}
    </div>
  );
}
