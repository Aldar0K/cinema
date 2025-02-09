import { FC, lazy, Suspense } from "react";

import { Skeleton } from "@/shared/ui";
import { SeanceModalProps } from "./SeanceModal";
const SeanceModalLazy = lazy(() => import("./SeanceModal"));

export const SeanceModal: FC<SeanceModalProps> = (props) => {
  return (
    <Suspense fallback={<Skeleton className="h-[200px]" />}>
      <SeanceModalLazy {...props} />
    </Suspense>
  );
};
