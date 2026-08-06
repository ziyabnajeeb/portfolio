'use client';

import { FooterLinks } from './footer-links';
import { FooterSocials } from './footer-socials';
import { FooterCopyright } from './footer-copyright';

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={className}>
      <div className="container mx-auto max-w-screen-xl px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center gap-1 md:items-start">
            <FooterLinks />
            <FooterCopyright />
          </div>
          <FooterSocials />
        </div>
      </div>
    </footer>
  );
}
