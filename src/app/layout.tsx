import { Github, Package } from 'lucide-react';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import type React from 'react';
import '@/app/globals.css';

import { ThemeProvider } from '@/components/theme-provider';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Awesome Node App',
  description: 'Discover templates and extensions for create-awesome-node-app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <ThemeProvider defaultTheme="dark">
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-16 items-center">
                <Link href="/" className="flex items-center gap-2">
                  <div className="h-8 w-12 rounded-md bg-gradient-to-br from-primary to-indigo-500 flex items-center justify-center text-white font-bold">
                    CNA
                  </div>
                  <span className="hidden font-bold sm:inline-block">Create Awesome Node App</span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
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
                <div className="ml-auto flex items-center gap-2">
                  <ThemeToggle />
                  <Link href="https://www.npmjs.com/package/create-awesome-node-app" target="_blank">
                    <Button variant="ghost" size="icon">
                      <Package className="h-5 w-5" />
                      <span className="sr-only">NPM Package</span>
                    </Button>
                  </Link>
                  <Link href="https://github.com/Create-Node-App" target="_blank">
                    <Button variant="ghost" size="icon">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </header>
            {children}
            <footer className="w-full py-6 md:py-0 border-t">
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
      </body>
    </html>
  );
}
