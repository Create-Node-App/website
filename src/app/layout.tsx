import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type React from 'react';
import '@/app/globals.css';
import { LayoutShell } from '@/components/layout-shell';
import { jsonLdScript, organizationJsonLd, websiteJsonLd } from '@/lib/seo';

const siteUrl = 'https://create-awesome-node-app.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Create Awesome Node App',
    template: '%s | Create Awesome Node App',
  },
  description:
    'Discover production-ready templates and extensions to jumpstart your next Node.js project. Combine starters and add-ons to build faster.',
  keywords: [
    'node templates',
    'node.js starter',
    'create node app',
    'typescript boilerplate',
    'next.js template',
    'nestjs starter',
    'node extensions',
  ],
  authors: [{ name: 'Create Awesome Node App Team', url: siteUrl }],
  creator: 'Create Awesome Node App',
  publisher: 'Create Awesome Node App',
  openGraph: {
    title: 'Create Awesome Node App',
    description:
      'Explore curated templates & extensions for building modern Node.js applications quickly and reliably.',
    url: siteUrl,
    siteName: 'Create Awesome Node App',
    images: [
      {
        url: '/og-default.png', // raster fallback
        width: 1200,
        height: 630,
        alt: 'Create Awesome Node App – Templates & Extensions',
      },
      {
        url: '/og-default.svg', // some platforms now support SVG (fallback above covers others)
        width: 1200,
        height: 630,
        alt: 'Create Awesome Node App – Templates & Extensions',
        type: 'image/svg+xml',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Create Awesome Node App',
    description: 'Discover Node.js templates and extensions to accelerate your development workflow.',
    images: ['/og-default.png', '/og-default.svg'],
    creator: '@',
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'technology',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/site.webmanifest',
};
const inter = Inter({ subsets: ['latin'], display: 'swap' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: contenido controlado
          dangerouslySetInnerHTML={{
            __html: jsonLdScript({
              '@context': 'https://schema.org',
              '@graph': [organizationJsonLd(), websiteJsonLd()],
            }),
          }}
        />
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
