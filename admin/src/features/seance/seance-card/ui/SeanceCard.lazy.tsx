import { FC, lazy, Suspense } from "react";

import { Skeleton } from "@/shared/ui";
import { SeanceCardProps } from "./SeanceCard";
const SeanceCardLazy = lazy(() => import("./SeanceCard"));

export const SeanceCard: FC<SeanceCardProps> = (props) => {
  return (
    <Suspense fallback={<Skeleton className="h-[200px]" />}>
      <SeanceCardLazy {...props} />
    </Suspense>
  );
};
