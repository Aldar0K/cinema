import { FC, lazy, Suspense } from "react";

import { SeanceListAllProps } from "./SeanceListAll";
import { SeanceListAllSkeleton } from "./SeanceListAllSkeleton";

const SeanceListAllLazy = lazy(() => import("./SeanceListAll"));

export const SeanceListAll: FC<SeanceListAllProps> = (props) => {
  return (
    <Suspense fallback={<SeanceListAllSkeleton />}>
      <SeanceListAllLazy {...props} />
    </Suspense>
  );
};
