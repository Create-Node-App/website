import { Inter } from 'next/font/google';
import type React from 'react';
import '@/app/globals.css';
import { LayoutShell } from '@/components/layout-shell';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Awesome Node App',
  description: 'Discover templates and extensions for create-awesome-node-app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
