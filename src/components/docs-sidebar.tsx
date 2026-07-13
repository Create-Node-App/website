'use client';

import { BookOpen, ChevronRight, Code, FileText, Home, Layers, Menu, Package, Search, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

interface NavGroup {
  title: string;
  items: NavItem[];
}

const navGroups: NavGroup[] = [
  {
    title: 'Getting Started',
    items: [
      { label: 'Introduction', href: '/docs', icon: <Home className="h-4 w-4" /> },
      { label: 'AGENTS.md', href: '/docs/agents-md', icon: <FileText className="h-4 w-4" /> },
    ],
  },
  {
    title: 'Templates',
    items: [
      { label: 'Overview', href: '/docs/templates', icon: <Layers className="h-4 w-4" /> },
      { label: 'Customization', href: '/docs/templates/customization', icon: <Code className="h-4 w-4" /> },
    ],
  },
  {
    title: 'Extensions',
    items: [{ label: 'Overview', href: '/docs/extensions', icon: <Package className="h-4 w-4" /> }],
  },
  {
    title: 'Contributing & Reference',
    items: [
      { label: 'Contributing', href: '/docs/contributing', icon: <BookOpen className="h-4 w-4" /> },
      { label: 'Advanced Usage', href: '/docs/advanced/usage', icon: <ChevronRight className="h-4 w-4" /> },
    ],
  },
];

function SidebarContent() {
  const pathname = usePathname();
  const [query, setQuery] = useState('');

  const filtered = navGroups
    .map((group) => ({
      ...group,
      items: group.items.filter((item) => item.label.toLowerCase().includes(query.toLowerCase())),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <div className="flex h-full flex-col gap-2">
      <div className="px-3 pt-1">
        <Link
          href="/"
          className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors mb-3"
        >
          <Home className="h-3 w-3" />
          Back to home
        </Link>
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-muted-foreground pointer-events-none" />
          <Input
            placeholder="Search docs..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-8 h-8 text-sm"
          />
        </div>
      </div>
      <Separator />
      <ScrollArea className="flex-1 px-3 pb-4">
        <nav className="space-y-4">
          {filtered.map((group) => (
            <div key={group.title} className="space-y-1">
              <p className="px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">{group.title}</p>
              {group.items.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors',
                      active
                        ? 'bg-primary/10 text-primary font-medium'
                        : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                    )}
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                );
              })}
            </div>
          ))}
          {filtered.length === 0 && (
            <p className="px-2 py-4 text-sm text-muted-foreground text-center">No pages match &ldquo;{query}&rdquo;</p>
          )}
        </nav>
      </ScrollArea>
    </div>
  );
}

export function DocsSidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <aside className="hidden md:flex w-60 shrink-0 flex-col border-r bg-background/50 h-[calc(100vh-4rem)] sticky top-16">
        <SidebarContent />
      </aside>

      <div className="md:hidden fixed bottom-4 left-4 z-40">
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline" aria-label="Open docs navigation">
              <Menu className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 p-0 pt-6">
            <SheetHeader className="px-4 pb-2">
              <SheetTitle className="flex items-center justify-between">
                Docs Navigation
                <Button variant="ghost" size="icon" onClick={() => setMobileOpen(false)} aria-label="Close">
                  <X className="h-4 w-4" />
                </Button>
              </SheetTitle>
            </SheetHeader>
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
