'use client';

import { Filter, Search } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import type React from 'react';

import { useEffect, useState } from 'react';

import { AnimatedGradient } from '@/components/animated-gradient';
import { ExtensionCard } from '@/components/extension-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { getTemplatesData } from '@/lib/data';
import type { Extension } from '@/lib/schemas';

export default function ExtensionsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const typeParam = searchParams.get('type');

  const [extensions, setExtensions] = useState<Extension[]>([]);
  const [templateTypes, setTemplateTypes] = useState<string[]>([]);
  const [filteredExtensions, setFilteredExtensions] = useState<Extension[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get('search') || '',
  );

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const data = await getTemplatesData();
      setExtensions(data.extensions);

      // Get unique template types for the filter dropdown
      const types = Array.from(
        new Set(
          data.extensions.flatMap((ext) =>
            Array.isArray(ext.type) ? ext.type : [ext.type],
          ),
        ),
      );
      setTemplateTypes(types);

      setIsLoading(false);
    }

    fetchData();
  }, []);

  // Filter extensions whenever type param or search query changes
  useEffect(() => {
    if (extensions.length === 0) return;

    let filtered = [...extensions];

    // Apply type filter
    if (typeParam && typeParam !== 'all') {
      filtered = filtered.filter((extension) => {
        if (Array.isArray(extension.type)) {
          return extension.type.includes(typeParam);
        }
        return extension.type === typeParam;
      });
    }

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (extension) =>
          extension.name.toLowerCase().includes(query) ||
          extension.description.toLowerCase().includes(query) ||
          extension.labels.some((label) => label.toLowerCase().includes(query)),
      );
    }

    setFilteredExtensions(filtered);
  }, [typeParam, searchQuery, extensions]);

  // Handle type change
  const handleTypeChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value === 'all') {
      params.delete('type');
    } else {
      params.set('type', value);
    }

    router.push(`/extensions?${params.toString()}`);
  };

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);

    // Update URL with search query
    const params = new URLSearchParams(searchParams.toString());
    if (e.target.value) {
      params.set('search', e.target.value);
    } else {
      params.delete('search');
    }

    // Use replace instead of push to avoid adding to history for every keystroke
    router.replace(`/extensions?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-background/80 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-50">
            <AnimatedGradient />
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 fade-in-up">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 animate-gradient-text glow-text">
                  Extensions
                </h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Enhance your templates with these powerful extensions
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-5xl py-8 fade-in-up-delay-1">
              <div className="flex flex-col gap-4 md:flex-row">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search extensions..."
                    className="w-full bg-background/50 backdrop-blur-sm pl-8 border-indigo-500/20 focus:border-indigo-500/40 transition-all duration-300"
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                </div>
                <div className="flex gap-2">
                  <Select
                    defaultValue={typeParam || 'all'}
                    onValueChange={handleTypeChange}
                  >
                    <SelectTrigger className="w-[180px] bg-background/50 backdrop-blur-sm border-indigo-500/20 focus:border-indigo-500/40 transition-all duration-300">
                      <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent className="bg-background/80 backdrop-blur-sm border-indigo-500/20">
                      <SelectItem value="all">All Types</SelectItem>
                      {templateTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-background/50 backdrop-blur-sm border-indigo-500/20 hover:bg-background/70 transition-all duration-300"
                  >
                    <Filter className="h-4 w-4" />
                    <span className="sr-only">Filter</span>
                  </Button>
                </div>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-8 md:grid-cols-2 lg:grid-cols-3">
              {isLoading ? (
                <div className="col-span-3 text-center py-12">
                  <p className="text-muted-foreground">Loading extensions...</p>
                </div>
              ) : filteredExtensions.length > 0 ? (
                filteredExtensions.map((extension, index) => (
                  <div
                    key={extension.slug}
                    className={`fade-in-up-delay-${(index % 3) + 1}`}
                  >
                    <ExtensionCard extension={extension} />
                  </div>
                ))
              ) : (
                <div className="col-span-3 text-center py-12">
                  <p className="text-muted-foreground">
                    No extensions found. Please try a different search or type.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
