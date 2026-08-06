import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
        404
      </p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
        Page Not Found
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Go back home</Link>
      </Button>
    </section>
  );
}
