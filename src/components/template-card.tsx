import { Package } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import type { Template } from '@/lib/schemas';

interface TemplateCardProps {
  template: Template;
}

export function TemplateCard({ template }: TemplateCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden border-primary/10 transition-all duration-300 hover:shadow-md hover:shadow-primary/10 hover:-translate-y-2 cursor-pointer group gradient-border shimmer">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2 mb-2">
          <div className="h-10 w-10 rounded-md bg-gradient-to-br from-primary/20 to-indigo-500/20 flex items-center justify-center group-hover:from-primary/40 group-hover:to-indigo-500/40 transition-all duration-300">
            <Package className="h-5 w-5 text-primary" />
          </div>
          <div className="text-xs font-medium text-muted-foreground">{template.category}</div>
        </div>
        <CardTitle className="text-xl group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-indigo-500 transition-all duration-300">
          {template.name}
        </CardTitle>
        <CardDescription className="line-clamp-2">{template.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pt-2">
        <div className="flex flex-wrap gap-1">
          {template.labels.slice(0, 3).map((label) => (
            <Badge
              key={label}
              variant="secondary"
              className="text-xs bg-secondary/50 backdrop-blur-sm transition-all duration-300 hover:bg-primary/20"
            >
              {label}
            </Badge>
          ))}
          {template.labels.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{template.labels.length - 3} more
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="text-xs text-muted-foreground">Type: {template.type}</CardFooter>
    </Card>
  );
}
