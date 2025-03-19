import { FC } from "react";

import { cn } from "@/shared/utils";
import { UsersListAll } from "@/widgets/users-list-all";

const UsersPage: FC = () => {
  return (
    <main className={cn("space-y-6")} data-testid="SeancesPage">
      <UsersListAll />
    </main>
  );
};

export default UsersPage;
