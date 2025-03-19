import { FC, lazy, Suspense } from "react";

import { UsersListAllProps } from "./UsersListAll";
import { UsersListAllSkeleton } from "./UsersListAllSkeleton";

const UsersListAllLazy = lazy(() => import("./UsersListAll"));

export const UsersListAll: FC<UsersListAllProps> = (props) => {
  return (
    <Suspense fallback={<UsersListAllSkeleton />}>
      <UsersListAllLazy {...props} />
    </Suspense>
  );
};
