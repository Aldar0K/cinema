import { Skeleton } from "@/shared/ui";
import { FC, lazy, Suspense } from "react";
import { EditUserButtonProps } from "./EditUserButton";

const EditUserButtonLazy = lazy(() => import("./EditUserButton"));

export const EditUserButton: FC<EditUserButtonProps> = (props) => {
  return (
    <Suspense fallback={<Skeleton className="h-[40px] w-[124px]" />}>
      <EditUserButtonLazy {...props} />
    </Suspense>
  );
};
