'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import { useState } from 'react';
import { CommandMenu } from '@/components/command-menu';
import { PerformanceProvider } from '@/components/performance-provider';
import { SiteHeader } from '@/components/site-header';
import { ThemeProvider } from '@/components/theme-provider';

export function LayoutShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <PerformanceProvider>
      <ThemeProvider defaultTheme="dark">
        <div className="flex min-h-screen flex-col">
          <SiteHeader onOpenCommand={() => setOpen(true)} />
          <CommandMenu open={open} onOpenChange={setOpen} />
          {children}
          <footer className="w-full py-6 md:py-0 border-t mt-12">
            <div className="container flex flex-col md:h-24 items-center md:flex-row justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Create Awesome Node App. All rights reserved.
              </p>
              <nav className="flex gap-4 sm:gap-6">
                <Link
                  href="/templates"
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  Templates
                </Link>
                <Link
                  href="/extensions"
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  Extensions
                </Link>
                <Link
                  href="/docs"
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  Docs
                </Link>
              </nav>
            </div>
          </footer>
        </div>
      </ThemeProvider>
    </PerformanceProvider>
  );
}
