import { Puzzle } from 'lucide-react';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { Extension } from '@/lib/schemas';

interface ExtensionCardProps {
  extension: Extension;
  templateSlug?: string; // Optional template slug for context-aware linking
}

export function ExtensionCard({ extension, templateSlug }: ExtensionCardProps) {
  // Determine the link based on context
  const href = templateSlug
    ? `/templates/${templateSlug}/extensions/${extension.slug}`
    : `/extensions/${extension.slug}`;

  return (
    <Link href={href}>
      <Card className="flex flex-col h-full overflow-hidden border-primary/10 transition-all duration-300 hover:shadow-md hover:shadow-indigo-500/10 hover:-translate-y-2 cursor-pointer group gradient-border shimmer">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-10 w-10 rounded-md bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center group-hover:from-indigo-500/40 group-hover:to-purple-500/40 transition-all duration-300">
              <Puzzle className="h-5 w-5 text-indigo-500" />
            </div>
            <div className="text-xs font-medium text-muted-foreground">
              {extension.category}
            </div>
          </div>
          <CardTitle className="text-xl group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-purple-500 transition-all duration-300">
            {extension.name}
          </CardTitle>
          <CardDescription className="line-clamp-2">
            {extension.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1 pt-2">
          <div className="flex flex-wrap gap-1">
            {extension.labels.slice(0, 3).map((label) => (
              <Badge
                key={label}
                variant="secondary"
                className="text-xs bg-secondary/50 backdrop-blur-sm transition-all duration-300 hover:bg-indigo-500/20"
              >
                {label}
              </Badge>
            ))}
            {extension.labels.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{extension.labels.length - 3} more
              </Badge>
            )}
          </div>
        </CardContent>
        <CardFooter className="text-xs text-muted-foreground">
          Compatible with:{' '}
          {Array.isArray(extension.type)
            ? extension.type.join(', ')
            : extension.type}
        </CardFooter>
      </Card>
    </Link>
  );
}
