import { Skeleton } from "@/shared/ui";
import { FC, lazy, Suspense } from "react";
import { EditSeanceButtonProps } from "./EditSeanceButton";

const EditSeanceButtonLazy = lazy(() => import("./EditSeanceButton"));

export const EditSeanceButton: FC<EditSeanceButtonProps> = (props) => {
  return (
    <Suspense fallback={<Skeleton className="h-[40px] w-[124px]" />}>
      <EditSeanceButtonLazy {...props} />
    </Suspense>
  );
};
