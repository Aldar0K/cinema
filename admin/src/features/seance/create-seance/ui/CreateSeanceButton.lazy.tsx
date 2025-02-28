import { Skeleton } from "@/shared/ui";
import { FC, lazy, Suspense } from "react";
import { CreateSeanceButtonProps } from "./CreateSeanceButton";

const CreateSeanceButtonLazy = lazy(() => import("./CreateSeanceButton"));

export const CreateSeanceButton: FC<CreateSeanceButtonProps> = (props) => {
  return (
    <Suspense fallback={<Skeleton className="h-[40px] w-[124px]" />}>
      <CreateSeanceButtonLazy {...props} />
    </Suspense>
  );
};
