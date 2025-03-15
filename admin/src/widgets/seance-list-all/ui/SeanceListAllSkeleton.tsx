import type { FC } from "react";

import { Skeleton } from "@/shared/ui";
import { cn } from "@/shared/utils";

type SeanceListAllSkeletonProps = {
  className?: string;
};

export const SeanceListAllSkeleton: FC<SeanceListAllSkeletonProps> = (
  props,
) => {
  const { className } = props;

  return (
    <div className={cn("grid gap-4 md:grid-cols-2 lg:grid-cols-3", className)}>
      {Array.from({ length: 6 }).map((_, i) => (
        <Skeleton key={i} className="h-[200px]" />
      ))}
    </div>
  );
};
