import { Badge } from "@/components/ui/badge";
import { getTechColor } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface TechBadgeProps {
  tech: string;
}

export function TechBadge({ tech }: TechBadgeProps) {
  const color = getTechColor(tech);

  return (
    <Badge
      variant="outline"
      className={cn("text-xs", !color && "text-muted-foreground")}
      style={
        color
          ? {
              color,
              borderColor: color,
              backgroundColor: color.startsWith("#") ? `${color}14` : undefined,
            }
          : undefined
      }
    >
      {tech}
    </Badge>
  );
}
