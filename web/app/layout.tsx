import type { Metadata } from 'next';
import { Montserrat, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { Header } from '@/components/navigation/header';
import { Footer } from '@/components/footer';
import './globals.css';

const montserrat = Montserrat({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Portfolio - Software Engineer',
    template: '%s | Portfolio',
  },
  description: 'Personal portfolio showcasing my work as a software engineer',
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'Portfolio - Software Engineer',
    description: 'Personal portfolio showcasing my work as a software engineer',
    type: 'website',
    locale: 'en_US',
    siteName: 'Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio - Software Engineer',
    description: 'Personal portfolio showcasing my work as a software engineer',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${montserrat.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-background font-sans antialiased" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
