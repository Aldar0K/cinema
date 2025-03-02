import { FC, lazy, Suspense } from "react";

import { Skeleton } from "@/shared/ui";
import { SeanceGroupCardProps } from "./SeanceGroupCard";
const SeanceGroupCardLazy = lazy(() => import("./SeanceGroupCard"));

export const SeanceGroupCard: FC<SeanceGroupCardProps> = (props) => {
  return (
    <Suspense fallback={<Skeleton className="h-[200px]" />}>
      <SeanceGroupCardLazy {...props} />
    </Suspense>
  );
};
