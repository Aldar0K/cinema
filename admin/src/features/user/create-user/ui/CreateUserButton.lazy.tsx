import { Skeleton } from "@/shared/ui";
import { FC, lazy, Suspense } from "react";
import { CreateUserButtonProps } from "./CreateUserButton";

const CreateUserButtonLazy = lazy(() => import("./CreateUserButton"));

export const CreateUserButton: FC<CreateUserButtonProps> = (props) => {
  return (
    <Suspense fallback={<Skeleton className="h-[40px] w-[124px]" />}>
      <CreateUserButtonLazy {...props} />
    </Suspense>
  );
};
