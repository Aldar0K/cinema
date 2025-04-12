import { Loader } from "lucide-react";

import { Skeleton } from "@/shared/ui";

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Hero section skeleton */}
      <div className="relative h-[70vh] min-h-[500px] w-full overflow-hidden rounded-xl bg-muted/50 animate-pulse">
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader className="h-12 w-12 animate-spin text-primary/70" />
        </div>
        <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 space-y-4 w-full max-w-md">
          <Skeleton className="h-8 w-24" />
          <Skeleton className="h-12 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <div className="flex gap-3 pt-2">
            <Skeleton className="h-10 w-32" />
            <Skeleton className="h-10 w-32" />
          </div>
        </div>
      </div>

      {/* Featured movies section skeleton */}
      <div className="space-y-4">
        <Skeleton className="h-8 w-48" />
        <div className="flex gap-4 overflow-x-hidden pb-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="min-w-[250px] flex-shrink-0">
              <Skeleton className="aspect-[2/3] w-full rounded-t-lg" />
              <div className="pt-4 px-2 space-y-2">
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="h-9 w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Movie showtimes section skeleton */}
      <div className="space-y-6">
        <Skeleton className="h-8 w-64" />
        <div className="grid grid-cols-7 gap-2 h-12">
          {Array.from({ length: 7 }).map((_, i) => (
            <Skeleton key={i} className="rounded-md" />
          ))}
        </div>
        <div className="space-y-6">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="border rounded-lg overflow-hidden">
              <div className="p-6">
                <Skeleton className="h-6 w-48" />
              </div>
              <div className="border-t p-6">
                <div className="flex flex-wrap gap-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Skeleton key={j} className="h-10 w-20" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
