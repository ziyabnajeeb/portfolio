'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import { navigation } from '@/lib/constants/navigation';

interface MainNavProps {
  className?: string;
  onLinkClick?: () => void;
}

export function MainNav({ className, onLinkClick }: MainNavProps) {
  const pathname = usePathname();

  return (
    <nav className={cn('flex flex-col gap-1 md:flex-row md:gap-0', className)}>
      {navigation.map((item) => {
        const isActive = pathname === item.href ||
          (item.href !== '/' && pathname.startsWith(item.href));

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onLinkClick}
            className={cn(
              'rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-foreground',
              isActive
                ? 'text-foreground'
                : 'text-muted-foreground'
            )}
            aria-current={isActive ? 'page' : undefined}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
