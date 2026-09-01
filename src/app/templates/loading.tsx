import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

function TemplateSkeleton() {
  return (
    <Card className="flex flex-col h-full overflow-hidden border-l-4">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2 mb-2">
          <Skeleton className="h-10 w-10 rounded-md" />
          <Skeleton className="h-3 w-24" />
        </div>
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full mt-2" />
        <Skeleton className="h-4 w-5/6" />
      </CardHeader>
      <CardContent className="flex-1 pt-2">
        <div className="flex gap-1">
          <Skeleton className="h-5 w-12 rounded-full" />
          <Skeleton className="h-5 w-16 rounded-full" />
          <Skeleton className="h-5 w-14 rounded-full" />
        </div>
      </CardContent>
      <CardFooter>
        <Skeleton className="h-3 w-20" />
      </CardFooter>
    </Card>
  );
}

export default function Loading() {
  return (
    <div className="container py-8">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <TemplateSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
