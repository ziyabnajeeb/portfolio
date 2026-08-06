import {
  PortableText as PortableTextRenderer,
  type PortableTextComponents,
  type PortableTextMarkComponentProps,
} from "@portabletext/react";
import { cn } from "@/lib/utils";
import type { PortableTextBlock } from "@/types";

interface LinkMark {
  _type: "link";
  href: string;
}

const components: PortableTextComponents = {
  block: {
    h3: ({ children }) => (
      <h3 className="mt-6 text-xl font-semibold tracking-tight text-foreground first:mt-0">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="mt-4 text-lg font-semibold tracking-tight text-foreground first:mt-0">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="leading-7 text-muted-foreground not-first:mt-4">
        {children}
      </p>
    ),
  },
  marks: {
    link: ({ children, value }: PortableTextMarkComponentProps<LinkMark>) => {
      const href = value?.href ?? "#";
      const isExternal = href.startsWith("http");
      return (
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="font-medium text-foreground underline underline-offset-4 hover:text-primary"
        >
          {children}
        </a>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-4 ml-6 list-disc space-y-2 text-muted-foreground">{children}</ul>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-7">{children}</li>,
  },
};

interface PortableTextProps {
  value: PortableTextBlock[];
  className?: string;
}

export function PortableText({ value, className }: PortableTextProps) {
  return (
    <div className={cn(className)}>
      <PortableTextRenderer value={value} components={components} />
    </div>
  );
}
