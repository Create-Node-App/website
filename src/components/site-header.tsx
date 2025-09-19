'use client';

import { Gauge, Github, Package, Search } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { usePerformanceMode } from '@/components/performance-provider';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface NavItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: '/templates', label: 'Templates' },
  { href: '/extensions', label: 'Extensions' },
  { href: '/docs', label: 'Docs' },
];

export function SiteHeader({ onOpenCommand }: { onOpenCommand?: () => void }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const { performanceMode, togglePerformanceMode } = usePerformanceMode();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b transition-colors backdrop-blur supports-[backdrop-filter]:bg-background/60',
        scrolled ? 'bg-background/80 shadow-sm' : 'bg-background/40',
      )}
    >
      <div className="container flex h-16 items-center gap-4">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="h-8 w-12 rounded-md bg-gradient-to-br from-primary to-indigo-500 flex items-center justify-center text-white font-bold shadow-sm group-hover:shadow-md transition-shadow">
            CNA
          </div>
          <span className="hidden font-semibold sm:inline-block tracking-tight">Create Awesome Node App</span>
        </Link>
        <nav className="ml-auto hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + '/');
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'relative px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground',
                  active && 'text-foreground',
                )}
              >
                <span>{item.label}</span>
                {active && (
                  <span className="absolute left-1/2 -bottom-px h-[2px] w-8 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-indigo-500" />
                )}
              </Link>
            );
          })}
        </nav>
        <div className="ml-auto flex items-center gap-1 md:gap-2">
          <Button
            variant={performanceMode ? 'secondary' : 'ghost'}
            size="icon"
            aria-label="Toggle performance mode"
            onClick={togglePerformanceMode}
            className={performanceMode ? 'text-primary' : ''}
          >
            <Gauge className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hidden md:inline-flex"
            aria-label="Open command palette (Ctrl+K)"
            onClick={onOpenCommand}
          >
            <Search className="h-5 w-5" />
          </Button>
          <ThemeToggle />
          <Link href="https://www.npmjs.com/package/create-awesome-node-app" target="_blank" aria-label="NPM Package">
            <Button variant="ghost" size="icon">
              <Package className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="https://github.com/Create-Node-App" target="_blank" aria-label="GitHub">
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
            </Button>
          </Link>
          <Button variant="outline" size="sm" className="md:hidden" aria-label="Search" onClick={onOpenCommand}>
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
