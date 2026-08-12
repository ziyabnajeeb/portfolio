import { sanityFetch, siteSettingsQuery } from "@/lib/sanity";
import { Icons } from "@/components/icons";
import { FooterSocials } from "./footer-socials";
import type { SiteSettings } from "@/types";

interface FooterProps {
  className?: string;
}

export async function Footer({ className }: FooterProps) {
  const settings = await sanityFetch<SiteSettings>(siteSettingsQuery);
  const name = settings?.name ?? "Ziyab Najeeb";
  const email = settings?.email;
  const location = settings?.location;

  return (
    <footer id="footer" className={className}>
      <div className="bg-muted">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 rounded-3xl border border-border bg-background p-8 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div className="max-w-sm">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                Let&apos;s work together
              </div>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Have a project in mind?
              </h2>
              <p className="mt-2 text-muted-foreground">
                I&apos;d love to hear about your ideas and help you bring them to life.
              </p>
            </div>

            <div className="flex flex-col items-start gap-4 sm:items-end">
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-start gap-2 sm:items-end">
                  {email && (
                    <a
                      href={`mailto:${email}`}
                      className="flex items-center gap-2 text-sm text-foreground transition-colors hover:text-primary"
                    >
                      <Icons.mail className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                      {email}
                    </a>
                  )}
                  {location && (
                    <span className="flex items-center gap-2 text-sm text-foreground">
                      <Icons.mapPin className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                      {location}
                    </span>
                  )}
                </div>
                {email && (
                  <a
                    href={`mailto:${email}`}
                    aria-label="Email me"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
                  >
                    <Icons.arrowRight className="h-4 w-4 -rotate-45" aria-hidden="true" />
                  </a>
                )}
              </div>
              <FooterSocials socialLinks={settings?.socialLinks} />
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} {name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
