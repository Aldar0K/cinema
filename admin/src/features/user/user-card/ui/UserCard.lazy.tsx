import { FC, lazy, Suspense } from "react";

import { Skeleton } from "@/shared/ui";
import { UserCardProps } from "./UserCard";
const UserCardLazy = lazy(() => import("./UserCard"));

export const UserCard: FC<UserCardProps> = (props) => {
  return (
    <Suspense fallback={<Skeleton className="h-[200px]" />}>
      <UserCardLazy {...props} />
    </Suspense>
  );
};
