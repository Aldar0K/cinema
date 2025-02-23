import { FC, lazy, Suspense } from "react";

import { Skeleton } from "@/shared/ui";
import { SelectedSeatCardProps } from "./SelectedSeatCard";
const SelectedSeatCardLazy = lazy(() => import("./SelectedSeatCard"));

export const SelectedSeatCard: FC<SelectedSeatCardProps> = (props) => {
  return (
    <Suspense fallback={<Skeleton className="h-[74px]" />}>
      <SelectedSeatCardLazy {...props} />
    </Suspense>
  );
};
