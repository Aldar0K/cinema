import { FC, lazy, Suspense } from "react";

import { Skeleton } from "@/shared/ui";
import { SeanceSeatsProps } from "./SeanceSeats";
const SeanceSeatsLazy = lazy(() => import("./SeanceSeats"));

export const SeanceSeats: FC<SeanceSeatsProps> = (props) => {
  return (
    <Suspense fallback={<Skeleton className="h-[200px]" />}>
      <SeanceSeatsLazy {...props} />
    </Suspense>
  );
};
