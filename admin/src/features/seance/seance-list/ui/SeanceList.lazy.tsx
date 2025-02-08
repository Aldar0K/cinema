import { FC, lazy, Suspense } from "react";

import { SeanceListProps } from "./SeanceList";
import { SeanceListSkeleton } from "./SeanceListSkeleton";

const SeanceListLazy = lazy(() => import("./SeanceList"));

export const SeanceList: FC<SeanceListProps> = (props) => {
  return (
    <Suspense fallback={<SeanceListSkeleton />}>
      <SeanceListLazy {...props} />
    </Suspense>
  );
};
