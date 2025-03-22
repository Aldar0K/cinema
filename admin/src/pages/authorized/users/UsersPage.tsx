import { FC } from "react";

import { CreateUserButton } from "@/features/user/create-user";
import { cn } from "@/shared/utils";
import { UsersListAll } from "@/widgets/users-list-all";

const UsersPage: FC = () => {
  return (
    <main className={cn("main")} data-testid="SeancesPage">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Users</h1>
            <p className="text-muted-foreground">Manage your users here</p>
          </div>
          <CreateUserButton />
        </div>
        <UsersListAll />
      </div>
    </main>
  );
};

export default UsersPage;
