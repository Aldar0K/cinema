import { type FC } from "react";

import { useGetUsersQuery } from "@/entities/user";
import { UserCard } from "@/features/user/user-card";
import { cn } from "@/shared/utils";
import { UsersListAllSkeleton } from "./UsersListAllSkeleton";

export type UsersListAllProps = {
  className?: string;
};

const UsersListAll: FC<UsersListAllProps> = (props) => {
  const { className } = props;
  const { data: users, isLoading } = useGetUsersQuery();

  if (isLoading) {
    return <UsersListAllSkeleton />;
  }

  if (!users.length) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Нет доступных сеансов</p>
      </div>
    );
  }

  return (
    <div
      className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}
      role="list"
      data-testid="UsersListAll"
    >
      {users.map((user) => (
        <UserCard key={user.id} user={user} editable deleteable />
      ))}
    </div>
  );
};

export default UsersListAll;
