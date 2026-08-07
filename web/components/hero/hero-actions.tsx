import Link from "next/link";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import type { Cta } from "@/types";

interface HeroActionsProps {
  ctas: Cta[];
  className?: string;
}

export function HeroActions({ ctas, className }: HeroActionsProps) {
  const [primary, secondary] = ctas;

  return (
    <div className={cn("flex flex-wrap items-center gap-6", className)}>
      {primary && <PrimaryCta cta={primary} />}
      {secondary && <SecondaryCta cta={secondary} />}
    </div>
  );
}

function isExternalHref(href: string) {
  return href.startsWith("http");
}

function PrimaryCta({ cta }: { cta: Cta }) {
  const isExternal = isExternalHref(cta.href);

  return (
    <Link
      href={cta.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="group inline-flex h-17.5 items-center gap-4 rounded-full bg-primary py-0 pr-3.75 pl-12.5 text-xs font-medium tracking-[2px] text-primary-foreground uppercase transition-transform duration-300 ease-out hover:scale-[1.015] hover:brightness-110"
    >
      {cta.label}
      <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full bg-background text-foreground">
        <Icons.arrowRight className="h-4 w-4" aria-hidden="true" />
      </span>
    </Link>
  );
}

function SecondaryCta({ cta }: { cta: Cta }) {
  const isExternal = isExternalHref(cta.href);

  return (
    <Link
      href={cta.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="group inline-flex items-center gap-4 text-xs font-medium tracking-[2px] text-foreground uppercase transition-opacity hover:opacity-70"
    >
      {cta.label}
      <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full bg-foreground/10 text-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
        <Icons.arrowRight className="h-4 w-4" aria-hidden="true" />
      </span>
    </Link>
  );
}
