import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  title,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('space-y-2', align === 'center' && 'text-center', className)}>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {description && (
        <p className="max-w-[600px] text-lg text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
